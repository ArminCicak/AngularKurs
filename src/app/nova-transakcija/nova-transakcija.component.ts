import { Component, OnInit } from '@angular/core';
import {​​ FormControl, FormGroup, Validators }​​ from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalniService } from '../globalni.service';

@Component({
  selector: 'app-nova-transakcija',
  templateUrl: './nova-transakcija.component.html',
  styleUrls: ['./nova-transakcija.component.css']
})
export class NovaTransakcijaComponent implements OnInit {

  transakcija: FormGroup = new FormGroup({​​}​​);
  porukaZaKorisnika: string = "";

  constructor(private api: GlobalniService, private router: Router) {​​ }​​



  ngOnInit(): void {​​

    this.transakcija = new FormGroup({​​

      datum: new FormControl(),

      detaljiTransakcije: new FormControl(),

      kategorija: new FormControl(),

      iznos: new FormControl()

    }​​);

  }​​

  onSubmit(transakcija: any) {​​

    transakcija.value.datum = new Date();

    this.api.postTransakcije(transakcija.value).subscribe((rezultat: any) => {​​

      this.porukaZaKorisnika = "Uspješno ste unijeli podatke o transakciji kategorije: " + rezultat.kategorija;

      setTimeout(() => {​​

        this.router.navigate(['/transakcije'])

      }​​, 3000);

    }​​,

      error => this.porukaZaKorisnika = "Dogodila se greška, molim Vas pokušajte ponovo")

  }​​

}
