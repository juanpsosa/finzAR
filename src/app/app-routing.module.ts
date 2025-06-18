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
import { PlanillaGastosComponent } from './herramientas/planilla-gastos/planilla-gastos.component';
import { OrdenFinancieroComponent } from './educacion/orden-financiero/orden-financiero.component';
import { DeudaComponent } from './educacion/deuda/deuda.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'educacion', component: EducacionComponent },
  { path: 'educacion/tarjeta-de-credito', component: TarjetaDeCreditoComponent },
  { path: 'educacion/diccionario-financiero', component: DiccionarioFinancieroComponent},
  { path: 'educacion/orden-financiero', component: OrdenFinancieroComponent},
  { path: 'educacion/deuda', component: DeudaComponent},


  { path: 'herramientas', component: HerramientasComponent },
  { path: 'herramientas/calculadora-cuotas', component: CalculadoraCuotasComponent },
  { path: 'herramientas/planilla-gastos', component: PlanillaGastosComponent},


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
