import React from 'react'
import './style.scss';

const WeatherCard = (props) => {
    console.log(props);
    const { main, icon } = props;
    let { time, temp, temp_max, temp_min } = props;

    const sliceIt = (str, range) => {
        if (str.length > range) {
            return str.slice(0, range);
        } else {
            return str;
        }
    }

    const buildTime = (t) => {
        let time = parseInt(sliceIt(t, 2));
        if (time > 12) {
            return `${time - 12}: 00 PM`
        } else if (time === 0) {
            return `12: 00 AM`
        } else {
            return `${time}: 00 AM`
        }
    }


    time = buildTime(time);
    temp = sliceIt(temp, 2);
    temp_max = sliceIt(temp_max, 2);
    temp_min = sliceIt(temp_min, 2);

    const c = (
        <div className="weathercard">
            <div className="time">{time}</div>
            <div className="main tar">{main}</div>
            {/* <div className={iconClass}>{icon}</div> */}
            {/* <div className="temp_max">{temp_max}</div>
            <div className="low">{temp_min}</div> */}
            <div className="day tar">{temp}</div>
        </div>
    )

    return c;
}

export default WeatherCard;
