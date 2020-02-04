import React, { useContext, useEffect, useState } from 'react';


import SliderShow from './SliderShow.jsx'
import WeekWeatherCard from './WeekWeatherCard.jsx'

import { LocationContext } from '../Context/locationContext.js'

import { getWeekData } from '../fetchData.js'

const WeekWeather = () => {

    const { currentLocation, dataFetching, setLoading } = useContext(LocationContext)
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true)
        getWeekData(currentLocation)
            .then((res) => {
                setData(res)
                console.log(res)
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
            })
    }, [currentLocation])
    const list = data.map((obj, i) => {
        return (<SliderShow.Item key={i}>
            <WeekWeatherCard {...obj}/>
        </SliderShow.Item>)
    })
    return (
        <SliderShow loading={dataFetching}>
            {data ? list : <SliderShow.Item>gggg</SliderShow.Item>}
        </SliderShow>
    );
}

export default WeekWeather;
