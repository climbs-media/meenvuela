import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { HomePageModule } from '../home/home.module';
import { EscaparatePageModule } from '../escaparate/escaparate.module';
import { GanadoresPageModule } from '../ganadores/ganadores.module';
import { VotacionesPageModule } from '../votaciones/votaciones.module';
import { VotaFotoPageModule } from '../vota-foto/vota-foto.module';
import { VotaVideoPageModule } from '../vota-video/vota-video.module';
import { RetosPageModule } from '../retos/retos.module';
import { ContactPageModule } from '../contact/contact.module';
import { ChatPageModule } from '../chat/chat.module';
import { TarjetasPageModule } from '../tarjetas/tarjetas.module';
import { RetoFotoPageModule } from '../reto-foto/reto-foto.module';
import { RetoVideoPageModule } from '../reto-video/reto-video.module';
import { RetosQuizPageModule } from '../retos-quiz/retos-quiz.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home',
        outlet: 'home',
        component: HomePageModule },
      { path: 'tab1/escaparate', loadChildren: () => EscaparatePageModule },
      { path: 'tab1/ganadores',loadChildren: () => GanadoresPageModule},
      { path: 'tab1/votaciones', loadChildren: () => VotacionesPageModule },
      { path: 'tab1/vota-foto', loadChildren: () => VotaFotoPageModule },
      { path: 'tab1/vota-video', loadChildren: () => VotaVideoPageModule },

      { path: 'tab2', loadChildren: () => RetosPageModule },
      { path: 'tab2/reto-foto', loadChildren: () => RetoFotoPageModule },
      { path: 'tab2/reto-video', loadChildren: () => RetoVideoPageModule },
      { path: 'tab2/retos-quiz', loadChildren: () => RetosQuizPageModule },
      { path: 'tab3', loadChildren: () => ContactPageModule },
      { path: 'tab4', loadChildren: () => ChatPageModule },
      { path: 'tab5', loadChildren: () => TarjetasPageModule },


    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/tab3',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/tab4',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/tab5',
    pathMatch: 'full'
  }

];

@NgModule({
    imports:
      [
        RouterModule.forChild(routes)
      ],
    exports:
      [
        RouterModule
      ]
  })
  export class TabsPageRoutingModule {}