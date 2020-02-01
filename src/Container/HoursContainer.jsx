import React, { useContext } from 'react';

import ContentTitle from '../Component/ContentTitle.jsx'
import LocationSelect from '../Component/LocationSelect.jsx'
import HoursWeather from './HoursWeather.jsx'

import { LocationContext } from '../Context/locationContext.js'

import Layout from 'antd/lib/layout/layout'
import { Row, Col } from 'antd/lib/grid'
import { Typography } from 'antd/es'
import './HoursContainer.scss'

const { Content } = Layout
const { Title } = Typography

const HoursContainer = () => {
    const { currentLocation } = useContext(LocationContext);

    return (
        <Content>
            <div className="hours-content">
                <ContentTitle>
                    <Col span={3}>
                        <Title level={2} className="title-align">{currentLocation}</Title>
                    </Col>
                    <Col span={5}>
                        <Title level={3} className="title-align">36小時天氣預報</Title>
                    </Col>
                    <Col span={4} offset={12}>
                        <LocationSelect />
                    </Col>
                </ContentTitle>
                <HoursWeather />
            </div>
        </Content>
    );
}

export default HoursContainer;
