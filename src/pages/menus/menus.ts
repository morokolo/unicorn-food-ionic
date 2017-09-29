import { AuthenticationService } from './../../providers/authentication-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OrdersPage} from "../orders/orders";

@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html'
})
export class MenusPage {
  slides: Object;
  sliderOptions: Object;

  constructor(public navCtrl: NavController, private authService: AuthenticationService) {
    this.slides = [
      {
        price: "R 78.50",
        name: "Jalapeno & Cheese Burger",
        description: "Topped with melted cheese, chilli con carne, nachos and guacamole. ",
        image: "assets/img/ica-slidebox-img-3.jpg",
      },
      {
        price: "R 135.00",
        name: "Jalapeno & Cheese Burger",
        description: "Topped with melted cheese, chilli con carne, nachos and guacamole. ",
        image: "assets/img/ica-slidebox-img-3.jpg",
      },
      {
        price: "R 23.00",
        name: "Jalapeno & Cheese Burger",
        description: "Topped with melted cheese, chilli con carne, nachos and guacamole. ",
        image: "assets/img/ica-slidebox-img-3.jpg",
      }
    ];

    this.getMenus();
  }

  getMenus() {
    let data = {
      'apiKey': '5f691425a4aa1f7ff685a6ee6aa3dc46b0d22f05'
    }
    this.authService.getRestuarants(data)
    .subscribe(
        (res) => {
          
          this.slides = [
            {"id":1,"price":"R56.50","name":"BBQ Meal", description: "BBQ burger with Coke and Chips",image: "assets/img/BBQMeal.png"},
            {"id":1,"price":"R39.50","name":"Big Mac Meal",description: "Big Mac bugrger with Coke and Chips", image: "assets/img/BigMac.png"},            
          ];
        },
        (err) => {
            // this._errorHelper.handleError(err);
        }
    );
  }

  
  goToOrder() {
    this.navCtrl.push(OrdersPage);
  }
}
