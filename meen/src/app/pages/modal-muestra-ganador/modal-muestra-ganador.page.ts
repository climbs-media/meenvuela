import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-muestra-ganador',
  templateUrl: './modal-muestra-ganador.page.html',
  styleUrls: ['./modal-muestra-ganador.page.scss'],
})
export class ModalMuestraGanadorPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }

}
