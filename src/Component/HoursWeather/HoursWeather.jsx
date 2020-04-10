import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'antd/lib/grid'

import HoursWeatherCard from './HoursWeatherCard.jsx'

import { LocationContext } from '../../Context/locationContext.js'
import { DeviceWidthContext } from '../../Context/deviceWidthContext.js'
import { getHoursData } from '../../fetchData.js'

import { CSSTransition } from 'react-transition-group'
import '../../scss/animation.scss'



const HoursWeather = () => {
    const { currentLocation, dataFetching, setLoading } = useContext(LocationContext);
    const { isMobile } = useContext(DeviceWidthContext)
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        getHoursData(currentLocation).then(res => {
            setData(res)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            console.error(err)
        })
    }, [currentLocation]);

    const list = (() => {
        if (isMobile) {
            return data.map((obj, i) => {
                return (
                    <Row type='flex' key={i} >
                        <CSSTransition
                            in={!dataFetching}
                            appear={false}
                            classNames="animate-fade"
                            timeout={1000}>
                            <HoursWeatherCard {...obj} />
                        </CSSTransition>
                    </Row>
                );
            })
        } else {
            return data.map((obj, i) => {
                return (
                    <Col span={8} key={i} >
                        <CSSTransition
                            in={!dataFetching}
                            appear={false}
                            classNames="animate-fade"
                            timeout={1000}>
                            <HoursWeatherCard {...obj} />
                        </CSSTransition>
                    </Col>
                );
            })
        }
    })()

    return (
        <Row type="flex" justify='center'>
            {list}
        </Row>
    );
}

export default HoursWeather;
