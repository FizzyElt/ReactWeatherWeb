import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'antd/lib/grid'
import Loading from '../Component/Loading.jsx'
import { LocationContext } from '../Context/locationContext.js'

import { getHoursData } from '../fetchData.js'
const HoursWeather = () => {
    const { currentLocation, dataFetching, setLoading } = useContext(LocationContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        getHoursData(currentLocation).then(res=>{
            setLoading(false)
            console.log(res)
        }).catch(err=>{
            setLoading(false)
        })
    }, [currentLocation]);

    return (
        <Row type="flex">
            {dataFetching ? <Loading /> : <h2>success</h2>}
        </Row>
    );
}

export default HoursWeather;
