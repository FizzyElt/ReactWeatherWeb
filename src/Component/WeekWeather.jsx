import React, { useContext, useEffect, useState } from 'react';


import SliderShow from './SliderShow.jsx'
import WeekWeatherCard from './WeekWeatherCard.jsx'
import Loading from './Loading.jsx'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { LocationContext } from '../Context/locationContext.js'

import { getWeekData } from '../fetchData.js'

import '../scss/animation.scss'

const WeekWeather = () => {

    const { currentLocation, dataFetching, setLoading } = useContext(LocationContext)
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true)
        getWeekData(currentLocation)
            .then((res) => {
                setData(res)
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
            })
    }, [currentLocation])
    const list = data.map((obj, i) => {
        return (<SliderShow.Item key={i}>
            <WeekWeatherCard {...obj} />
        </SliderShow.Item>)
    })
    return (
        <TransitionGroup component={null} exit={false}>
            {data.length>0&&!dataFetching?
            (<CSSTransition classNames="animate-fade" timeout={800} key={!dataFetching}>
                <SliderShow>
                    {list}
                </SliderShow>
            </CSSTransition>):
            <CSSTransition timeout={0} key={!dataFetching}>
                <Loading/>
            </CSSTransition>}
        </TransitionGroup>
    )

}

export default WeekWeather;
