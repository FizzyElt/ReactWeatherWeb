import React from 'react';
import PropTypes from 'prop-types'


import { FaUmbrella, FaTemperatureLow, FaCloudSun } from 'react-icons/fa'
import '../../scss/animation.scss'
import './HoursWeatherCard.scss'

const numFormater = (num = "0") => {    //10以下補0
    return parseInt(num) < 10 ? "0" + num : num
}

const HoursWeatherCard = ({
    startTime = "2020-01-01 06:00:00",
    endTime = "2020-01-01 06:00:00",
    PoP = "20",
    Wx = { name: "", value: "" },
    MinT = "22",
    MaxT = "23",
    CI = "寒冷" }) => {


    return (
        <div className="hours-weather-card">
            <img src={`https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${numFormater(Wx.value)}.svg`}
                title={Wx.name} />
            <h4>{CI}</h4>
            <h4><FaTemperatureLow className="icon" />氣溫：{MinT}&#8451; ~ {MaxT}&#8451;</h4>
            <h4><FaUmbrella className="icon" />降雨機率：{PoP}%</h4>
            <h4><FaCloudSun className="icon" />天氣狀況：{Wx.name}</h4>
            <h5>{startTime.slice(5, 16) + " ~ " + endTime.slice(5, 16)}</h5>
        </div>
    );
}

HoursWeatherCard.propTypes = {
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    PoP: PropTypes.string.isRequired,
    Wx: PropTypes.object.isRequired,
    MinT: PropTypes.string.isRequired,
    MaxT: PropTypes.string.isRequired,
    CI: PropTypes.string.isRequired
}

export default HoursWeatherCard;

