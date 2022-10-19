import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieserviceService {

  constructor(private http : HttpClient) { }
  getcategrie(){
    return this.http.get("./assets/data/categories.json"); 
  }
}
