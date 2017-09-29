import { ResturantsPage } from './../resturants/resturants';
import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  order: Object;
  constructor(public navCtrl: NavController, private nav: NavController) {
    this.order = {"id":1,"price":"R56.50","name":"BBQ Meal", description: "BBQ burger with Coke and Chips",image: "../../assets/img/BBQMeal.png"};
  }

  goToRestuarants() {
    this.nav.setRoot(ResturantsPage);
  }
}
