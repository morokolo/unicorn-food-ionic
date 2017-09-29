import { AuthenticationService } from './../../providers/authentication-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MenusPage} from "../menus/menus";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  restuarants: any = [];
  constructor(public navCtrl: NavController, private authService: AuthenticationService) {
    this.getResuturants();
  }

  getResuturants() {
    let data = {
      'page': 'restu'
    }
    this.authService.getRestuarants(data)
    .subscribe(
        (res) => {
          
          this.restuarants = [{"id":1,"name":"McDonalds","address":"Fourways","latlong":"asdasda","menu":{"id":1,"title":"asdasdasd"}},{"id":2,"name":"McDonalds","address":"Mall of Africa","latlong":"asdasfdas","menu":{"id":2,"title":"asdasda"}}];
        },
        (err) => {
            // this._errorHelper.handleError(err);
        }
    );
  }

  goToResturant() {
    this.navCtrl.push(MenusPage);
  }

}
