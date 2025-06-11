import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { AsesoriasComponent } from './asesorias/asesorias.component';
import { ContactComponent } from './contact/contact.component';
import { TarjetaDeCreditoComponent } from './educacion/tarjeta-de-credito/tarjeta-de-credito.component';
import { DiccionarioFinancieroComponent } from './educacion/diccionario-financiero/diccionario-financiero.component';
import { CalculadoraCuotasComponent } from './herramientas/calculadora-cuotas/calculadora-cuotas.component';
import { GestionDeGastosComponent } from './educacion/gestion-de-gastos/gestion-de-gastos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'educacion', component: EducacionComponent },
  { path: 'educacion/tarjeta-de-credito', component: TarjetaDeCreditoComponent },
  { path: 'educacion/diccionario-financiero', component: DiccionarioFinancieroComponent},
  { path: 'educacion/gestion-de-gastos', component: GestionDeGastosComponent},

  { path: 'herramientas', component: HerramientasComponent },
  { path: 'herramientas/calculadora-cuotas', component: CalculadoraCuotasComponent },


  { path: 'portfolio', component: HerramientasComponent},

  { path: 'contact', component: ContactComponent},

  { path: 'asesorias', component: AsesoriasComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
