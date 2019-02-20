import { Tabs } from 'antd';
import React from 'react';
import WeatherCard from '../WeatherCard';
import './style.scss';

const TabPane = Tabs.TabPane;

export const WeatherLayout = props => {
    const todaysData = props.data.slice(0, 6);
    console.log(todaysData);

    let c = 'test';

    c = (
        <React.Fragment>
            <div className="mainlayout">
                <div className="mainarea">
                    1
                </div>
                <div className="descarea">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Today" key="1">
                            {
                                todaysData.map((t) => {
                                    return <WeatherCard key={t.dt} time={t.time} {...t.main} />
                                })
                            }
                        </TabPane>
                        <TabPane tab="Week" key="2">Tab 2</TabPane>
                        <TabPane tab="Month" key="3">Tab 3</TabPane>
                    </Tabs>
                </div>
            </div>
        </React.Fragment>
    );

    return c;
}

export default WeatherLayout;
