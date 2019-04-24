import { Component, OnInit } from '@angular/core';
import { ModalMuestraGanadorPageModule } from '../modal-muestra-ganador/modal-muestra-ganador.module';
import { ModalController } from '@ionic/angular';
import { ModalMuestraGanadorPage } from '../modal-muestra-ganador/modal-muestra-ganador.page';

@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.page.html',
  styleUrls: ['./ganadores.page.scss'],
})
export class GanadoresPage implements OnInit {
  public  tituhead: String= 'Ganadores de Retos';
  usuario: String = 'Alejandro';
  mensaje: String= 'Ganador de reto de Fotografía';
  mensaje2: String = 'Ganador de reto de Vídeo';
  usuario2: String= 'Pedro';
  
  //para el popover Mostar el reto
  data: any= {};

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

    abrirModalMostrar() {

    this.modalController.create({
      component: ModalMuestraGanadorPage,
      componentProps: {
      }
    }).then(modal => {
      modal.present();
    });
  }



}


