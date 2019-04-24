import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMuestraQuizPage } from '../modal-muestra-quiz/modal-muestra-quiz.page';

@Component({
  selector: 'app-retos-quiz',
  templateUrl: './retos-quiz.page.html',
  styleUrls: ['./retos-quiz.page.scss'],
})
export class RetosQuizPage implements OnInit {
  public  tituhead = 'Retos de Quiz';
  mensaje = 'Reto Quiz (Participar)';

  preguntas: any = [{pregunta: '¿Que dia es hoy?',
  respuesta1: 'viernes',
   respuesta2: 'sabado',
  respuesta3: 'domingo',
  respuesta4: 'lunes'},
  {pregunta: '¿que dia sera mañana?',
  respuesta1: 'martes',
  respuesta2: 'miercoles',
  respuesta3: 'jueves',
  respuesta4: 'viernes'}];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  participa(pos) {


    this.modalController.create({
      component: ModalMuestraQuizPage,
      componentProps: {
      preguntas: this.preguntas[pos],

      }
    }).then(modal => {
      modal.present();
    });
  }
}
