import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-user-registration',
  templateUrl: 'user-registration.html'
})
export class UserRegistrationPage {

  constructor(public navCtrl: NavController) {

  }

  onSubmit() {
    this.navCtrl.setRoot(HomePage)
  }

}
