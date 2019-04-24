import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCambiarTarjetaPage } from '../modal-cambiar-tarjeta/modal-cambiar-tarjeta.page';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage implements OnInit {
  public  tituhead: string = 'Tarjetas';
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  irCambiar(tarj){
    this.modalController.create({
      component: ModalCambiarTarjetaPage,
      componentProps: {
  
      }
    }).then(modal => {
      modal.present();
    });
  }
  }


