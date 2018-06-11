import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datos:any=[];
  constructor(public navCtrl: NavController) {
    this.datos = [
      {'adelante': 'hola', 'atras':'adios'},
      {'adelante': 'hola', 'atras':'adios'},
      {'adelante': 'hola', 'atras':'adios'},
      {'adelante': 'hola', 'atras':'adios'},
    ];
  }

}
