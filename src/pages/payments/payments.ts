import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html'
})
export class PaymentsPage {
  slides: Object;

  constructor(public navCtrl: NavController) {
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
  }

}