import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Category } from '../models/category';
import { produitModel } from '../models/produitModel';
import { CategoryService } from '../services/categorieservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categoryList: Category[];


  constructor( private router: Router, private boatssService: CategoryService ){}
   

  ngOnInit() {
    this.boatssService.getCategory().subscribe(res => {
      this.categoryList = <any>res;
      console.log(this.categoryList);
    },
    err =>{
      console.log("error")
    })
  }

  onLoadCategory( products: produitModel[]){
    const navigationExtras: NavigationExtras ={
      state: {
        products: products
      }
    };
    this.router.navigate(['/products'], navigationExtras);
  }

  onGoToCart(){
    this.router.navigate(['/shop']);
  }

  getProductsOnPromotions() {
    let products: produitModel[]=[];
    this.categoryList.forEach(category  => {
      category.products.forEach(product => {
        if (product.discount > 0) {
          products.push(product);
        }
      });
    });
    return products;
  }


}
