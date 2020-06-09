import React, { useState, useContext, useEffect } from 'react'

//component
import ContentTitle from '../../Component/ContentTitle/ContentTitle.jsx'
import HoursWeather from '../../Component/HoursWeather/HoursWeather.jsx'

import { LocationContext } from '../../Context/locationContext.js'
import { getHoursData } from '../../fetchData.js'

//layout
import Layout from 'antd/lib/layout/layout'
import './HoursContainer.scss'

const { Content } = Layout

const HoursContainer = () => {
  const { location, dispatch } = useContext(LocationContext)
  const [data, setData] = useState([])

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true })
    getHoursData(location)
      .then(res => {
        setData(res)
        dispatch({ type: 'SET_LOADING', payload: false })
      })
      .catch(err => {
        dispatch({ type: 'SET_LOADING', payload: false })
        console.error(err)
      })
  }, [location, dispatch])

  return (
    <Content>
      <div className='hours-content'>
        <ContentTitle title={'36小時天氣預報'} />
        <HoursWeather data={data} />
      </div>
    </Content>
  )
}

export default HoursContainer
