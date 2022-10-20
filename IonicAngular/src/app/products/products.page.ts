import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { produitModel } from '../models/produitModel';
import { Storage  } from '@ionic/storage-angular';

const STORAGE_KEY = 'productsListOnCart';  

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  productsList: produitModel[];

  constructor(private storage: Storage, private route: ActivatedRoute  , private router: Router) {
    if(this.router.getCurrentNavigation().extras.state){
      this.productsList = this.router.getCurrentNavigation().extras.state.products;
    }
  }

  ngOnInit() {
    this.storage.create();
  }

  getAllProductsOnCart() {
    return this.storage.get(STORAGE_KEY);
  }
 
  async isAlreadyOnCart(product: produitModel) {
    const result = await this.getAllProductsOnCart();
    let index:number= null;
    if(result){
      result.forEach(productOnCart => {
        if(productOnCart.id==product.id){
          console.log(result.indexOf(productOnCart));
          index = result.indexOf(productOnCart);
        }
      });
      if (index!=null) {
        console.log(index);
        return index;
      }
    }else
      return null;
  }
 
  async addToCart(product: produitModel) {
    const result = await this.getAllProductsOnCart();
    if (result) {
      let productIndex= await this.isAlreadyOnCart(product);
      if(productIndex!=null)
          result[<any>productIndex].quantity += 1;
      else
        result.push({ ...product, "quantity": 1 });
      return this.storage.set(STORAGE_KEY, result);
      
    } else 
        return this.storage.set(STORAGE_KEY, [{ ...product, "quantity": 1 }]);
     
  }
 
  async removeFromCart(product: produitModel) {
    const result = await this.getAllProductsOnCart();
    if (result) {
      var index = result.indexOf(product);
      result.splice(index, 1);
      return this.storage.set(STORAGE_KEY, result);
    }
  }
 

}
