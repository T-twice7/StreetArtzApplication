import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { StreetartzProvider } from '../../providers/streetartz/streetartz';

import { ModalController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { obj } from '../../class';
declare var firebase;




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

  obj = {} as obj;

  email:any;
  password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, private art: StreetartzProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  signup(){
    this.navCtrl.setRoot(SignupPage)
    const modal = this.modalCtrl.create(SignupPage);
    modal.present();
  }
  login(obj:obj) {

    this.art.login(this.obj.email , this.obj.password ).then(()=>{

      alert("sucesss")
    } , (error)=>{
      alert(error)

    })
    
    
      
    
  

}

}