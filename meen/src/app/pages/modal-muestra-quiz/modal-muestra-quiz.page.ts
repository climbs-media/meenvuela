import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-muestra-quiz',
  templateUrl: './modal-muestra-quiz.page.html',
  styleUrls: ['./modal-muestra-quiz.page.scss'],
})
export class ModalMuestraQuizPage implements OnInit {
  data: any = [];
  pregunta: any;
  respuesta1: any;
  respuesta2: any;
  respuesta3: any;
  respuesta4: any;
  constructor(public params: NavParams, private modalController: ModalController) {

    this.data = this.params.get('preguntas');
  this.pregunta = this.data.pregunta;
  this.respuesta1 = this.data.respuesta1;
  this.respuesta2 = this.data.respuesta2;
  this.respuesta3 = this.data.respuesta3;
  this.respuesta4 = this.data.respuesta4;
   }
   close() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
