import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';
import { restaurantModel } from 'src/app/models/restaurantModel';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  restaurantsList : object ; 
  constructor(private router : Router ,private service : RestaurantsService) { }

  ngOnInit() {
   this.service.getRestaurants().subscribe(res =>{
    this.restaurantsList = res ; 
    console.log(this.restaurantsList); 
   })
  }
  descriptionPage(restaurant : restaurantModel){
    let navigationExtras: NavigationExtras = {
      state:{
        restaurant : restaurant
      }
    };
    this.router.navigate(['/single-restaurant'],navigationExtras)
  }
   
  

}
