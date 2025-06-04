import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AsesoriasComponent } from './asesorias/asesorias.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { ContactComponent } from './contact/contact.component';
import { SharpeRatioComponent } from './2023/sharpe-ratio/sharpe-ratio.component';
import { TarjetaDeCreditoComponent } from './educacion/tarjeta-de-credito/tarjeta-de-credito.component';
import { DisclaimerComponent } from './shared/disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AsesoriasComponent,
    EducacionComponent,
    HerramientasComponent,
    ContactComponent,
    SharpeRatioComponent,
    TarjetaDeCreditoComponent,
    DisclaimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
