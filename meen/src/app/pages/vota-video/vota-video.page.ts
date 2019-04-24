import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverRetoVideoVotarPage } from '../popover-reto-video-votar/popover-reto-video-votar.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vota-video',
  templateUrl: './vota-video.page.html',
  styleUrls: ['./vota-video.page.scss'],
})
export class VotaVideoPage implements OnInit {

  public  tituhead: String = 'Votación Vídeos';

  video: any;
  srcVideo: string;
  descripcion: string;
  valorhiden: Boolean;
  concursante1: String;
  concursante2: String;
  concursante3: String;
  // para opover
  data: any = {};
  // regresa desde popover
  votado: any ;
  // mensaje de votado
  
 

  videoUrl = '../../../assets/imgs/video/';

  constructor(public popoverCtrl: PopoverController, private router: Router) {
    this.concursante1 = 'Alejandro';
    this.concursante2 = 'Camila';
    this.concursante3 = 'Pedro';
    this.valorhiden = true;

   // console.log(this.descripcion +"---"+this.srcImagen);
  }
  ngOnInit() {
  }

  votaVi(nomUser) {
    console.log('$$$$$' + nomUser);
    this.data = {
                 imagen: nomUser + '.mp4',
                 concursante: nomUser ,
                 descripcion: `Este video es muy divertido , grabado
                 con mucha calidad !!!!!!!!`};
    }

    volver(){
      this.router.navigateByUrl('tabs/tab1/votaciones');
      }


    async PopoverController(){
      const popover = await this.popoverCtrl.create({
        component: PopoverRetoVideoVotarPage,
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
