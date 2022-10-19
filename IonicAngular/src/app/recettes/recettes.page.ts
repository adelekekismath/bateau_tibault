import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Recette } from '../models/recette';
import { RecettesService } from '../services/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  recettesList: any;

  constructor(private router: Router, private service: RecettesService) { }

  ngOnInit() { 
    this.service.getRecettes().subscribe(res =>{
      this.recettesList = res ;
      console.log(this.recettesList); 
    })
   }

  onLoadRecette(recette : {name : string , description : string}) {
    let navigationExtras : NavigationExtras = {
      state : {recette : recette}
    };
    this.router.navigate(['/single-recette'] , navigationExtras)
  }

}