import React, { useEffect, useState, useContext } from 'react'

import { getCovid19All, getCovid19TW } from '../../fetchData.js'

//context
import { DeviceWidthContext } from '../../Context/deviceWidthContext.js'

//component
import Covid19Card from '../../Component/Covid19Card/Covid19Card.jsx'

import { Layout, Row, Col } from '../../AntDesign/layout.js'
import './Covid19.scss'

const { Content } = Layout

const Covid19 = () => {
  const [covidWorld, setCovidWorld] = useState({})
  const [covidTW, setCovidTW] = useState({})
  const { isMobile } = useContext(DeviceWidthContext)

  useEffect(() => {
    getCovid19All().then(res => {
      setCovidWorld(res)
    })
    getCovid19TW('TW').then(res => {
      setCovidTW(res)
    })
  }, [])

  return (
    <Content>
      <div className='covid19-content'>
        {isMobile ? (
          <Row>
            <Row>
              <Covid19Card country='世界' covidObj={covidWorld} />
            </Row>
            <Row>
              <Covid19Card country='臺灣' covidObj={covidTW} />
            </Row>
          </Row>
        ) : (
          <Row>
            <Col span={12}>
              <Covid19Card country='世界' covidObj={covidWorld} />
            </Col>
            <Col span={12}>
              <Covid19Card country='臺灣' covidObj={covidTW} />
            </Col>
          </Row>
        )}

        <Row>
          <Col span={24}>
            <p>
              資料提供：
              <a href='https://github.com/mathdroid/covid-19-api'>https://github.com/mathdroid/covid-19-api</a>
            </p>
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default Covid19
