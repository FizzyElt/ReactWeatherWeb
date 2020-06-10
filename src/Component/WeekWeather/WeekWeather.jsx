import React, { useContext, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

//component
import SliderShow from '../Slider/SliderShow.jsx'
import WeekWeatherCard from './WeekWeatherCard.jsx'

//context
import { LocationContext } from '../../Context/locationContext.js'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

import '../../scss/animation.scss'

const WeekWeather = ({ data }) => {
  const { loading } = useContext(LocationContext)
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

  const list = data.map((obj, i) => {
    return (
      <SliderShow.Item key={i}>
        <WeekWeatherCard {...obj} />
      </SliderShow.Item>
    )
  })

  if (data.length > 0) {
    return (
      <SwitchTransition>
        <CSSTransition key={lazy} classNames='fade-up' timeout={600} in={!loading}>
          <SliderShow>{list}</SliderShow>
        </CSSTransition>
      </SwitchTransition>
    )
  } else {
    return null
  }
}

WeekWeather.propTypes = {
  data: PropTypes.array.isRequired,
}

export default WeekWeather
