import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  constructor(private http: HttpClient) { }

  getRecettes(){
    return this.http.get('assets/data/recettes.json');
  }
}
