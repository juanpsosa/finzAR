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
import { TarjetaDeCreditoComponent } from './educacion/tarjeta-de-credito/tarjeta-de-credito.component';
import { DisclaimerComponent } from './shared/disclaimer/disclaimer.component';
import { CalculadoraCuotasComponent } from './herramientas/calculadora-cuotas/calculadora-cuotas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DiccionarioFinancieroComponent } from './educacion/diccionario-financiero/diccionario-financiero.component';
import { GestionDeGastosComponent } from './educacion/gestion-de-gastos/gestion-de-gastos.component';

// ✅ Lucide Angular
import { LucideAngularModule } from 'lucide-angular';
import {
  Wallet,
  Wrench,
  BarChart3,
  Home,
  BookOpenCheck,
  UserCheck,
  Info,
  PiggyBank,
  CalendarDays,
  CreditCard,
  Banknote,
  LineChart,
  TrendingUp,
  Coins,
  Shield,
  TrendingDown,
} from 'lucide';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AsesoriasComponent,
    EducacionComponent,
    HerramientasComponent,
    ContactComponent,
    TarjetaDeCreditoComponent,
    DisclaimerComponent,
    CalculadoraCuotasComponent,
    DiccionarioFinancieroComponent,
    GestionDeGastosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LucideAngularModule.pick({
      Wallet,
      Wrench,
      BarChart3,
      Home,
      BookOpenCheck,
      UserCheck,
      Info,
      PiggyBank,
      CalendarDays,
      CreditCard,
      Banknote,
      LineChart,
      TrendingUp,
      Coins,
      Shield,
      TrendingDown,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
