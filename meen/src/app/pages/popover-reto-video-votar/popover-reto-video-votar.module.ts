import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverRetoVideoVotarPage } from './popover-reto-video-votar.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverRetoVideoVotarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopoverRetoVideoVotarPage]
})
export class PopoverRetoVideoVotarPageModule {}
