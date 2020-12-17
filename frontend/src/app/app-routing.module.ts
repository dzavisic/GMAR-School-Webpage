import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { AboutComponent } from './components/about/about.component';
import { PanelComponent } from './components/panel/panel.component';
import { AuthGuard } from './auth.guard';
import { NastavnikComponent } from './components/nastavnik/nastavnik.component';
import { UcenikComponent } from './components/ucenik/ucenik.component';
import { RoditeljiComponent } from './components/roditelji/roditelji.component';
import { RasporedComponent } from './components/raspored/raspored.component';
import { ServisComponent } from './components/servis/servis.component';
import { SmjeroviComponent } from './components/smjerovi/smjerovi.component';
import { UlogaComponent } from './components/uloga/uloga.component';
import { ProgramComponent } from './components/program/program.component';
import { PredmetComponent } from './components/predmet/predmet.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { ObavijestComponent } from './components/obavijest/obavijest.component';
import { CarnetComponent } from './components/carnet/carnet.component';
import { RazredComponent } from './components/razred/razred.component';


const routes: Routes = [
  {path: '' , component: PocetnaComponent},
  {path: 'about', component: AboutComponent},
  {path: 'prijava', component: PrijavaComponent },
  {path: 'roditelji', component: RoditeljiComponent},
  {path: 'raspored', component: RasporedComponent},
  {path: 'servis', component: ServisComponent},
  {path: 'smjerovi', component: SmjeroviComponent},
  {path: 'panel', component: PanelComponent, canActivate: [AuthGuard]},
  {path: 'panel/nastavnik', component: NastavnikComponent, canActivate: [AuthGuard]},
  {path: 'panel/ucenik', component: UcenikComponent, canActivate: [AuthGuard]},
  {path: 'panel/uloga', component: UlogaComponent, canActivate: [AuthGuard]},
  {path: 'panel/program', component: ProgramComponent, canActivate: [AuthGuard]},
  {path: 'panel/razred', component: RazredComponent, canActivate: [AuthGuard]},
  {path: 'panel/predmet', component: PredmetComponent, canActivate: [AuthGuard]},
  {path: 'panel/obavijest', component: ObavijestComponent, canActivate: [AuthGuard]},
  {path: 'panel/carnet', component: CarnetComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
