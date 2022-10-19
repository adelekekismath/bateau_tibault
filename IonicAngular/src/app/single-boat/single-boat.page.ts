import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-boat',
  templateUrl: './single-boat.page.html',
  styleUrls: ['./single-boat.page.scss'],
})
export class SingleBoatPage implements OnInit {

  boat: {
    name: string,
    image: string,
    description: string,
    details: string
  };
  constructor(private route: ActivatedRoute, private router: Router) {
    if(this.router.getCurrentNavigation().extras.state){
      this.boat = this.router.getCurrentNavigation().extras.state.boat;
      console.log(this.boat);
    }
   }

  ngOnInit() {
  }

}
