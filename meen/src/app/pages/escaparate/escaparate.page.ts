import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverDescriEscaparatePage } from '../popover-descri-escaparate/popover-descri-escaparate.page';

@Component({
  selector: 'app-escaparate',
  templateUrl: './escaparate.page.html',
  styleUrls: ['./escaparate.page.scss'],
})
export class EscaparatePage implements OnInit {
  data:any={};
  descripcion: `Reto de fotografía Especiales`
  public  tituhead: string = 'Retos especiales';

  value = 0;

  constructor(private popoverController: PopoverController, private modalController: ModalController) {
   }

  ngOnInit() {
  }
    abrirModalMostrar() {

    this.modalController.create({
      component: PopoverDescriEscaparatePage,
      componentProps: {

        descripcion: this.descripcion,
      }
    }).then(modal => {
      modal.present();
    });
  }
}
