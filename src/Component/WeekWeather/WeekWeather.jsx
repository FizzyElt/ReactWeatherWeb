import React, { useContext } from 'react';


import SliderShow from '../Slider/SliderShow.jsx'
import WeekWeatherCard from './WeekWeatherCard.jsx'
import { CSSTransition } from 'react-transition-group'

import { LocationContext } from '../../Context/locationContext.js'
import { WeekData } from '../../Context/weekDataContext.js'


import '../../scss/animation.scss'

const WeekWeather = () => {

    const { dataFetching } = useContext(LocationContext)
    const { data } = useContext(WeekData)


    const list = data.map((obj, i) => {
        return (<SliderShow.Item key={i}>
            <WeekWeatherCard {...obj} />
        </SliderShow.Item>)
    })
    if (data.length>0) {
        return (
            <CSSTransition classNames="fade-up" appear={false} timeout={1000} in={!dataFetching}>
            <SliderShow>
                {list}
            </SliderShow>
            </CSSTransition>)
    }else{
        return null
    }


}

export default WeekWeather;
