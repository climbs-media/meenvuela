import { Component, OnInit } from '@angular/core';
import { RetoFotoModalPage } from '../reto-foto-modal/reto-foto-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reto-foto',
  templateUrl: './reto-foto.page.html',
  styleUrls: ['./reto-foto.page.scss'],
})
export class RetoFotoPage implements OnInit {
  public  tituhead: string = 'Retos Fotografía';
  mensaje:string= 'Reto de Fotografía Participa!';
  constructor(private modalController: ModalController) { }

  ngOnInit( ) {
  }


  abrirModalMostrar() {


  this.modalController.create({
    component: RetoFotoModalPage,
    componentProps: {

    }
  }).then(modal => {
    modal.present();
  });
}

}
