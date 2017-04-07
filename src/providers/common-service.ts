import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {AlertController, LoadingController, NavController, ToastController} from "ionic-angular";

/*
 Generated class for the CommonService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class CommonService {

  // public message: any;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,) {
    console.log('Hello CommonService Provider');
  }

  //creates simple alert
  createSimpleAlert(title, message) {
    console.log("Hello Simple Alert");
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['OK']
    });
    return alert;
  }

  //creates simple loader
  createSimpleLoader(message, duration) {
    console.log("Hello Simple Loader");
    let loader = this.loadingCtrl.create({
      content: message,
      duration: duration
    });
    return loader;
  }

  //creates simple toast
  createSimpleToast(message, duration) {
    console.log("Hello Simple Toast");
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    return toast;
  }

  createNavAlert(title, message, route) {
    console.log("Hello Nav Alert");
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.navCtrl.push(route);
          }
        }
      ]
    });
    return alert;
  }

}
