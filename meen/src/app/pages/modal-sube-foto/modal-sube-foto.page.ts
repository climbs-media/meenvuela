import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-sube-foto',
  templateUrl: './modal-sube-foto.page.html',
  styleUrls: ['./modal-sube-foto.page.scss'],
})
export class ModalSubeFotoPage implements OnInit {

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }
}
