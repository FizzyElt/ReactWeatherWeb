import React, { useContext } from 'react';
import { Cascader,Select } from 'antd/es'

//Context
import { LocationContext } from '../Context/locationContext.js'

const {Option} = Select
//城市列表
const options = [
    {
        value: '宜蘭縣',
        label: '宜蘭縣'
    },
    {
        value: '花蓮縣',
        label: '花蓮縣'
    },
    {
        value: '臺東縣',
        label: '臺東縣'
    },
    {
        value: "澎湖縣",
        label: "澎湖縣"
    },
    {
        value: "金門縣",
        label: "金門縣"
    },
    {
        value: "連江縣",
        label: "連江縣"
    },
    {
        value: "臺北市",
        label: "臺北市"
    },
    {
        value: "新北市",
        label: "新北市"
    },
    {
        value: "桃園市",
        label: "桃園市"
    },
    {
        value: "臺中市",
        label: "臺中市"
    },
    {
        value: "臺南市",
        label: "臺南市"
    },
    {
        value: "高雄市",
        label: "高雄市"
    },
    {
        value: "基隆市",
        label: "基隆市"
    },
    {
        value: "新竹縣",
        label: "新竹縣"
    },
    {
        value: "新竹市",
        label: "新竹市"
    },
    {
        value: "苗栗縣",
        label: "苗栗縣"
    },
    {
        value: "彰化縣",
        label: "彰化縣"
    },
    {
        value: "南投縣",
        label: "南投縣"
    },
    {
        value: "雲林縣",
        label: "雲林縣"
    },
    {
        value: "嘉義縣",
        label: "嘉義縣"
    },
    {
        value: "嘉義市",
        label: "嘉義市"
    },

    {
        value: "屏東縣",
        label: "屏東縣"
    },
]


//選擇城市
const LocationSelect = () => {

    const { currentLocation, setLocation, dataFetching } = useContext(LocationContext);

    const onChange = value => {

        setLocation(value)
    }

    return (
        <Select value={currentLocation} style={{width:"100px"}} onChange={onChange} disabled={dataFetching}>
            {
                options.map((name,i)=>(
                <Option value={name.value} key={i}>{name.value}</Option>
                ))
            }
        </Select>
    );
}

export default LocationSelect;
