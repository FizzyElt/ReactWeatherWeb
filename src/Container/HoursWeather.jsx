import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'antd/lib/grid'

import Loading from '../Component/Loading.jsx'
import WeatherCard from '../Component/WeatherCard.jsx'

import { LocationContext } from '../Context/locationContext.js'
import { getHoursData } from '../fetchData.js'

import { CSSTransition, TransitionGroup, SwitchTransition, Transition } from 'react-transition-group'
import '../scss/animation.scss'



const HoursWeather = () => {
    const { currentLocation, dataFetching, setLoading } = useContext(LocationContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        getHoursData(currentLocation).then(res => {
            setData(res)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
        })
    }, [currentLocation]);

    const list = data.map((obj, i) => {
        return (
            <Col span={8} key={i} >
                <CSSTransition in={!dataFetching} classNames="animate-fade" timeout={800} appear>
                    <WeatherCard {...obj} key={i} />
                </CSSTransition>
            </Col>
        );
    })

    return (
        <Row type="flex">
            {list}
        </Row>
    );
}

export default HoursWeather;
