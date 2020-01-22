import axios from 'axios'
import { Token } from './apiToken.js'

const hoursUrl=`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${Token}`

export const getHoursData=(location)=>{
    function dataFormater(data){
        let result=[]
        return
    }
    return new Promise((resolve,reject)=>{
        axios.get(hoursUrl,{
            params:{
                locationName:location,
            }
        }).then((res)=>{
            console.log(dataFormater(res.data.records.location[0].weatherElement))
            resolve(res)
        }).catch((err)=>{
            console.log('get error')
            reject(err)
        })
    })
}