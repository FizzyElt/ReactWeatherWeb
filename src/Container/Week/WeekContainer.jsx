import React from 'react';


import ContentTitle from '../../Component/ContentTitle/ContentTitle.jsx'
import WeekWeather from '../../Component/WeekWeather/WeekWeather.jsx'

import Layout from 'antd/lib/layout/layout'
import './WeekContainer.scss'
const { Content } = Layout

const WeekContainer = () => {
    return (
        <Content>
            <div className="week-container">
                <ContentTitle title={"一周天氣預報"} />
                <WeekWeather/>
            </div>
        </Content>
    );
}

export default WeekContainer;
