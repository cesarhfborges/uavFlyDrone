import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vento',
  templateUrl: './vento.component.html',
  styleUrls: ['./vento.component.scss'],
})
export class VentoComponent implements OnInit {

  @Input() compassDirection: number;
  @Input() windDirection: number;

  constructor() {
  }

  ngOnInit() {
  }

  getCompassDirection(): number {
    if (this.compassDirection && this.compassDirection > 0 && this.compassDirection < 360) {
      return this.compassDirection;
    }
    return 0;
  }

  getWindDirection(): number {
    if (this.windDirection && this.windDirection > 0 && this.windDirection < 360) {
      return this.windDirection;
    }
    return 0;
  }
}
