import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'home-nologin', loadChildren: './pages/home-nologin/home-nologin.module#HomeNologinPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'retos', loadChildren: './pages/retos/retos.module#RetosPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'tarjetas', loadChildren: './pages/tarjetas/tarjetas.module#TarjetasPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'escaparate', loadChildren: './pages/escaparate/escaparate.module#EscaparatePageModule'},
  { path: 'ganadores', loadChildren: './pages/ganadores/ganadores.module#GanadoresPageModule' },
  { path: 'votaciones', loadChildren: './pages/votaciones/votaciones.module#VotacionesPageModule'},
  { path: 'vota-foto', loadChildren: './pages/vota-foto/vota-foto.module#VotaFotoPageModule' },
  { path: 'vota-video', loadChildren: './pages/vota-video/vota-video.module#VotaVideoPageModule'},
// tslint:disable-next-line: max-line-length
  { path: 'popover-descri-escaparate', loadChildren: './pages/popover-descri-escaparate/popover-descri-escaparate.module#PopoverDescriEscaparatePageModule' },
// tslint:disable-next-line: max-line-length
  { path: 'popover-reto-foto-votar', loadChildren: './pages/popover-reto-foto-votar/popover-reto-foto-votar.module#PopoverRetoFotoVotarPageModule' },
// tslint:disable-next-line: max-line-length
  { path: 'popover-reto-video-votar', loadChildren: './pages/popover-reto-video-votar/popover-reto-video-votar.module#PopoverRetoVideoVotarPageModule' },
  { path: 'modal-muestra-img', loadChildren: './pages/modal-muestra-img/modal-muestra-img.module#ModalMuestraImgPageModule' },
// tslint:disable-next-line: max-line-length
  { path: 'modal-muestra-ganador', loadChildren: './pages/modal-muestra-ganador/modal-muestra-ganador.module#ModalMuestraGanadorPageModule' },
  { path: 'modal-sube-foto', loadChildren: './pages/modal-sube-foto/modal-sube-foto.module#ModalSubeFotoPageModule' },
  { path: 'reto-foto', loadChildren: './pages/reto-foto/reto-foto.module#RetoFotoPageModule' },
  { path: 'reto-video', loadChildren: './pages/reto-video/reto-video.module#RetoVideoPageModule' },
  { path: 'reto-foto-modal', loadChildren: './pages/reto-foto-modal/reto-foto-modal.module#RetoFotoModalPageModule' },
  { path: 'modal-muestra-video', loadChildren: './pages/modal-muestra-video/modal-muestra-video.module#ModalMuestraVideoPageModule' },
  { path: 'modal-sube-video', loadChildren: './pages/modal-sube-video/modal-sube-video.module#ModalSubeVideoPageModule' },
  { path: 'retos-quiz', loadChildren: './pages/retos-quiz/retos-quiz.module#RetosQuizPageModule' },
  { path: 'modal-muestra-quiz', loadChildren: './pages/modal-muestra-quiz/modal-muestra-quiz.module#ModalMuestraQuizPageModule' },
// tslint:disable-next-line: max-line-length
  { path: 'modal-cambiar-tarjeta', loadChildren: './pages/modal-cambiar-tarjeta/modal-cambiar-tarjeta.module#ModalCambiarTarjetaPageModule' },
  { path: 'modal-participar', loadChildren: './pages/modal-participar/modal-participar.module#ModalParticiparPageModule' },
  { path: 'modal-ajustes', loadChildren: './pages/modal-ajustes/modal-ajustes.module#ModalAjustesPageModule' },
  { path: 'registrarse', loadChildren: './pages/registrarse/registrarse.module#RegistrarsePageModule' },
  { path: 'terminos', loadChildren: './pages/terminos/terminos.module#TerminosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
