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
                    const day = new Day(new Date(numberDays.dt * 1000),
                        Math.round((numberDays.temp.max + numberDays.temp.min) / 2 - 273),
                        numberDays.weather[0].icon)
                    row.insertAdjacentHTML('beforeend', day.html())
                }
            })
        this.$el.append(row)
    }
}