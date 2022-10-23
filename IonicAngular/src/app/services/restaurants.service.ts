import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http : HttpClient) { }

  getRestaurants()
  {
    return this.http.get('./assets/data/restaurants.json');
  }

}
