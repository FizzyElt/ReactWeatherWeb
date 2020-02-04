import React from 'react';


import ContentTitle from '../Component/ContentTitle.jsx'
import SliderShow from '../Component/SliderShow.jsx'
import WeekWeather from '../Component/WeekWeather.jsx'

import Layout from 'antd/lib/layout/layout'
import { Col } from 'antd/lib/grid'
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
