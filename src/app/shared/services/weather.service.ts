import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Weather} from '../classes/weather';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) {
  }

  getWeather(lat: number, lon: number): Observable<Weather> {
    // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7f3102e1-0165-4a31-ac08-2d2d5f1372b0
    return this.http.get<Weather>(`https://api.weatherapi.com/v1/current.json?key=${environment.wheaterKey}&q=${lat},${lon}`).pipe(
      map((data: any) => new Weather(data))
    );
  }

  getConditions(): Observable<any> {
    return this.http.get<any>(`https://www.weatherapi.com/docs/conditions.json`);
  }
}
