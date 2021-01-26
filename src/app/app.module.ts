import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PrvaKomponentaComponent } from './prva-komponenta/prva-komponenta.component';
import { DrugaKomponentaComponent } from './druga-komponenta/druga-komponenta.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { HttpClientModule } from '@angular/common/http';
import { TransakcijeComponent } from './transakcije/transakcije.component';
import { DrzaveComponent } from './drzave/drzave.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UnesiZaposlenogComponent } from './unesi-zaposlenog/unesi-zaposlenog.component';
import { NovaTransakcijaComponent } from './nova-transakcija/nova-transakcija.component';


@NgModule({
  declarations: [
    AppComponent,
    PrvaKomponentaComponent,
    DrugaKomponentaComponent,
    ZaposleniComponent,
    TransakcijeComponent,
    DrzaveComponent,
    UnesiZaposlenogComponent,
    NovaTransakcijaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
