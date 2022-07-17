export class Weather {
  location?: Location;
  current?: Current;
  private compass: number;

  constructor(data?: any) {
    this.compass = 0;
    if (data?.location) {
      this.location = new Location(data.location);
    }
    if (data?.current) {
      this.current = new Current(data.current);
    }
  }

  get directions(): { compass: number; wind: number } {
    if (this.current?.windDegree) {
      const wind: number = this.compass - this.current?.windDegree ?? 0;
      console.log(wind, ' - ', this.current?.windDegree);
      return {compass: this.compass, wind};
    }
    return {compass: 0, wind: 0};
  }

  get compassDirection(): number {
    return this.compass;
  }

  set compassDirection(dir: number) {
    this.compass = dir;
  }
}

class Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tzId: string;
  localtimeEpoch: number;
  localtime: string;


  constructor(data: any) {
    this.name = data.name;
    this.region = data.region;
    this.country = data.country;
    this.lat = data.lat;
    this.lon = data.lon;
    this.tzId = data.tz_id;
    this.localtimeEpoch = data.localtime_epoch;
    this.localtime = data.localtime;
  }
}

class Current {
  lastUpdatedEpoch: number;
  lastUpdated: string;
  tempC: number;
  tempF: number;
  isDay: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  windMph: number;
  windKph: number;
  windDegree: number;
  windDir: number;
  pressureMb: number;
  pressureIn: number;
  precipMM: number;
  precipIn: number;
  humidity: number;
  cloud: number;
  feelslikeC: number;
  feelslikeF: number;
  visKm: number;
  visMiles: number;
  uv: number;
  gustMph: number;
  gustKph: number;


  constructor(data: any) {
    this.lastUpdatedEpoch = data.last_updated_epoch;
    this.lastUpdated = data.last_updated;
    this.tempC = data.temp_c;
    this.tempF = data.temp_f;
    this.isDay = data.is_day;
    this.condition = data.condition;
    this.windMph = data.wind_mph;
    this.windKph = data.wind_kph;
    this.windDegree = data.wind_degree;
    this.windDir = data.wind_dir;
    this.pressureMb = data.pressure_mb;
    this.pressureIn = data.pressure_in;
    this.precipMM = data.precip_mm;
    this.precipIn = data.precip_in;
    this.humidity = data.humidity;
    this.cloud = data.cloud;
    this.feelslikeC = data.feelslike_c;
    this.feelslikeF = data.feelslike_f;
    this.visKm = data.vis_km;
    this.visMiles = data.vis_miles;
    this.uv = data.uv;
    this.gustMph = data.gust_mph;
    this.gustKph = data.gust_kph;
  }
}
