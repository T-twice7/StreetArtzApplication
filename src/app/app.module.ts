import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';


import { SplashPage } from '../pages/splash/splash';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoryPage } from '../pages/category/category';
import { GalleryPage } from '../pages/gallery/gallery';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { SignupPage } from '../pages/signup/signup';
import { ContactModalPage } from '../pages/contact-modal/contact-modal';
import { MainPage } from '../pages/main/main';
import { PortfolioPage } from '../pages/portfolio/portfolio';

@NgModule({
  declarations: [
    MyApp,
    SplashPage,
    ListPage,
    CategoryPage,
    GalleryPage,
    LoginPage,
    ProfilePage,
    SignupPage,
    ContactModalPage,
    MainPage,
    PortfolioPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage,
    ListPage,
    CategoryPage,
    GalleryPage,
    LoginPage,
    ProfilePage,
    SignupPage,
    ContactModalPage,
    MainPage,
    PortfolioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
