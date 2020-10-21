import {Day} from "../Day/Day";

export class Weather {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.url = options.url
        this.countDays = options.countDays
    }

    render() {
        const row = document.createElement('div')
        row.classList.add('row')
        fetch(this.url).then(r => r.json())
            .then(data => {
                for (let numberDay = 0; numberDay < this.countDays; numberDay++){
                    const numberDays = data.daily[numberDay]
                    const day = new Day( // создание шаблона одного из дня
                        new Date(numberDays.dt * 1000), // текущий день
                        Math.round((numberDays.temp.max + numberDays.temp.min) / 2 - 273), // вычисление средней температуры (по результатам видно, что средняя температура отличается от реальной на +-2 градуса)
                        numberDays.weather[0].icon) // id иконки погоды
                    row.insertAdjacentHTML('beforeend', day.html())
                }
            })
        this.$el.append(row)
    }
}