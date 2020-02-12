import React, { useContext } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { DeviceWidthContext } from '../Context/deviceWidthContext.js'
import Layout from 'antd/lib/layout/layout'
import { Typography, Menu } from 'antd/es'
import { TiWeatherSunny } from 'react-icons/ti' //icon
import { FaBars } from 'react-icons/fa'
import './Nav.scss'

const { Header } = Layout
const { Title } = Typography
const { SubMenu } = Menu

const Nav = () => {
    const location = useLocation()
    const { isMobile } = useContext(DeviceWidthContext)
    return (
        <Header className="nav">
            <div className="title">
                <TiWeatherSunny className="icon" />
                <Title level={isMobile?3:2} className="title">氣象網</Title>
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[location.pathname]}
                className="menu">
                {isMobile ? (<SubMenu title={<FaBars />}>
                    <Menu.Item key={"/36hours"}>
                        <Link to={"/36hours"}>36小時</Link>
                    </Menu.Item>
                    <Menu.Item key={"/week"}>
                        <Link to={"/week"}>一周天氣</Link>
                    </Menu.Item>
                    <Menu.Item key={"/about"}>
                        <Link to={"/about"}>關於</Link>
                    </Menu.Item>
                </SubMenu>) :
                    <><Menu.Item key={"/36hours"}>
                        <Link to={"/36hours"}>36小時</Link>
                    </Menu.Item>
                        <Menu.Item key={"/week"}>
                            <Link to={"/week"}>一周天氣</Link>
                        </Menu.Item>
                        <Menu.Item key={"/about"}>
                            <Link to={"/about"}>關於</Link>
                        </Menu.Item></>
                }
            </Menu>
        </Header>
    );
}

export default Nav;
