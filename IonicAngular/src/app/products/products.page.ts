import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { produitModel } from '../models/produitModel';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  productsList: produitModel[];

  constructor( private cartService: CartService, private route: ActivatedRoute  , private router: Router) {
    if(this.router.getCurrentNavigation().extras.state){
      this.productsList = this.router.getCurrentNavigation().extras.state.products;
    }
  }

  onGoToCart(){
    this.router.navigate(['/shop']);
  }

  ngOnInit() {
  }

  addToCart(product:produitModel) {
    
    this.cartService.addProduct(product);
  }

  
}
