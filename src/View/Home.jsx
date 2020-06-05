import React, { useReducer } from 'react'
import Layout from 'antd/lib/layout/layout'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

//component
import Nav from '../Container/Nav/Nav.jsx'
import HoursContainer from '../Container/Hours/HoursContainer.jsx'
import FooterContainer from '../Container/Footer/FooterContainer.jsx'
import WeekContainer from '../Container/Week/WeekContainer.jsx'
import About from '../Container/About/About.jsx'

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
          isMobile: defaultWidth < 450,
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
              </Switch>
            </Layout>
            <FooterContainer />
          </Layout>
        </HashRouter>
      </DeviceWidthContext.Provider>
    </LocationContext.Provider>
  )
}

export default Home
