import React from 'react';
import Layout from 'antd/lib/layout/layout'
import { TiWeatherSunny } from 'react-icons/ti';
import './Nav.scss'

const { Header } = Layout

const Nav = () => {
    return (
        <Header className="header">
            <TiWeatherSunny className="icon" />
            <h2>氣象網</h2>
        </Header>
    );
}

export default Nav;
