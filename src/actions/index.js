import axios from 'axios';

const apikey = 'bbe4632f76f620d5ec7de9bf8a3498cf';

const root = 'http://api.openweathermap.org/data/2.5/forecast?'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const CURRENT_LOCATION_WEATHER = 'CURRENT_LOCATION_WEATHER';

export function fetchWeather(){
    const url = `${root}q=London,us&appid=${apikey}`;

    const request = axios.get(url);

    return {
        type:FETCH_WEATHER,
        payload:request
    }

}

export function fetchCurrentLocationWeather(city){
    
    const url = `${root}q=${city},us&appid=${apikey}`;

    const request = axios.get(url);
    //console.log(url)
    return {
        type : CURRENT_LOCATION_WEATHER,
        payload: request
    }
}