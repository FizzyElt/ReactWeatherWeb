import React, { useContext } from 'react'
import { Row, Col } from 'antd/lib/grid'

import { DeviceWidthContext } from '../../Context/deviceWidthContext.js'

import { FaMedium, FaGithub, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import './FooterContainer.scss'

const FooterContainer = () => {
  const { isMobile } = useContext(DeviceWidthContext)

  const list = isMobile ? (
    <>
      <Row>
        <h5>僅供練習使用</h5>
      </Row>
      <Row>
        <h5>作者：FizzyElt</h5>
        <h5>Gmail：a0979150560@gmail.com</h5>
      </Row>
      <Row>
        <ul className='link-list'>
          <li>
            <a href='https://www.facebook.com/profile.php?id=100000329620566' target='_blank' rel='noreferrer'>
              <FaFacebookSquare className='icon' />
            </a>
          </li>
          <li>
            <a href='https://github.com/FizzyElt' target='_blank' rel='noreferrer'>
              <FaGithub className='icon' />
            </a>
          </li>
          <li>
            <a href='https://medium.com/@a0979150560' target='_blank' rel='noreferrer'>
              <FaMedium className='icon' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/%E6%9F%8F%E9%8A%93-%E7%B4%A2-49668819a/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedin className='icon' />
            </a>
          </li>
        </ul>
      </Row>
    </>
  ) : (
    <>
      <Col span={3}>
        <h5>僅供練習使用</h5>
      </Col>
      <Col span={5}>
        <h5>作者：FizzyElt</h5>
        <h5>Gmail：a0979150560@gmail.com</h5>
      </Col>
      <Col span={4}>
        <ul className='link-list'>
          <li>
            <a href='https://www.facebook.com/profile.php?id=100000329620566' target='_blank' rel='noreferrer'>
              <FaFacebookSquare className='icon' />
            </a>
          </li>
          <li>
            <a href='https://github.com/FizzyElt' target='_blank' rel='noreferrer'>
              <FaGithub className='icon' />
            </a>
          </li>
          <li>
            <a href='https://medium.com/@a0979150560' target='_blank' rel='noreferrer'>
              <FaMedium className='icon' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/%E6%9F%8F%E9%8A%93-%E7%B4%A2-49668819a/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedin className='icon' />
            </a>
          </li>
        </ul>
      </Col>
    </>
  )

  return (
    <div className='footer-container'>
      <Row type='flex' justify='center'>
        {list}
      </Row>
    </div>
  )
}

export default FooterContainer
