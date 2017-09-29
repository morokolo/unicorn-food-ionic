import { HttpHelper } from './../providers/http-helper';
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

import { Camera, CameraOptions } from '@ionic-native/camera';

import { AuthenticationService } from '../providers/authentication-service';
import { IonicStorageModule } from '@ionic/storage';
import { AppSettings } from '../providers/app-settings';
import { HttpModule } from '@angular/http';

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
    IonicStorageModule.forRoot(),
    HttpModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    AuthenticationService,
    HttpHelper,
    AppSettings
  ]
})
export class AppModule {}
