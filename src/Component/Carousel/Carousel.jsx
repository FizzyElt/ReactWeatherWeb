import React, { useState, cloneElement, Children } from 'react'

import PropTypes from 'prop-types'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import './Carousel.scss'

function useCarousel(children, showNum) {
  let items = []
  const [itemCount] = useState(Children.count(children) - 1)

  function classNameCheck(index, current) {
    //class切換
    let className = ''
    switch (index - current) {
      case 0:
        className = 'show-middle'
        break
      case -1:
        className = 'active-left'
        break
      case 1:
        className = 'active-right'
        break
      case -2:
        className = 'hidden-left'
        break
      case 2:
        className = 'hidden-right'
        break
    }
    return className
  }
  if (itemCount > -1) {
    let list = Children.map(children, (item, i) => {
      //將子項目帶入className過後再render
      let classNames = ''
      if (showNum - 2 <= i && i <= showNum + 2) {
        const className = classNameCheck(i, showNum)
        classNames = className
      }
      return cloneElement(item, { ...item.props, classNames: classNames })
    })
    items = list
  }

  return { items, itemCount }
}

const Carousel = ({ children, height = '500px' }) => {
  const [showNum, setShowNum] = useState(0)  //顯示編號
  const { items, itemCount } = useCarousel(children, showNum)

  function nextHandler() {
    setShowNum(prev => {
      if (prev === itemCount) {
        return prev
      } else {
        return prev + 1
      }
    })
  }
  function prevHandler() {
    setShowNum(prev => {
      if (prev === 0) {
        return prev
      } else {
        return prev - 1
      }
    })
  }
  return (
    <div className='slider-container' style={{ height: height }}>
      {items}
      <button className='switch-btn prev' onClick={() => prevHandler()}>
        <FaAngleLeft />
      </button>
      <button className='switch-btn next' onClick={() => nextHandler()}>
        <FaAngleRight />
      </button>
      <div className='current-number'>
        {showNum + 1}/{itemCount + 1}
      </div>
    </div>
  )
}

//子項目
function Item({ classNames, children }) {
  return <div className={'card ' + classNames}>{children}</div>
}

Carousel.propTypes = {
  children: PropTypes.array,
  height: PropTypes.string,
}
Item.propTypes = {
  classNames: PropTypes.string,
  children: PropTypes.element,
}

Carousel.Item = Item
export default Carousel
