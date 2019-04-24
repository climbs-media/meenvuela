import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-muestra-img',
  templateUrl: './modal-muestra-img.page.html',
  styleUrls: ['./modal-muestra-img.page.scss'],
})
export class ModalMuestraImgPage implements OnInit {
  img: any;
  mensaje: string;

  constructor( public params: NavParams, private modalController: ModalController) {
   }

  ngOnInit() {
    this.img = this.params.get('img');
    this.mensaje = this.params.get('mensaje');
  }

  close(){
    this.modalController.dismiss();
  }
}
