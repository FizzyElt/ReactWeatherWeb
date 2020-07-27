import React from 'react'

import { Typography, Divider } from '../../AntDesign/component.js'
import './About.scss'
const { Title } = Typography

const obj = [
  {
    title: '框架',
    content: 'React.js、Ant-Design(UI框架)',
  },
  {
    title: '函示庫',
    content: 'React-Router、React-Transition-Group、Axios、React-Icons',
  },
  {
    title: '開發工具',
    content: 'Webpack、SCSS',
  },
  {
    title: '作品重點',
    content: '自製Slider組件、Webpack設定檔撰寫、串接氣象局API',
  },
]

const About = () => {
  return (
    <Typography className='about-container'>
      <Title>作品說明</Title>
      <Divider />
      {obj.map(o => {
        return (
          <>
            <Title level={2}>{o.title}</Title>
            <Title level={4}>{o.content}</Title>
          </>
        )
      })}
      <Title level={2}>作品原始碼連結</Title>
      <Title level={4}>
        <a href='https://github.com/FizzyElt/ReactWeatherWeb' target='_blank' rel='noreferrer'>
          https://github.com/FizzyElt/ReactWeatherWeb
        </a>
      </Title>
    </Typography>
  )
}

export default About
