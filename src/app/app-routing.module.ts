import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {​​ PrvaKomponentaComponent }​​ from './prva-komponenta/prva-komponenta.component';
import {​​ DrugaKomponentaComponent }​​ from './druga-komponenta/druga-komponenta.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { TransakcijeComponent } from './transakcije/transakcije.component';
import { DrzaveComponent } from './drzave/drzave.component';
import {​​ UnesiZaposlenogComponent }​​ from './unesi-zaposlenog/unesi-zaposlenog.component';
import { NovaTransakcijaComponent } from './nova-transakcija/nova-transakcija.component';

const routes: Routes = [

  {​​​​ path: '', component: PrvaKomponentaComponent }​​​​,

  {​​​​ path: 'druga', component: DrugaKomponentaComponent }​​​​,

  { path: 'zaposleni', component: ZaposleniComponent },

  { path: 'transakcije', component: TransakcijeComponent },

  { path: 'drzave', component: DrzaveComponent },

  {​​ path: 'novizaposlenik', component: UnesiZaposlenogComponent }​​,

  {path: 'novatransakcija', component: NovaTransakcijaComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
