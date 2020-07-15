import axios from 'axios'
import { Token } from './apiToken.js'

const hoursUrl = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001`
const weekUrl =
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?elementName=MinT&elementName=MaxT&elementName=MinAT&elementName=MaxAT&elementName=Wx&elementName=RH'
const covidUrl = 'https://covid19.mathdro.id/api/'
export const getHoursData = location => {
  /**
   * {
   *  startTime:"",時段開始時間
   *  endTime:"",  時段結束時間
   *  PoP:"20",    降雨機率
   *  MinT:"30",   最低溫 C
   *  MaxT:"30"    最高溫 C
   *  CI:""        體感舒適度
   *  Wx:{         天氣狀況
   *     name:"",
   *     value:""
   *  }
   * }
   */
  function dataFormatter(data) {
    //資料格式整理
    let result = [{}, {}, {}]
    data.forEach((obj, i) => {
      obj.time.forEach((value, index) => {
        if (i === 0) {
          result[index]['startTime'] = value.startTime
          result[index]['endTime'] = value.endTime
        }
        if (obj.elementName !== 'Wx') {
          result[index][obj.elementName] = value.parameter.parameterName
        } else {
          result[index][obj.elementName] = {
            name: value.parameter.parameterName,
            value: value.parameter.parameterValue,
          }
        }
      })
    })
    return result
  }
  return new Promise((resolve, reject) => {
    axios
      .get(hoursUrl, {
        params: {
          locationName: location,
          Authorization: Token,
        },
      })
      .then(res => {
        resolve(dataFormatter(res.data.records.location[0].weatherElement))
      })
      .catch(err => {
        console.log('get error')
        reject(err)
      })
  })
}

export const getWeekData = location => {
  /*
   * {
   *  startTime:"",時段開始時間
   *  endTime:"",  時段結束時間
   *  MinT:"30",   最低溫 C
   *  MaxT:"30",   最高溫 C
   *  MinAT,       最低體感溫度
   *  MaxAT,       最高體感溫度
   *  RH,          相對溼度
   *  Wx:{         天氣狀況
   *     name:"",
   *     value:""
   *  }
   * }
   */

  function dataFormatter(data) {
    let result = (() => {
      let arr = []
      for (let i = 0; i < data[0].time.length; i++) {
        arr.push({})
      }
      return arr
    })()
    data.forEach((obj, i) => {
      obj.time.forEach((value, index) => {
        if (i === 0) {
          result[index]['startTime'] = value.startTime
          result[index]['endTime'] = value.endTime
        }
        if (obj.elementName !== 'Wx') {
          result[index][obj.elementName] = value.elementValue[0].value
        } else {
          result[index][obj.elementName] = {
            name: value.elementValue[0].value,
            value: value.elementValue[1].value,
          }
        }
      })
    })
    return result
  }
  return new Promise((resolve, reject) => {
    axios
      .get(weekUrl, {
        params: {
          locationName: location,
          Authorization: Token,
        },
      })
      .then(res => {
        resolve(dataFormatter(res.data.records.locations[0].location[0].weatherElement))
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

export const getCovid19All = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(covidUrl)
      .then(res => {
        const obj = {
          confirmed: res.data.confirmed.value,
          recovered: res.data.recovered.value,
          deaths: res.data.deaths.value,
        }
        resolve(obj)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const getCovid19TW = country => {
  return new Promise((resolve, reject) => {
    axios
      .get(covidUrl + 'countries/' + country)
      .then(res => {
        const obj = {
          confirmed: res.data.confirmed.value,
          recovered: res.data.recovered.value,
          deaths: res.data.deaths.value,
        }
        resolve(obj)
      })
      .catch(err => {
        reject(err)
      })
  })
}
