import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverRetoFotoVotarPageModule } from '../popover-reto-foto-votar/popover-reto-foto-votar.module';
import { PopoverRetoFotoVotarPage } from '../popover-reto-foto-votar/popover-reto-foto-votar.page';
import { async } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vota-foto',
  templateUrl: './vota-foto.page.html',
  styleUrls: ['./vota-foto.page.scss'],
})
export class VotaFotoPage implements OnInit {

  public  tituhead: String = 'Votacion Fotografía';
  // para contenido
  usuario: String;
  usuario2: String;
  // para opover
  data: any = {};
  // regresa desde popover
  votado: any ;
  // mensaje de votado
   valorhiden: Boolean;

  constructor(public popoverCtrl: PopoverController, private router: Router) {
    this.usuario = 'Alejandro';
    this.usuario2 = 'Camila';
    this.valorhiden = true;
   }

  ngOnInit() {
  }

  volver(){
    this.router.navigateByUrl('tabs/tab1/votaciones');
    }

  votaFo(nomUser) {
    console.log('$$$$$' + nomUser);
    this.data = {
                 imagen: nomUser + '.jpg',
                 concursante: nomUser ,
                 descripcion: `Paisaje Espectacular, que describe mucha
                              naturaleza `};
    }





async ModalController(){
    const popover = await this.popoverCtrl.create({
      component: PopoverRetoFotoVotarPage,
      componentProps: { custom: this.data }
    });
     // ev: myEvent
  popover.onDidDismiss().then((Data => {

      if (Data != null) {
        console.log('*****', Data);
        this.votado = Data;
        setTimeout(() => {
          this.valorhiden = false;
           }, 200);
           setTimeout(() => {
            this.valorhiden = true;
             }, 5000);
      }

    }));
    return await popover.present();
  }
  }
