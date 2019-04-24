import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalMuestraQuizPage } from './modal-muestra-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMuestraQuizPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalMuestraQuizPage]
})
export class ModalMuestraQuizPageModule {}
