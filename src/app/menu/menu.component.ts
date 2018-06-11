import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  private _opened: boolean = true;

  private _toggleSidebar() {
    this._opened = !this._opened;
  } 
  private titlebold = "MAIN";
  private titlenorm = "TITLE";

  constructor() { }

  ngOnInit() {
  }

}
