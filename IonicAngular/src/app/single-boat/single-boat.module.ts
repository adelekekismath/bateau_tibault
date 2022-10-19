import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleBoatPageRoutingModule } from './single-boat-routing.module';

import { SingleBoatPage } from './single-boat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleBoatPageRoutingModule
  ],
  declarations: [SingleBoatPage]
})
export class SingleBoatPageModule {}
