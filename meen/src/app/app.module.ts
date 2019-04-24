import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverDescriEscaparatePageModule } from './pages/popover-descri-escaparate/popover-descri-escaparate.module';
import { ModalMuestraImgPageModule } from './pages/modal-muestra-img/modal-muestra-img.module';
import { ModalMuestraGanadorPageModule } from './pages/modal-muestra-ganador/modal-muestra-ganador.module';
import { ModalSubeFotoPageModule } from './pages/modal-sube-foto/modal-sube-foto.module';
import { RetoFotoModalPageModule } from './pages/reto-foto-modal/reto-foto-modal.module';
import { ModalMuestraVideoPageModule } from './pages/modal-muestra-video/modal-muestra-video.module';
import { ModalSubeVideoPageModule } from './pages/modal-sube-video/modal-sube-video.module';
import { ModalMuestraQuizPageModule } from './pages/modal-muestra-quiz/modal-muestra-quiz.module';
import { ModalCambiarTarjetaPageModule } from './pages/modal-cambiar-tarjeta/modal-cambiar-tarjeta.module';
import { ModalParticiparPageModule } from './pages/modal-participar/modal-participar.module';
import { ModalAjustesPageModule } from './pages/modal-ajustes/modal-ajustes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule,
  PopoverDescriEscaparatePageModule, ModalMuestraImgPageModule, ModalMuestraGanadorPageModule, ModalSubeFotoPageModule,
  RetoFotoModalPageModule, ModalMuestraVideoPageModule, ModalSubeVideoPageModule, ModalMuestraQuizPageModule,
  ModalCambiarTarjetaPageModule, ModalParticiparPageModule, ModalAjustesPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
