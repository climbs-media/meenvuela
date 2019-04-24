import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ajustes',
  templateUrl: './modal-ajustes.page.html',
  styleUrls: ['./modal-ajustes.page.scss'],
})
export class ModalAjustesPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  close() {
    this.modalController.dismiss();
  }
}
