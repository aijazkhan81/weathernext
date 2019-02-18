import axios from "axios";
const key = `7f3be30ce48706baf82cfae40560de77`;

export const getWeatherdata = zip => axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&APPID=${key}&units=imperial`);