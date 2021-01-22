import {​​ Component, OnInit }​​ from '@angular/core';
import {​​ Router }​​ from '@angular/router';
import {​​ GlobalniService }​​ from '../globalni.service';
import { ZaposlenikModel } from '../interfejsi/zaposlenik-model';



@Component({​​
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
}​​)

export class ZaposleniComponent implements OnInit {​​
  sviZaposlenici: ZaposlenikModel[] = [];
  radnaMjesta: any;
  sviZaposleniciZaDisplay: ZaposlenikModel[] = [];
  terminPretrage: string = '';

  constructor(private globalni: GlobalniService, private router: Router) {​​ }​​


  ngOnInit(): void {​​
    this.globalni.getZaposlenici().subscribe((rezultat: any) => {​​
      this.sviZaposlenici = rezultat;
      this.sviZaposleniciZaDisplay = rezultat;
      this.radnaMjesta = [...new Set(this.sviZaposlenici.map((element: any) => element.radnoMjesto))];
    }​​);

  }​​

  FiltrirajZaposlene(mjesto: any) {​​
    this.sviZaposleniciZaDisplay = this.sviZaposlenici.filter((zaposleni: any) => zaposleni.radnoMjesto === mjesto);

  }​​

  SviZaposlenici(): void {​​

    this.sviZaposleniciZaDisplay = this.sviZaposlenici;

  }​​

  Pretrazi() {
    this.sviZaposleniciZaDisplay = this.sviZaposlenici.filter((zaposlenik: any) => zaposlenik.ime.toLowerCase().includes(this.terminPretrage.toLowerCase()) || zaposlenik.radnoMjesto.toLowerCase().includes(this.terminPretrage.toLowerCase()));
  }

  PonistiPretragu() {
    this.sviZaposleniciZaDisplay = this.sviZaposlenici;

  }


  onKey(event: any): void {
    if (event.target.value === '') {
      this.sviZaposleniciZaDisplay = this.sviZaposlenici;
    }
  }

  noviZaposleni() {​​

    this.router.navigate(['/novizaposlenik']);

  }​​


}​​
