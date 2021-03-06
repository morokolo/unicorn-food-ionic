import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { HelpPage} from '../pages/help/help';
import { UserHistoryPage } from '../pages/user-history/user-history';
import { ResturantsPage} from '../pages/resturants/resturants';
import { SettingsPage} from '../pages/settings/settings';
import { UserRegistrationPage} from '../pages/user-registration/user-registration';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = UserRegistrationPage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Resturants', component: HomePage, icon: 'ios-restaurant' },
      { title: 'Orders', component: SettingsPage, icon: 'ios-settings-outline' },
      { title: 'History', component: UserHistoryPage ,icon: 'ios-clock-outline'},
      { title: 'Help', component: HelpPage, icon: 'ios-help-circle-outline' },
      { title: 'Settings', component: SettingsPage, icon: 'ios-settings-outline' },
      { title: 'Payments', component: SettingsPage, icon: 'ios-settings-outline' },
      { title: 'About', component: AboutPage , icon: 'ios-bookmark-outline'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
