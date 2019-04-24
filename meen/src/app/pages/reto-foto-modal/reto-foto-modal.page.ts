import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSubeFotoPage } from '../modal-sube-foto/modal-sube-foto.page';

@Component({
  selector: 'app-reto-foto-modal',
  templateUrl: './reto-foto-modal.page.html',
  styleUrls: ['./reto-foto-modal.page.scss'],
})
export class RetoFotoModalPage implements OnInit {
  descripcion: string= 'Descripcion del Reto Fotografía';
  constructor( private modalController: ModalController ) { }

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss();
  }


  abrirModalSube() {

    this.modalController.create({
      component: ModalSubeFotoPage,
      componentProps: {
      }
    }).then(modal => {
      modal.present();
    });
  }

}
