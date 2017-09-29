import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MenusPage} from "../menus/menus";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToResturant() {
    this.navCtrl.push(MenusPage);
  }

}
