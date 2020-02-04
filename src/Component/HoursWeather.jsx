import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'antd/lib/grid'

import Loading from './Loading.jsx'
import HoursWeatherCard from './HoursWeatherCard.jsx'

import { LocationContext } from '../Context/locationContext.js'
import { getHoursData } from '../fetchData.js'

import { CSSTransition, SwitchTransition} from 'react-transition-group'
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
                <SwitchTransition>
                    <CSSTransition key={dataFetching?"false":"true"} classNames="animate-fade" timeout={500} appear>
                        <HoursWeatherCard {...obj} />
                    </CSSTransition>
                </SwitchTransition>
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
