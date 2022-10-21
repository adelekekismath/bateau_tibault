import { Injectable } from '@angular/core';
import { produitModel } from '../models/produitModel';
import {Storage} from '@ionic/storage-angular'

const STORAGE_KEY = 'productsListOnCart';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
  }

  getAllProductsOnCart() {
    this.storage.create();
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
 
  async addProduct(product: produitModel) {
    this.storage.create();
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

  async decreaseProduct(product: produitModel) {
    this.storage.create();
    const result = await this.getAllProductsOnCart();
    if (result) {
      let productIndex= await this.isAlreadyOnCart(product);
      if(productIndex!=null){
        result[<any>productIndex].quantity -= 1;
          if(result[<any>productIndex].quantity)
            result.splice(productIndex, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    }
  }
 
  async removeFromCart(product: produitModel) {
    this.storage.create();
    const result = await this.getAllProductsOnCart();
    if (result) {
      var index = this.isAlreadyOnCart(product);
      if(index){
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
        
    }
  }


}
