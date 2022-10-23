import { Component,Input, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {}

  goToPreviousPage(){
    this.location.back();
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
