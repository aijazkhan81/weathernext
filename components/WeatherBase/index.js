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
                weather: a.weather[0]
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
        const list = uniqBy(get(this.state, 'weatherData.list'), 'date');
        if (list) {
            return (
                <React.Fragment>
                    {/* {
                        list.map((w) => {
                            return <WeatherCard key={w.dt} {...w.main} icon={w.icon} />
                        })
                    } */}
                    <WeatherLayout />
                </React.Fragment>
            )
        } else {
            return 'Nothing found'
        }
    }
}

export default WeatherBase;
