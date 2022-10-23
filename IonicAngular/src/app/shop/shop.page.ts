import { Component, OnInit } from '@angular/core';
import { produitModel } from '../models/produitModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  productsListOnCart: any[];
  restaurantsList : object ; 
  constructor(private cartService: CartService, private route: ActivatedRoute,private restaurantService: RestaurantsService  , private router: Router) {}
  
  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe( res => {
      this.restaurantsList = <any>res;
    });
   this.updateCart();
  }

  updateCart(){
    this.cartService.getAllProductsOnCart().then((val) => {
			this.productsListOnCart = val;
		});
  
  }

  async decreaseCartItem(product) {
   await this.cartService.decreaseProduct(product);
   this.updateCart();
  }

  async increaseCartItem(product) {
    await this.cartService.addProduct(product);
    this.updateCart();
  }

  async removeCartItem(product) {
    await this.cartService.removeFromCart(product);
    this.updateCart();
   
  }

  getTotal() {
    return this.productsListOnCart.reduce((i, j) => i + j.price * j.quantity, 0);
  }




}
