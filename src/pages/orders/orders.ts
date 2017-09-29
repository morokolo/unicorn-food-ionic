import { AuthenticationService } from './../../providers/authentication-service';
import { SettingsPage } from './../settings/settings';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})

export class OrdersPage {
  orders: Object = [];
  constructor(
      public navCtrl: NavController,
      private camera: Camera,
      private nav: Nav,
      private authService:AuthenticationService 
    ) {

      this.orders = [
        {"id":1,"price":"R56.50","name":"BBQ Meal", description: "BBQ burger with Coke and Chips",image: "../../assets/img/BBQMeal.png"}            
      ];

  }

  goToResturant() {
    this.nav.setRoot(HomePage);
  }

  makePayments() {
    

    let data = {
      'page': 'ordering'
    }
    this.authService.getRestuarants(data)
    .subscribe(
        (res) => {
          this.navCtrl.push(SettingsPage);      
        },
        (err) => {
            // this._errorHelper.handleError(err);
        }
    );
    // let options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
    //   cameraDirection : 1,
    // }

    // this.camera.getPicture(options).then((imageData) => {
    //   // imageData is either a base64 encoded string or a file URI
    //   // If it's base64:
    //   let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //   // Handle error
    // });
  }

}
