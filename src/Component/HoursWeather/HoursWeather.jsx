import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd/lib/grid'

import HoursWeatherCard from './HoursWeatherCard.jsx'

import { LocationContext } from '../../Context/locationContext.js'
import { DeviceWidthContext } from '../../Context/deviceWidthContext.js'

import { CSSTransition } from 'react-transition-group'
import '../../scss/animation.scss'

const HoursWeather = ({ data }) => {
  const { loading } = useContext(LocationContext)
  const { isMobile } = useContext(DeviceWidthContext)
  //const [data, setData] = useState([])

  const list = (() => {
    if (isMobile) {
      return data.map((obj, i) => {
        return (
          <Row type='flex' key={i}>
            <CSSTransition in={!loading} appear={false} classNames='animate-fade' timeout={1000}>
              <HoursWeatherCard {...obj} />
            </CSSTransition>
          </Row>
        )
      })
    } else {
      return data.map((obj, i) => {
        return (
          <Col span={8} key={i}>
            <CSSTransition in={!loading} appear={false} classNames='animate-fade' timeout={1000}>
              <HoursWeatherCard {...obj} />
            </CSSTransition>
          </Col>
        )
      })
    }
  })()

  return (
    <Row type='flex' justify='center'>
      {list}
    </Row>
  )
}

HoursWeather.propTypes = {
  data: PropTypes.array.isRequired,
}

export default HoursWeather
