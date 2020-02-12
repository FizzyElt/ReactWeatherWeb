import React, { useState, useEffect, useRef, cloneElement, Children } from 'react';

import PropTypes from 'prop-types'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import './SliderShow.scss'


function useSliderShow(children, showNum) {
    let items = []
    const [itemCount] = useState(Children.count(children) - 1)

    function classNameCheck(index, current) { //class切換
        let classname = ""
        switch (index) {
            case current:
                classname = "show-middle"
                break;
            case current - 1:
                classname = "active-left"
                break;
            case current + 1:
                classname = "active-right"
                break;
            case current - 2:
                classname = "hidden-left"
                break;
            case current + 2:
                classname = "hidden-right"
                break;
            default:
                classname = ""
        }
        return classname
    }
    if (itemCount > -1) {
        let list = Children.map(children, (item, i) => {    //將子項目加工過後再render
            const classNames = classNameCheck(i, showNum)
            const props = { ...item.props, classNames: classNames }
            return cloneElement(item, props)
        })
        items=list
    }

        return { items, itemCount }
}


    const SliderShow = ({ children, height = "500px" }) => {

        const [showNum, setShowNum] = useState(0);
        const { items, itemCount } = useSliderShow(children, showNum)

        function nextHandler() {
            setShowNum((prev) => {
                if (prev === itemCount) {
                    return prev
                } else {
                    return prev + 1
                }
            })
        }
        function prevHandler() {
            setShowNum((prev) => {
                if (prev === 0) {
                    return prev
                } else {
                    return prev - 1
                }
            })
        }
        return (
            <div className="slider-container" style={{ height: height }}>
                {items}
                <button className="switch-btn prev" onClick={() => prevHandler()}><FaAngleLeft /></button>
                <button className="switch-btn next" onClick={() => nextHandler()}><FaAngleRight /></button>
                <div className="current-number">{showNum + 1}/{itemCount + 1}</div>
            </div>
        );
    }

    //子項目
    function Item({ classNames, children }) {
        return (<div className={"card " + classNames}>
            {children}
        </div>)
    }

    SliderShow.propsTypes = {
        height: PropTypes.string
    }


    SliderShow.Item = Item
    export default SliderShow;
