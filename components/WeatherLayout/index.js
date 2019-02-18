import React from 'react';
import './style.scss';

export const WeatherLayout = props => {
    let c = '';

    c = (
        <React.Fragment>
            <div className="mainlayout">
                <div className="mainarea">
                    1
                </div>
                <div className="descarea">
                    2
                </div>
            </div>
        </React.Fragment>
    );

    return c;
}

export default WeatherLayout;
