import axios from 'axios'
import { Token } from './apiToken.js'

const hoursUrl = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001`

export const getHoursData = (location) => {
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
    function dataFormater(data) {    //資料格式整理
        let result = [{}, {}, {}]
        data.forEach((obj, i) => {
            obj.time.forEach((value, index) => {
                if (i === 0) {
                    result[index]["startTime"] = value.startTime
                    result[index]["endTime"] = value.endTime
                }
                if (obj.elementName !== "Wx") {
                    result[index][obj.elementName] = value.parameter.parameterName
                } else {
                    result[index][obj.elementName] = {
                        name: value.parameter.parameterName,
                        value: value.parameter.parameterValue
                    }
                }
            })
        })
        return result
    }
    return new Promise((resolve, reject) => {
        axios.get(hoursUrl, {
            params: {
                locationName: location,
                Authorization:Token
            }
        }).then((res) => {
            resolve(dataFormater(res.data.records.location[0].weatherElement))
        }).catch((err) => {
            console.log('get error')
            reject(err)
        })
    })
}