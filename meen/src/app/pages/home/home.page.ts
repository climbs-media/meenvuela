import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public  tituhead: string = 'Aeropuerto';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irEscaparate() {
    this.router.navigateByUrl('tabs/tab1/escaparate');
  }
  irGanadores() {
    this.router.navigateByUrl('tabs/tab1/ganadores');
  }
  irVotaciones() {
    this.router.navigateByUrl('tabs/tab1/votaciones');
  }



}
