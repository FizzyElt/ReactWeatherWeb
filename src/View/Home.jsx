import React, { useState } from 'react';
import Layout from 'antd/lib/layout/layout'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

//component
import Nav from '../Container/Nav.jsx'
import HoursContainer from '../Container/HoursContainer.jsx'
import FooterContainer from '../Container/FooterContainer.jsx'
import WeekContainer from '../Container/WeekContainer.jsx'
import About from '../Container/About.jsx'

//context
import { LocationContext, defaultLocation } from '../Context/locationContext.js'
import { DeviceWidthContext, defaultWidth } from '../Context/deviceWidthContext.js'

const Home = () => {

    const [currentLocation, setCurrentLocation] = useState(defaultLocation);
    const [dataFetching, setDataFetching] = useState(true);

    return (
        <LocationContext.Provider value={{
            currentLocation,
            dataFetching,
            setLocation: (name) => { setCurrentLocation(name) },
            setLoading: (value) => { setDataFetching(value) }
        }}>
            <DeviceWidthContext.Provider value={{
                isMobile: defaultWidth < 450
            }}>
                <HashRouter>
                    <Layout>
                        <Nav />
                        <Layout>
                            <Switch>
                                <Route exact path="/">
                                    <Redirect to={"/36hours"} />
                                </Route>
                                <Route path="/36hours">
                                    <HoursContainer />
                                </Route>
                                <Route path="/week">
                                    <WeekContainer />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                            </Switch>

                        </Layout>
                        <FooterContainer />
                    </Layout>
                </HashRouter>
            </DeviceWidthContext.Provider>
        </LocationContext.Provider>
    );
}

export default Home;
