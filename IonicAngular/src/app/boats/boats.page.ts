import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Boat } from '../models/boats';
import { BoatsService } from '../services/boats.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.page.html',
  styleUrls: ['./boats.page.scss'],
})
export class BoatsPage implements OnInit {

  boatsList: Boat[];


  constructor( private router: Router, private boatssService: BoatsService ){}
   

  ngOnInit() {
    this.boatssService.getBoats().subscribe(res => {
      this.boatsList = <any>res;
    },
    err =>{
      console.log("error")
    })
  }

  onLoadBoat(boat: {name: string,image:string, description: string, details: string}){
    const navigationExtras: NavigationExtras ={
      state: {
        boat: boat
      }
    };
    this.router.navigate(['/single-boat'], navigationExtras);
  }

}
