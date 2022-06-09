import { Component, Injectable, OnInit, ViewEncapsulation } from '@angular/core';
import { HamburgerService } from './navbar/hamburger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'winemanager';
  
  constructor(private hamburgerService: HamburgerService) {}
  ngOnInit() {
    this.hamburgerService.hamburgerClick();
  }
}

