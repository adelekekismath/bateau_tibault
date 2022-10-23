import { Injectable } from '@angular/core';
import { produitModel } from '../models/produitModel';
import {Storage} from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

const STORAGE_KEY = 'productsListOnCart';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private storage: Storage) {
    this.ngOnInit();
   }

  async ngOnInit() {
    await this.storage.create();
    await this.storage.defineDriver(CordovaSQLiteDriver);

  }

  async getAllProductsOnCart() {
     const result= await this.storage.get(STORAGE_KEY);
     return result; 
  }
 
  async isAlreadyOnCart(product: produitModel,) {
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
 
  async addProduct(product: produitModel,) {
    
    var result = await this.getAllProductsOnCart();
    if (result) {
      let productIndex= await this.isAlreadyOnCart(product);
      if(productIndex!=null)
          result[productIndex].quantity += 1;
      else
        result.push({ ...product, "quantity": 1 });
      console.log(productIndex);  
      
      await this.storage.set(STORAGE_KEY, result);
    
      
    } else 
      await this.storage.set(STORAGE_KEY, [{ ...product, "quantity": 1 }]);
     
  }

  async decreaseProduct(product: produitModel,) {
    var result = await this.getAllProductsOnCart();
    if (result) {
      let productIndex= await this.isAlreadyOnCart(product);
      if(productIndex!=null){
        result[productIndex].quantity -= 1;
          if(result[productIndex].quantity==0)
            result.splice(productIndex,1);
            await this.storage.set(STORAGE_KEY, result);
      }
    }
  }
 
  async removeFromCart(product: produitModel,) {
    var result = await this.getAllProductsOnCart();
    if (result) {
      var index = await this.isAlreadyOnCart(product);
      if(index!=null){
        console.log("kiss")
        result.splice(index,1);
        await this.storage.set(STORAGE_KEY, result);
      }
        
    }
  }


}
