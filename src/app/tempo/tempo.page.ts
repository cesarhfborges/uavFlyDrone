import {Component, OnInit, ViewChild} from '@angular/core';
import {faCloudSun, faDownLong, faDroplet, faUpLong} from '@fortawesome/free-solid-svg-icons';
import {VentoComponent} from './components/vento/vento.component';

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

  constructor() {
  }

  ngOnInit() {
  }

  changeCompassDirection($event: any) {
    console.log($event);
    this.vento.compassDirection = $event.detail.value;
  }

  changeWindDirection($event: any) {
    this.vento.windDirection = $event.detail.value;
  }
}
