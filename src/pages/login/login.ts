import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {VerifyEmailPage} from "../verify-email/verify-email";
import {CommonService} from "../../providers/common-service";
import {DashboardPage} from "../dashboard/dashboard";

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [CommonService]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private common: CommonService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    this.common.createNavAlert('Success', 'Congratulation !! You have successfully login to your account', DashboardPage).present();
  }

  forgotKey() {
    this.navCtrl.push(VerifyEmailPage);
  }

}
