import { get, uniqBy } from 'lodash';
import React, { Component } from 'react';
import { getWeatherdata } from '../../utils/weatherapi';
import WeatherCard from '../WeatherCard';
import WeatherLayout from '../WeatherLayout';

export class WeatherBase extends Component {
    constructor(props) {
        super();

        this.state = {
            weatherData: {}
        };
    }

    buildList = (r) => {
        const list = r.list.map((a) => {
            return {
                ...a,
                date: a.dt_txt.split(' ')[0],
                time: a.dt_txt.split(' ')[1],
                main: {
                    ...a.weather[0],
                    ...a.main
                }
            }
        })
        this.setState({
            weatherData: {
                city: r.city,
                list: list
            }
        })
    }

    componentDidMount() {
        getWeatherdata(78753)
            .then((r) => {
                this.buildList(r.data)
            })
    }



    render() {
        const list = get(this.state, 'weatherData.list');
        if (list) {
            return (
                <React.Fragment>
                    <WeatherLayout data={list} />
                </React.Fragment>
            )
        } else {
            return 'Nothing found'
        }
    }
}

export default WeatherBase;
