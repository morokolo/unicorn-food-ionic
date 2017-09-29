import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { HelpPage} from '../pages/help/help';
import { UserHistoryPage } from '../pages/user-history/user-history';
import { ResturantsPage} from '../pages/resturants/resturants';
import { SettingsPage} from '../pages/settings/settings';
import { ListPage } from '../pages/list/list';
import { MenusPage} from '../pages/menus/menus';
import {OrdersPage} from '../pages/orders/orders';
import { UserRegistrationPage} from '../pages/user-registration/user-registration';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    HelpPage,
    UserHistoryPage,
    ResturantsPage,
    SettingsPage,
    UserRegistrationPage,
    MenusPage,
    ListPage,
    OrdersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    HelpPage,
    UserHistoryPage,
    ResturantsPage,
    SettingsPage,
    UserRegistrationPage,
    ListPage,
    MenusPage,
    OrdersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
