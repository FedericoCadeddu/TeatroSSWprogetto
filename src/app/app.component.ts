import { Component } from '@angular/core';
import { MongodbService } from './mongodb.service';
export class posto{
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  key: string;
  prenotazioni = [];
  teatro = {
    platea: [],
    palchi: [],
  };
  nfilePlatea = 7;
  npostiPlatea = 10;
  teatroIsShown = false;
  nome : posto = new posto();
  newPren;
  nfilePalchi = 4;
  npostiPalchi = 6;
  constructor(private database: MongodbService) {
    this.key = 'bf1c48ab';
    this.teatro.platea = Array(this.nfilePlatea)
      .fill(undefined)
      .map(() => Array(this.npostiPlatea).fill('x'));
    this.teatro.palchi=Array(this.nfilePalchi).fill(undefined).map( () => Array(this.npostiPalchi).fill("x"));
    this.teatro.platea[2][1] = 'Alessio';
    this.teatro.platea[3][4] = 'Gianna';
    this.teatro.palchi[3][1] = 'Luigi';
  }
  
  Mostra(id1: string|number, id2: string|number) {
      this.nome.name = this.teatro.platea[id1][id2];
      console.log(this.teatro);
}
MostraP(id1: string|number, id2: string|number) {  
  this.nome.name = this.teatro.palchi[id1][id2];
}

Mostra2(id1,id2){
        this.teatro.platea[id1][id2]=this.prenotazioni[id1];
        this.prenotazioni.pop()
        this.nome.name = this.teatro.platea[id1][id2];
        this.database.setValue(this.teatro,this.key);
    console.log(this.teatro);
}
MostraP2(id1,id2){
  this.teatro.palchi[id1][id2]=this.prenotazioni[id1];
  this.prenotazioni.pop();
  this.nome.name = this.teatro.palchi[id1][id2];
  this.database.setValue(this.teatro,this.key);
    console.log(this.teatro);
}
  
  addPren(newPren: any ) {
    this.prenotazioni.push(newPren);
    if(this.nome.name != undefined){
      this.nome.name = newPren;}
  }
  download(k:string){
    k = this.key;
    this.teatroIsShown = !this.teatroIsShown;
    this.database.getValue(k);
    console.log(this.teatro);
  }
}