export class Day{
    constructor(date, temp, imgIcon) {
        this.date = date
        this.temp = temp
        this.imgIcon = imgIcon
    }

    html(){
        return `
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="http://openweathermap.org/img/wn/${this.imgIcon}@2x.png" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${this.date.getDate()}.${this.date.getMonth()+1}.${this.date.getFullYear()}</h5>
                <p class="card-text">Средняя температура в течении дня ${this.temp}&#176</p>
              </div>
            </div>
          </div>
        </div>
    `
    }
}