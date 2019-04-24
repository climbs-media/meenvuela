import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalSubeVideoPage } from './modal-sube-video.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSubeVideoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalSubeVideoPage]
})
export class ModalSubeVideoPageModule {}
