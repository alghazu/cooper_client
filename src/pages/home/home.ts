import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PersonProvider } from '../../providers/person/person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};
  constructor(public navCtrl: NavController, public person: PersonProvider) {
    this.user = {distance: 1000, age: 20}
  }
  calculate() {
    this.person.age = this.user.age;
    this.person.gender = this.user.gender;

    this.person.doAssessment(this.user.distance);
    console.log(this.person.assessmentMessage);
  }

}
