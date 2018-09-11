import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { StreetartzProvider } from '../../providers/streetartz/streetartz';
import { ModalController,ViewController } from 'ionic-angular';
import { obj } from '../../class';
import { LoadingController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  obj = {} as obj
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public viewCtrl: ViewController,public art: StreetartzProvider,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup(){
    this.navCtrl.setRoot(SignupPage)
    const modal = this.modalCtrl.create(SignupPage);
    modal.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  login(obj:obj) {
    this.art.login(this.obj.email,this.obj.password ).then(()=>{
     this.presentLoading();
     this.navCtrl.setRoot(CategoryPage);
    } , (error)=>{
      alert(error)
    })
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "signing in....",
      duration: 3000
    });
    loader.present();
  }
}
