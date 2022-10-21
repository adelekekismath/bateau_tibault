import { Component, OnInit } from '@angular/core';
import { produitModel } from '../models/produitModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  productsListOnCart: any[];

  constructor(private cartService: CartService, private route: ActivatedRoute  , private router: Router) {
    this.ngOnInit();
  }



  async ngOnInit() {
    this.productsListOnCart =  await this.cartService.getAllProductsOnCart();
  }


  decreaseCartItem(product:produitModel) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeFromCart(product);
  }

  getTotal() {
    return this.productsListOnCart.reduce((i, j) => i + j.price * j.quantity, 0);
  }


}
