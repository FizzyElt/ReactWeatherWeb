import React, { useContext, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '../../AntDesign/layout.js'

//component
import HoursWeatherCard from './HoursWeatherCard.jsx'

//context
import { LocationContext } from '../../Context/locationContext.js'
import { DeviceWidthContext } from '../../Context/deviceWidthContext.js'

import { CSSTransition, SwitchTransition } from 'react-transition-group'
import '../../scss/animation.scss'

const HoursWeather = ({ data }) => {
  const { loading } = useContext(LocationContext)
  const { isMobile } = useContext(DeviceWidthContext)

  const [lazy, setLazy] = useState(true)
  const firstFetch = useRef(true) //畫面切換首次拿取資料

  useEffect(() => {
    if (!loading) {
      setLazy(true)
    } else {
      if (firstFetch.current) {
        firstFetch.current = false
      } else {
        setLazy(false)
      }
    }
  }, [loading])

  const list = (() => {
    if (isMobile) {
      return data.map((obj, i) => {
        return (
          <Row type='flex' key={i}>
            <SwitchTransition>
              <CSSTransition key={lazy} classNames='animate-fade' timeout={1000}>
                <HoursWeatherCard {...obj} />
              </CSSTransition>
            </SwitchTransition>
          </Row>
        )
      })
    } else {
      return data.map((obj, i) => {
        return (
          <Col span={8} key={i}>
            <SwitchTransition>
              <CSSTransition key={lazy} classNames='animate-fade' timeout={1000}>
                <HoursWeatherCard {...obj} />
              </CSSTransition>
            </SwitchTransition>
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

HoursWeather.propTypes = {
  data: PropTypes.array.isRequired,
}

export default HoursWeather
