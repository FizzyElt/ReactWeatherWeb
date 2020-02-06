import React from 'react'

import { Link, useLocation } from 'react-router-dom'


import Layout from 'antd/lib/layout/layout'
import { Typography, Menu } from 'antd/es'
import { TiWeatherSunny } from 'react-icons/ti' //icon
import './Nav.scss'

const { Header } = Layout
const { Title } = Typography

const Nav = () => {
    const location = useLocation()

    return (
        <Header className="nav">

            <div className="title">
                <TiWeatherSunny className="icon" />
                <Title level={2} className="title">氣象網</Title>
            </div>

            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={location.pathname}
                className="menu">
                <Menu.Item key={"/36hours"}>
                    <Link to={"/36hours"}>36小時</Link>
                </Menu.Item>
                <Menu.Item key={"/week"}>
                    <Link to={"/week"}>一周天氣</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default Nav;
