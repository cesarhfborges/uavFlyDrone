import { Component } from '@angular/core';
import {faCloudSun, faCoffee, faGear, faMapLocation, faMapLocationDot, faWind} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  icons = {
    coffe: faCoffee,
    weather: faCloudSun,
    winds: faWind,
    map: faMapLocationDot,
    gear: faGear
  };

  constructor() {}

}
