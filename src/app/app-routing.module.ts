import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducacionComponent } from './educacion/educacion.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AsesoriasComponent } from './asesorias/asesorias.component';
import { ContactComponent } from './contact/contact.component';
import { SharpeRatioComponent } from './2023/sharpe-ratio/sharpe-ratio.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'sharpe-ratio', component: SharpeRatioComponent},
  { path: 'asesorias', component: AsesoriasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
