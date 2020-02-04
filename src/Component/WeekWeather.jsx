import React, { useContext, useEffect } from 'react';
import { LocationContext } from '../Context/locationContext.js'

import { getWeekData } from '../fetchData.js'

const WeekWeather = () => {

    const { currentLocation, dataFetching, setLoading } = useContext(LocationContext)
    useEffect(() => {
        setLoading(true)
        getWeekData(currentLocation)
            .then((res) => {
                setLoading(false)
                console.log(res)
            }).catch((err) => {
                setLoading(false)
            })
    }, [currentLocation])
    return (
        <div>

        </div>
    );
}

export default WeekWeather;
