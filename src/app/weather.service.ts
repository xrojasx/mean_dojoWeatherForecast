import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=35034e8292dff541f92b26f85fa6d7d2`)
    .map( data => data.json() )
    .toPromise();
  }

}