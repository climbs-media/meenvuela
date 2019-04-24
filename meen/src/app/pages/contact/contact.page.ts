import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMuestraImgPage } from '../modal-muestra-img/modal-muestra-img.page';
import { ModalParticiparPage } from '../modal-participar/modal-participar.page';
import { ModalAjustesPage } from '../modal-ajustes/modal-ajustes.page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  imagenEnviar: any;

imagen1: string;
imagen2: string;
imagen3: string;
mensaje: string;

  constructor(private modalController: ModalController) {
    this.imagen1 = '../../../assets/imgs/fotosperfil/Rectangle 1.png';
    this.imagen2 = '../../../assets/imgs/fotosperfil/Rectangle 2.png';
    this.imagen3 = '../../../assets/imgs/fotosperfil/Rectangle 3.png';
  }

  ngOnInit() {
  }


  mostrarimg(img) {
    this.imagenEnviar = img;

    this.modalController.create({
      component: ModalMuestraImgPage,
      componentProps: {
        img: img,
        mensaje : 'Nombre Reto'
      }
    }).then(modal => {
      modal.present();
    });
  }


  irParticipar() {
    this.modalController.create({
      component: ModalParticiparPage,
      componentProps: {

      }
    }).then(modal => {
      modal.present();
    });
  }
  irAjustes(){
    this.modalController.create({
      component: ModalAjustesPage,
      componentProps: {

      }
    }).then(modal => {
      modal.present();
    });
  }
}

