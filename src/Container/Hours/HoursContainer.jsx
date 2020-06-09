import React from 'react'

//component
import ContentTitle from '../../Component/ContentTitle/ContentTitle.jsx'
import HoursWeather from '../../Component/HoursWeather/HoursWeather.jsx'

//layout
import Layout from 'antd/lib/layout/layout'
import './HoursContainer.scss'

const { Content } = Layout

const HoursContainer = () => {
  return (
    <Content>
      <div className='hours-content'>
        <ContentTitle title={'36小時天氣預報'} />
        <HoursWeather />
      </div>
    </Content>
  )
}

export default HoursContainer
