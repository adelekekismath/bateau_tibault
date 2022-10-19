import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { RestaurantsPageRoutingModule } from './restaurants-routing.module';

import { RestaurantsPage } from './restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantsPageRoutingModule,
    SwiperModule
  ],
  declarations: [RestaurantsPage]
})
export class RestaurantsPageModule {}
