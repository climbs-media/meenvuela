import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalMuestraGanadorPage } from './modal-muestra-ganador.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMuestraGanadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalMuestraGanadorPage]
})
export class ModalMuestraGanadorPageModule {}
