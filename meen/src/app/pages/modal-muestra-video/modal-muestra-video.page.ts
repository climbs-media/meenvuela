import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSubeVideoPage } from '../modal-sube-video/modal-sube-video.page';

@Component({
  selector: 'app-modal-muestra-video',
  templateUrl: './modal-muestra-video.page.html',
  styleUrls: ['./modal-muestra-video.page.scss'],
})
export class ModalMuestraVideoPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  abrirModalSube() {

    this.modalController.create({
      component: ModalSubeVideoPage,
      componentProps: {
      }
    }).then(modal => {
      modal.present();
    });
  }



  close(){
    this.modalController.dismiss();
  }

}
