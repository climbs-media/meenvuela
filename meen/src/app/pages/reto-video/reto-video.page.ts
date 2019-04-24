import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMuestraVideoPage } from '../modal-muestra-video/modal-muestra-video.page';

@Component({
  selector: 'app-reto-video',
  templateUrl: './reto-video.page.html',
  styleUrls: ['./reto-video.page.scss'],
})
export class RetoVideoPage implements OnInit {
  public  tituhead: string = 'Retos de Vídeo';
  mensaje: string= 'Reto de Vídeo Participa!';
  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  abrirModalMostrar() {


  this.modalController.create({
    component: ModalMuestraVideoPage,
    componentProps: {

    }
  }).then(modal => {
    modal.present();
  });
}

}
