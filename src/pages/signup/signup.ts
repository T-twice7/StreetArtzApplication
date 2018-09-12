import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StreetartzProvider } from '../../providers/streetartz/streetartz'
import { obj } from '../../class';
import { ToastController } from 'ionic-angular';

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
  signUp(obj: obj) {
  if(this.obj.password != this.obj.confirmPassword) {
      this.presentToast1();
  } else { 
      this.art.register(this.obj);
      console.log(this.obj);
      this.presentToast();
      this.navCtrl.push(LoginPage); 
  }
      
  }
  presentToast() {

    const toast = this.toastCtrl.create({
      message: 'User registered successfully!',
      duration: 3000
    });
    toast.present();
  }
  presentToast1(){
    const toast = this.toastCtrl.create({
      message: 'Password doesnot Match!',
      duration: 3000
    });
    toast.present();
  }
}
