import reactDOM from 'react-dom'
import React from 'react'
import Home from './View/Home.jsx'
import 'antd/dist/antd.css'
import './scss/normalize.scss'

const App = () => {
  return (
    <>
      <Home />
    </>
  )
}

reactDOM.render(<App />, document.getElementById('app'))
