import React, { useState, useEffect, useContext } from 'react';


import ContentTitle from '../../Component/ContentTitle/ContentTitle.jsx'
import WeekWeather from '../../Component/WeekWeather/WeekWeather.jsx'
import WeekChart from '../../Component/Chart/WeekChart.jsx'
import { WeekData } from '../../Context/weekDataContext.js'
import { LocationContext } from '../../Context/locationContext.js'
import { getWeekData } from '../../fetchData.js'
import Layout from 'antd/lib/layout/layout'
import './WeekContainer.scss'
const { Content } = Layout

const WeekContainer = () => {
    const { currentLocation, setLoading } = useContext(LocationContext)
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        getWeekData(currentLocation).then(res => {
            setData(res)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
        })
    }, [currentLocation])


    return (
        <WeekData.Provider value={{
            data: data,
        }}>
            <Content>
                <div className="week-container">
                    <ContentTitle title={"一周天氣預報"} />
                    <WeekWeather />
                    <WeekChart />
                </div>
            </Content>
        </WeekData.Provider>
    );
}

export default WeekContainer;
