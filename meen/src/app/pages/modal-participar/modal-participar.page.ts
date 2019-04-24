import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-participar',
  templateUrl: './modal-participar.page.html',
  styleUrls: ['./modal-participar.page.scss'],
})
export class ModalParticiparPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  close() {
    this.modalController.dismiss();
  }
}
