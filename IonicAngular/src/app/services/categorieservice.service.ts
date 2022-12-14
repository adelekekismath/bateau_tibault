import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }
  getCategory(){
    return this.http.get("./assets/data/categories.json"); 
  }
}
