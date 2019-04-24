import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalSubeFotoPage } from './modal-sube-foto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSubeFotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalSubeFotoPage]
})
export class ModalSubeFotoPageModule {}
