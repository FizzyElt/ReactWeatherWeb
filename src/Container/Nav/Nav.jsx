import React, { useContext } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { DeviceWidthContext } from '../../Context/deviceWidthContext.js'
import { Layout } from '../../AntDesign/layout.js'
import { Typography, Menu } from '../../AntDesign/component.js'
import { TiWeatherSunny } from 'react-icons/ti' //icon
import { FaBars } from 'react-icons/fa'
import './Nav.scss'

const { Header } = Layout
const { Title } = Typography
const { SubMenu } = Menu

const navItems = [
  { path: '/36hours', name: '36小時' },
  { path: '/week', name: '一周天氣' },
  { path: '/covid19', name: '疫情資訊' },
  { path: '/about', name: '關於' },
]

const Nav = () => {
  const location = useLocation()
  const { isMobile } = useContext(DeviceWidthContext)
  return (
    <Header className='nav'>
      <div className='title'>
        <TiWeatherSunny className='icon' />
        <Title level={isMobile ? 3 : 2} className='title'>
          氣象網
        </Title>
      </div>
      <Menu theme='dark' mode='horizontal' selectedKeys={[location.pathname]} className='menu'>
        {isMobile ? (
          <SubMenu title={<FaBars />}>
            {navItems.map(item => (
              <Menu.Item key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          navItems.map(item => (
            <Menu.Item key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          ))
        )}
      </Menu>
    </Header>
  )
}

export default Nav
