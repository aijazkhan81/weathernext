import React from 'react'
import './style.scss';

const WeatherCard = (props) => {
    const { temp, temp_max, temp_low, icon } = props;
    let iconClass;
    const c = (
        <div className="weathercard">
            <div className="day">{temp}</div>
            <div className={iconClass}>{icon}</div>
            <div className="temp_max">{temp_max}</div>
            <div className="low">{temp_low}</div>
        </div>
    )

    return c;
}

export default WeatherCard;
