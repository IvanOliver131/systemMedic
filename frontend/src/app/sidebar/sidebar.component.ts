import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  el: any;
  el2: any;
  loading: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  add() {

  }

  goToControleMedicamentos(){
    this.router.navigateByUrl('sign-in')
  }

  goToControlePacientes(){

  }

  goToControleDeRetirada(){

  }

  goToRelatorioDeRetirada(){

  }

  goToRelatorioDeReposicao(){

  }

  goToRelatorioDeMedicamentosControlados(){
    
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['sign-in']);
  }
}
