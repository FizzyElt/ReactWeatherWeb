import React from 'react';

import { Typography ,Divider} from 'antd/es'
import './About.scss'
const { Title, Paragraph, Text } = Typography
const About = () => {
    return (
       <Typography className="about-container">
           <Title>
                作品說明
           </Title>
           <Divider/>
           <Title level={2}>框架</Title>
           <Title level={4}>
               React.js、Ant-Design(UI框架)
           </Title>
           <Title level={2}>
                函示庫
           </Title>
           <Title level={4}>
                React-Router、React-Transition-Group、Axios、React-Icons
           </Title>
           <Title level={2}>
                開發工具
           </Title>
           <Title level={4}>
                Webpack、SCSS
           </Title>
           <Title level={2}>
                作品重點
           </Title>
           <Title level={4}>
                自製Slider組件、Webpack設定檔撰寫、串接氣象局API
           </Title>
           <Title level={2}>
                作品原始碼連結
           </Title>
           <Title level={4}>
                <a href="https://github.com/FizzyElt/ReactWeatherWeb">https://github.com/FizzyElt/ReactWeatherWeb</a>
           </Title>
       </Typography>
    );
}

export default About;
