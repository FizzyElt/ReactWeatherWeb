import React, { useState, useRef } from 'react';
import Layout from 'antd/lib/layout/layout'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

//component
import Nav from '../Container/Nav.jsx'
import HoursContent from '../Container/HoursContent.jsx'

//context
import { LocationContext, defaultLocation } from '../Context/locationContext.js'

const Home = () => {

    const [currentLocation, setCurrentLocation] = useState(defaultLocation);
    const [dataFetching, setDataFetching] = useState(false);
    return (
        <LocationContext.Provider value={{
            currentLocation,
            dataFetching,
            setLocation: (name) => { setCurrentLocation(name) },
            setLoading: (value) => { setDataFetching(value) }
        }}>
            <Layout>
                <Nav />
                <HashRouter>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to={"/36hours"} />
                        </Route>
                        <Route path="/36hours">
                            <HoursContent />
                        </Route>
                        <Route path="/week/:location">

                        </Route>
                    </Switch>
                </HashRouter>
            </Layout>
        </LocationContext.Provider>
    );
}

export default Home;
