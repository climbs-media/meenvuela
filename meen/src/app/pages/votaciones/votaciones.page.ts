import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votaciones',
  templateUrl: './votaciones.page.html',
  styleUrls: ['./votaciones.page.scss'],
})
export class VotacionesPage implements OnInit {
  public  tituhead: string = 'Votaciones';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irVotarfoto(){
    this.router.navigateByUrl('tabs/tab1/vota-foto');
  }
  irVotarvideo(){
    this.router.navigateByUrl('tabs/tab1/vota-video');

  }

}
