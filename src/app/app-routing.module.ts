import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { AsesoriasComponent } from './asesorias/asesorias.component';
import { ContactComponent } from './contact/contact.component';
import { SharpeRatioComponent } from './2023/sharpe-ratio/sharpe-ratio.component';
import { TarjetaDeCreditoComponent } from './educacion/tarjeta-de-credito/tarjeta-de-credito.component';
import { CalculadoraCuotasComponent } from './herramientas/calculadora-cuotas/calculadora-cuotas.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'educacion', component: EducacionComponent },
  { path: 'educacion/tarjeta-de-credito', component: TarjetaDeCreditoComponent },

  { path: 'herramientas', component: HerramientasComponent },
  { path: 'herramientas/calculadora-cuotas', component: CalculadoraCuotasComponent },


  { path: 'portfolio', component: HerramientasComponent},

  { path: 'contact', component: ContactComponent},

  { path: 'sharpe-ratio', component: SharpeRatioComponent},

  { path: 'asesorias', component: AsesoriasComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
