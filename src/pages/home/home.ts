import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};
  constructor(public navCtrl: NavController) {
    this.user = {distance: 1000, age: 20}
  }
  calculate() {
    console.log(this.user);
  }

}
