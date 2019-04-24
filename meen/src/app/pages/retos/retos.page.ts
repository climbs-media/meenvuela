import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retos',
  templateUrl: './retos.page.html',
  styleUrls: ['./retos.page.scss'],
})
export class RetosPage implements OnInit {
  public  tituhead: string = 'Retos';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  fotoReto(){
    this.router.navigateByUrl('tabs/tab2/reto-foto');
  }
  videoReto(){
    this.router.navigateByUrl('tabs/tab2/reto-video');
  }
  quizReto(){
    this.router.navigateByUrl('tabs/tab2/retos-quiz');
  }
}
