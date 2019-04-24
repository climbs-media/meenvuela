import { Component, OnInit } from '@angular/core';

import { ModalController, NavParams } from '@ionic/angular';
import { ModalSubeFotoPage } from '../modal-sube-foto/modal-sube-foto.page';


@Component({
  selector: 'app-popover-descri-escaparate',
  templateUrl: './popover-descri-escaparate.page.html',
  styleUrls: ['./popover-descri-escaparate.page.scss'],
})
export class PopoverDescriEscaparatePage implements OnInit {
img: any;

  concursante:string;
  srcImagen:string; //binding atributo
  descripcion:string;

  constructor(public modalController: ModalController, private params: NavParams) { }

  ngOnInit() {
    this.img = this.params.get('img');
    this.descripcion = this.params.get('descripcion');
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
