import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Boat} from '../models/boats'

@Injectable({
  providedIn: 'root'
})
export class BoatsService {

  boatsList: Boat[] ;

  constructor(private http : HttpClient) { }

  getBoats(){
    return this.http.get('assets/data/boats.json');
  }

}
