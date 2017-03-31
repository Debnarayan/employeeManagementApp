import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//import native properties
//===============================================================
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//import pages
//================================================================
import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import {LoginPage} from "../pages/login/login";
import {VerifyCodePage} from "../pages/verify-code/verify-code";
import {ChangePasswordPage} from "../pages/change-password/change-password";
import {VerifyEmailPage} from "../pages/verify-email/verify-email";

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    VerifyEmailPage,
    VerifyCodePage,
    ChangePasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    VerifyEmailPage,
    VerifyCodePage,
    ChangePasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
