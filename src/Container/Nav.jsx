import React from 'react'

import Layout from 'antd/lib/layout/layout'
import { Typography } from 'antd/es'
import { TiWeatherSunny } from 'react-icons/ti' //icon
import './Nav.scss'

const { Header } = Layout
const { Title } = Typography

const Nav = () => {

    return (
        <Header className="nav">
            <div className="title-box">
                <TiWeatherSunny className="icon" />
                <Title level={2} className="title">氣象網</Title>
            </div>
        </Header>
    );
}

export default Nav;
