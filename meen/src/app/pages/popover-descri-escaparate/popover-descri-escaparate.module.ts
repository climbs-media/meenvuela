import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverDescriEscaparatePage } from './popover-descri-escaparate.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverDescriEscaparatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopoverDescriEscaparatePage]
})
export class PopoverDescriEscaparatePageModule {}
