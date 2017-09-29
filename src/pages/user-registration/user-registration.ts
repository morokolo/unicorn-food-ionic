import { AuthenticationService } from './../../providers/authentication-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-user-registration',
  templateUrl: 'user-registration.html'
})
export class UserRegistrationPage {
  private image: any;

  constructor(public navCtrl: NavController, private authService: AuthenticationService, public storage: Storage) {

  }

  

  onSubmit(form: Object) {
    
    this.navCtrl.setRoot(HomePage);

    let user = {
      "user":{
        "first_name":form['value']['firstname'],
        "last_name": form['value']['lastname'],
        "username":form['value']['username'],
        "password":form['value']['password'],
        "email":form['value']['email'],
        "status": true
      },
      "cellphone":form['value']['cell'],
      "user_type":"buyer"
    };
    
    if (form['valid']) {
      this.storage.set('username', user.user.username).then(() => {
          this.authService.create(user)
              .subscribe(
                  (res) => {
                    this.navCtrl.setRoot(HomePage);                 
                  },
                  (err) => {
                    this.navCtrl.setRoot(HomePage);
                  }
              );
      });
      
    }
  }

}
