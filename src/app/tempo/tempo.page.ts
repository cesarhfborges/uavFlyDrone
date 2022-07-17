import {Component, OnInit, ViewChild} from '@angular/core';
import {faCloudSun, faDownLong, faDroplet, faUpLong} from '@fortawesome/free-solid-svg-icons';
import {VentoComponent} from './components/vento/vento.component';
import {WeatherService} from '../shared/services/weather.service';
import {Weather} from '../shared/classes/weather';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.page.html',
  styleUrls: ['./tempo.page.scss'],
})
export class TempoPage implements OnInit {

  @ViewChild('vento') vento: VentoComponent;

  icons = {
    drone: faDroplet,
    sun: faCloudSun,
    up: faUpLong,
    down: faDownLong
  };

  gps: {
    lat: number;
    lon: number;
  } = {
    lat: -15.899442,
    lon: -48.1101308
  };

  weather: Weather = new Weather();

  conditions: Array<any>;


  constructor(
    private weatherService: WeatherService
  ) {
  }

  ngOnInit() {
    this.init().catch();
  }

  async init(): Promise<void> {
    this.conditions = await this.getConditions();
    console.log(this.conditions);
    const {current, location} = await this.getWeather();
    console.log(current, location);
    this.weather.current = current;
    this.weather.location = location;
  }

  getWeather(): Promise<any> {
    return this.weatherService.getWeather(this.gps.lat, this.gps.lon).toPromise();
  }

  getConditions(): Promise<any> {
    return this.weatherService.getConditions().toPromise();
  }

  getTextCondition(): string {
    if (this.weather?.current?.condition?.code) {
      const condition: any = this.conditions.find(c => c.code === this.weather.current.condition.code);
      return condition.languages.find(l => l.lang_iso === 'pt').day_text;
    }
    return '';
  }

  // changeCompassDirection($event: any) {
  //   console.log($event);
  //   this.vento.compassDirection = $event.detail.value;
  // }
  //
  // changeWindDirection($event: any) {
  //   this.vento.windDirection = $event.detail.value;
  // }
}
