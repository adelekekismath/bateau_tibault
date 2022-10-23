import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

import { BoatsPageRoutingModule } from './boats-routing.module';

import { BoatsPage } from './boats.page';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BoatsPageRoutingModule,
    SwiperModule
  ],
  declarations: [BoatsPage]
})
export class BoatsPageModule {}
