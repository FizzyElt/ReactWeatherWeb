import React from 'react';
import PropTypes from 'prop-types'
import './WeekWeatherCard.scss'


const WeekWeatherCard = ({
    startTime = "2020-01-01 00:00:00",
    endTime = "2020-01-01 00:00:00",
    MaxT = "22",
    MinT = "22",
    MaxAT = "22",
    MinAT = "22",
    RH = "20",
    Wx = {
        name: "",
        value: "1"
    }
}) => {
    return (
        <div className="week-weather-card">
            <img
                src={`https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${Wx.value}.svg`} alt={Wx.name} />
            <h4>溫度：{MinT}&#8451; ~{MaxT}&#8451;</h4>
            <h4>體感溫度：{MinAT}&#8451; ~{MaxAT}&#8451;</h4>
            <h4>相對溼度：{RH}%</h4>
            <h4>天氣狀況：{Wx.name}</h4>
            <h5>{startTime.slice(5, 16) + " ~ " + endTime.slice(5, 16)}</h5>
        </div>
    );
}

WeekWeatherCard.propTypes = {
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    MaxAT: PropTypes.string,
    MinAT: PropTypes.string,
    MaxT: PropTypes.string,
    MinT: PropTypes.string,
    RH: PropTypes.string,
    Wx: PropTypes.object
}

export default WeekWeatherCard;
