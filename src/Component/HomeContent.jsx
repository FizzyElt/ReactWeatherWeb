import React,{useState,useEffect,useRef} from 'react';
import Layout from 'antd/lib/layout/layout'
import LocationList from './LocationList.jsx'
import Loading from './Loading.jsx'
import './HomeContent.scss'

const { Content } = Layout

const HomeContent = () => {

    return (
        <Content className="home-content">
            <h3>城市列表</h3>
           <LocationList/>
        </Content>
    );
}

export default HomeContent;
