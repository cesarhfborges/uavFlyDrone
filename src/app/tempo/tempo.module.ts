import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempoPageRoutingModule } from './tempo-routing.module';

import { TempoPage } from './tempo.page';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {VentoComponent} from './components/vento/vento.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempoPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [TempoPage, VentoComponent]
})
export class TempoPageModule {}
