import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'
import './Covid19Card.scss'

const { Title } = Typography

//TODO card layout
const Covid19Card = ({ country = '世界', covidObj = {} }) => {
  const { confirmed, recovered, deaths } = covidObj
  return (
    <div className='covid19-card'>
      <Title className='title'>{country}</Title>
      <Title level={2}>總確診數</Title>
      <Title level={2} className='font-color'>
        {confirmed} 人
      </Title>
      <Title level={2}>康復人數</Title>
      <Title level={2} className='font-color'>
        {recovered} 人
      </Title>
      <Title level={2}>死亡數</Title>
      <Title level={2} className='font-color'>
        {deaths} 人
      </Title>
    </div>
  )
}

Covid19Card.propTypes = {
  country: PropTypes.string,
  covidObj: PropTypes.object,
}

export default Covid19Card
