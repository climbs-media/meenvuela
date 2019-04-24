import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-sube-video',
  templateUrl: './modal-sube-video.page.html',
  styleUrls: ['./modal-sube-video.page.scss'],
})
export class ModalSubeVideoPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss();
  }

}
