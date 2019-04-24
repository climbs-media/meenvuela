import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cambiar-tarjeta',
  templateUrl: './modal-cambiar-tarjeta.page.html',
  styleUrls: ['./modal-cambiar-tarjeta.page.scss'],
})
export class ModalCambiarTarjetaPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss();
  }
}
