import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {VerifyCodePage} from "../verify-code/verify-code";

/*
  Generated class for the VerifyEmail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-verify-email',
  templateUrl: 'verify-email.html'
})
export class VerifyEmailPage {
  authID:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.authID = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyEmailPage');
  }

  goToVerifyCode(){
    this.navCtrl.push(VerifyCodePage, {
      param1: this.authID
    });
  }

}
