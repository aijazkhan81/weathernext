import React, { Component } from 'react'
import { getWeatherdata } from '../../utils/weatherapi';
import { chunk } from 'lodash';

export class WeatherBase extends Component {
    constructor(props) {
        super();

        this.state = {
            weathersList: []
        };
    }

    componentDidMount() {
        const test = getWeatherdata(78753)
            .then((r) => {
                this.weathersList = r.data;
                this.weathersList.list = chunk(r.data.list, 6)
                console.log(this.weathersList);
            })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default WeatherBase;