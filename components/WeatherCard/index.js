import React from 'react'
import './style.scss';

const WeatherCard = (props) => {
    const { day, type, high, low } = props;
    let iconClass;
    const c = (
        <div className="weathercard">
            <div className="day">{day}</div>
            <div className={iconClass}></div>
            <div className="high">{high}</div>
            <div className="low">{low}</div>
        </div>
    )

    return c;
}

export default WeatherCard;
