import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StreetartzProvider } from '../../providers/streetartz/streetartz'
import { obj } from '../../class';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

 

  obj = {} as obj;
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  // signUp(obj:obj) {
  
  //   this.art.register(this.obj).then((data) => {
  //     console.log(data);
  //     this.presentToast();


  //   }).catch((error) => {
  //     const alert = this.alertCtrl.create({
  //       title: error.code,
  //       subTitle: error.message,
  //       buttons: [
  //         {
  //           text: 'ok',
  //           handler: data => {
  //             console.log('Cancel clicked');
  //           }
  //         }
  //       ]
  //     });
  //     alert.present();
  //     console.log(error);
  //   })
  
  // }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'User registered successfully!',
      duration: 3000
    });
    toast.present();
  }

}
