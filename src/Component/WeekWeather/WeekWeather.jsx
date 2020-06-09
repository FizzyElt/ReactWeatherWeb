import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import SliderShow from '../Slider/SliderShow.jsx'
import WeekWeatherCard from './WeekWeatherCard.jsx'
import { CSSTransition } from 'react-transition-group'

import { LocationContext } from '../../Context/locationContext.js'

import '../../scss/animation.scss'

const WeekWeather = ({ data }) => {
  const { loading } = useContext(LocationContext)

  const list = data.map((obj, i) => {
    return (
      <SliderShow.Item key={i}>
        <WeekWeatherCard {...obj} />
      </SliderShow.Item>
    )
  })

  if (data.length > 0) {
    return (
      <CSSTransition classNames='fade-up' appear={false} timeout={1000} in={!loading}>
        <SliderShow>{list}</SliderShow>
      </CSSTransition>
    )
  } else {
    return null
  }
}

WeekWeather.propTypes = {
  data: PropTypes.array.isRequired,
}

export default WeekWeather
