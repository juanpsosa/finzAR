import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SiniestrosVialesSfComponent } from './2022/siniestros-viales-sf/siniestros-viales-sf.component';
import { ContactComponent } from './contact/contact.component';
import { SharpeRatioComponent } from './2023/sharpe-ratio/sharpe-ratio.component';
import { EmseComponent } from './2022/emse/emse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'siniestros-viales-sf', component: SiniestrosVialesSfComponent},
  { path: 'sharpe-ratio', component: SharpeRatioComponent},
  { path: 'emse', component: EmseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
