import { Component, OnInit } from '@angular/core';
import { GlobalniService } from '../globalni.service';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.css']
})
export class DrzaveComponent implements OnInit {

  sveDrzave: any;
  terminZaPretragu: string= '';
  ukupno: any;
  drzaveZaDisplay: any;
  
  constructor(private api: GlobalniService) { }

  ngOnInit(): void {
    this.api.getDrzave().subscribe((rezultati) => {

    this.sveDrzave = rezultati;
    this.drzaveZaDisplay = rezultati;

    this.ukupno = this.sveDrzave.reduce((total: any, drzave: any) => {
      total = total + drzave.population;
      return total;
    }, 0);

    //console.log(rezultati);



  }, error => console.log ("Došlo je do greške"))
 
}

Pretrazi(): void {​​

  this.api.pretraziDrzave(this.terminZaPretragu).subscribe((rezultat) => {​​

    this.drzaveZaDisplay = rezultat;

  }​​);

}​​

SveDrzave(): void {​​

  this.drzaveZaDisplay = this.sveDrzave;

}​​

onKey(event: any): void {
  if (event.target.value === '') {
    this.drzaveZaDisplay = this.sveDrzave;
  }
}

}
