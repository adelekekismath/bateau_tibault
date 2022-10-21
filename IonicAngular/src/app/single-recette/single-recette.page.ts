import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-recette',
  templateUrl: './single-recette.page.html',
  styleUrls: ['./single-recette.page.scss'],
})
export class SingleRecettePage implements OnInit {

  recetteName: any;
  recette: {
    name: string,
    description: string,
    image: string
  };
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.recette = this.router.getCurrentNavigation().extras.state.recette;
      }
    });
   }

  ngOnInit() {
  }

}
