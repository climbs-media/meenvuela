import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverRetoFotoVotarPage } from './popover-reto-foto-votar.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverRetoFotoVotarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopoverRetoFotoVotarPage]
})
export class PopoverRetoFotoVotarPageModule {}
