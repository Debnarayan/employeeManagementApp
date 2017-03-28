import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {ChangePasswordPage} from "../change-password/change-password";

/*
 Generated class for the VerifyCode page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-verify-code',
  templateUrl: 'verify-code.html'
})
export class VerifyCodePage implements OnInit {

  remainingTime: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(): any {
    // this.remainingTime = "01:35";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyCodePage');
  }

  goToLogin(){
  this.navCtrl.push(LoginPage);
}

  goToChangePassword(){
    this.navCtrl.push(ChangePasswordPage);
  }

}
