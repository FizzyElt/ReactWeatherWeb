import React from 'react';
import Layout from 'antd/lib/layout/layout'

import Nav from '../Component/Nav.jsx'
import HomeContent from '../Component/HomeContent.jsx'
import HomeFooter from '../Component/HomeFooter.jsx'
const Home = () => {
    return (
        <Layout>
            <Nav/>
            <HomeContent/>
            <HomeFooter/>
        </Layout>
    );
}

export default Home;
