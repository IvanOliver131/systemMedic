import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  el: any;
  el2: any;
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  add() {

  }

}
