import './weather/scss/style.scss'
import {Weather} from './weather/Weather/Weather'
export const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=47.236389&lon=39.71389&exclude=current,minutely,hourly&appid=c00d724545894ac3d6c9508c9e52825f'

const weather = new Weather('#app', {url, countDays: 4})
// Работает на подобии Vue: берёт тег и рендерит внутри него элементы
// В зависимости от кол-ва дней генерируется страничка
weather.render()