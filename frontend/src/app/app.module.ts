import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { NastavnikComponent } from './components/nastavnik/nastavnik.component';
import { AboutComponent } from './components/about/about.component';
import { PanelComponent } from './components/panel/panel.component';
import { AuthGuard } from './auth.guard';
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

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    NastavnikComponent,
    AboutComponent,
    PanelComponent,
    UcenikComponent,
    RoditeljiComponent,
    RasporedComponent,
    ServisComponent,
    SmjeroviComponent,
    UlogaComponent,
    ProgramComponent,
    PredmetComponent,
    PrijavaComponent,
    ObavijestComponent,
    CarnetComponent,
    RazredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
