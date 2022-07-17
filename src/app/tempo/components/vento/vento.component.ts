import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vento',
  templateUrl: './vento.component.html',
  styleUrls: ['./vento.component.scss'],
})
export class VentoComponent implements OnInit {

  @Input() directions: {
    compass: number;
    wind: number;
  };

  constructor() {
  }

  ngOnInit() {
  }

  getCompassDirection(): number {
    if (this.directions?.compass > 0 && this.directions?.compass < 360) {
      return this.directions.compass;
    }
    return 0;
  }

  getWindDirection(): number {
    if (this.directions?.wind > 0 && this.directions?.wind < 360) {
      return this.directions.wind;
    }
    return 0;
  }
}
