import React, { useState, cloneElement, Children } from 'react'

import PropTypes from 'prop-types'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import './SliderShow.scss'

function useSliderShow(children, showNum) {
  let items = []
  const [itemCount] = useState(Children.count(children) - 1)

  function classNameCheck(index, current) {
    //class切換
    let classname = ''
    switch (index - current) {
      case 0:
        classname = 'show-middle'
        break
      case -1:
        classname = 'active-left'
        break
      case 1:
        classname = 'active-right'
        break
      case -2:
        classname = 'hidden-left'
        break
      case 2:
        classname = 'hidden-right'
        break
    }
    return classname
  }
  if (itemCount > -1) {
    let list = Children.map(children, (item, i) => {
      //將子項目加工過後再render
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

const SliderShow = ({ children, height = '500px' }) => {
  const [showNum, setShowNum] = useState(0)
  const { items, itemCount } = useSliderShow(children, showNum)

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

SliderShow.propTypes = {
  children: PropTypes.element,
  height: PropTypes.string,
}
Item.propTypes = {
  classNames: PropTypes.string,
  children: PropTypes.element,
}

SliderShow.Item = Item
export default SliderShow
