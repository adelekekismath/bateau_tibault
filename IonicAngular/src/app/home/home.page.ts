import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {
    
  }
  onGoToBoats(){
    this.router.navigate(['/boats']);
  }

  Navigation(NomPage){
    if(NomPage == "Contact")
    {
     this.router.navigate(['/Contact'])
    }
    if(NomPage == "restaurants")
    {
      this.router.navigate(['/restaurants'])
    }
    if(NomPage == "contact")
    {
      this.router.navigate(['/contact'])
    }
   }
}
