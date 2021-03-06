import React, { useContext } from 'react'
import PropTypes from 'prop-types'

//component
import LocationSelect from '../LocationSelect/LocationSelect.jsx'

//context
import { LocationContext } from '../../Context/locationContext.js'
import { DeviceWidthContext } from '../../Context/deviceWidthContext.js'

//layout
import { Row, Col } from '../../AntDesign/layout.js'
import { Typography } from '../../AntDesign/component.js'

const { Title } = Typography

const ContentTitle = ({ title }) => {
  const { location } = useContext(LocationContext)
  const { isMobile } = useContext(DeviceWidthContext)
  if (isMobile) {
    return (
      <Row type='flex' align='middle'>
        <Col span={12}>
          <Title level={4}>{title}</Title>
        </Col>
        <Col span={4} offset={4}>
          <LocationSelect />
        </Col>
      </Row>
    )
  } else {
    return (
      <Row type='flex' align='middle'>
        <Col span={3}>
          <Title level={2}>{location}</Title>
        </Col>
        <Col span={5}>
          <Title level={3}>{title}</Title>
        </Col>
        <Col span={4} offset={12}>
          <LocationSelect />
        </Col>
      </Row>
    )
  }
}

ContentTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ContentTitle
