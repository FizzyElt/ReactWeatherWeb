import React, { useState, useEffect, useRef, cloneElement, Children } from 'react';

import PropTypes from 'prop-types'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import './SliderShow.scss'

const SliderShow = ({ children, height = "500px" }) => {

    const [items, setItems] = useState([]);
    const itemCount = useRef(Children.count(children) - 1)
    const [showNum,setShowNum] = useState(0);


    useEffect(() => {
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

        if (itemCount.current > -1) {
            let list = Children.map(children, (item, i) => {    //將子項目加工過後再render
                const classNames = classNameCheck(i, showNum)
                const props = { ...item.props, classNames: classNames }
                return cloneElement(item, props)
            })
            setItems(list)
        }

    }, [showNum])
    function nextHandler() {
        setShowNum((prev) => {
            if (prev === itemCount.current) {
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
            <div className="switch-btn">
                <button onClick={() => prevHandler()}><IoIosArrowBack /></button>
                <button onClick={() => nextHandler()}><IoIosArrowForward /></button>
            </div>
            <div className="current-number">{showNum + 1}/{itemCount.current + 1}</div>
        </div>
    );
}
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
