import React, { useEffect, useState, useContext } from 'react'
import { Row, Col } from 'antd/lib/grid'

import HoursWeatherCard from './HoursWeatherCard.jsx'

import { LocationContext } from '../../Context/locationContext.js'
import { DeviceWidthContext } from '../../Context/deviceWidthContext.js'
import { getHoursData } from '../../fetchData.js'

import { CSSTransition } from 'react-transition-group'
import '../../scss/animation.scss'

const HoursWeather = () => {
  const { location, loading, dispatch } = useContext(LocationContext)
  const { isMobile } = useContext(DeviceWidthContext)
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

  const list = (() => {
    if (isMobile) {
      return data.map((obj, i) => {
        return (
          <Row type='flex' key={i}>
            <CSSTransition in={!loading} appear={false} classNames='animate-fade' timeout={1000}>
              <HoursWeatherCard {...obj} />
            </CSSTransition>
          </Row>
        )
      })
    } else {
      return data.map((obj, i) => {
        return (
          <Col span={8} key={i}>
            <CSSTransition in={!loading} appear={false} classNames='animate-fade' timeout={1000}>
              <HoursWeatherCard {...obj} />
            </CSSTransition>
          </Col>
        )
      })
    }
  })()

  return (
    <Row type='flex' justify='center'>
      {list}
    </Row>
  )
}

export default HoursWeather
