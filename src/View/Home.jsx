import React, { useReducer } from 'react'
import Layout from 'antd/lib/layout/layout'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

//component
import Nav from '../Container/Nav/Nav.jsx'
import HoursContainer from '../Container/Hours/HoursContainer.jsx'
import Footer from '../Container/Footer/Footer.jsx'
import WeekContainer from '../Container/Week/WeekContainer.jsx'
import About from '../Container/About/About.jsx'
import Covid19 from '../Container/Covid19/Covid19.jsx'

//context
import { LocationContext, defaultLocation } from '../Context/locationContext.js'
import { DeviceWidthContext, defaultWidth } from '../Context/deviceWidthContext.js'

const initState = {
  location: defaultLocation,
  loading: true,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
const Home = () => {
  const [{ location, loading }, dispatch] = useReducer(reducer, initState)

  return (
    <LocationContext.Provider
      value={{
        location,
        loading,
        dispatch,
      }}>
      <DeviceWidthContext.Provider
        value={{
          isMobile: defaultWidth < 769,
        }}>
        <HashRouter>
          <Layout>
            <Nav />
            <Layout>
              <Switch>
                <Route exact path='/'>
                  <Redirect to={'/36hours'} />
                </Route>
                <Route path='/36hours'>
                  <HoursContainer />
                </Route>
                <Route path='/week'>
                  <WeekContainer />
                </Route>
                <Route path='/about'>
                  <About />
                </Route>
                <Route path='/covid19'>
                  <Covid19/>
                </Route>
              </Switch>
            </Layout>
            <Footer />
          </Layout>
        </HashRouter>
      </DeviceWidthContext.Provider>
    </LocationContext.Provider>
  )
}

export default Home
