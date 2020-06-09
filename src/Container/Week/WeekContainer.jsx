import React, { useState, useEffect, useContext } from 'react'

import ContentTitle from '../../Component/ContentTitle/ContentTitle.jsx'
import WeekWeather from '../../Component/WeekWeather/WeekWeather.jsx'
import WeekChart from '../../Component/Chart/WeekChart.jsx'
import { LocationContext } from '../../Context/locationContext.js'
import { getWeekData } from '../../fetchData.js'
import Layout from 'antd/lib/layout/layout'
import './WeekContainer.scss'
const { Content } = Layout

const WeekContainer = () => {
  const { location, dispatch } = useContext(LocationContext)
  const [data, setData] = useState([])

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true })
    getWeekData(location)
      .then(res => {
        setData(res)
        dispatch({ type: 'SET_LOADING', payload: false })
      })
      .catch(() => {
        dispatch({ type: 'SET_LOADING', payload: false })
      })
  }, [location, dispatch])

  return (
    <Content>
      <div className='week-container'>
        <ContentTitle title={'一周天氣預報'} />
        <WeekWeather data={data} />
        <WeekChart data={data} />
      </div>
    </Content>
  )
}

export default WeekContainer
