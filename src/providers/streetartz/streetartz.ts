import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import {obj} from '../../class';
import { ToastController } from 'ionic-angular'

declare var firebase;

/*
  Generated class for the StreetartzProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StreetartzProvider {

obj = {} as obj

  constructor(public http: HttpClient, public toastCtrl: ToastController) {
    console.log('Hello StreetartzProvider Provider');
  }
  // login(){
//
// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });


  // register(obj: obj) {
  //   if (obj.password != obj.confirmPassword) {
  //     this.presentToast1();
  //   }
  //     return firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password); 
 

  // }
  presentToast1() {
    const toast = this.toastCtrl.create({
      message: 'email or password doesnot match!',
      duration: 3000
    });
    toast.present();
  }
  register(obj: obj) {
    if ( obj.password != obj.confirmPassword) {
      // this.messege = 'email or password doesnot match!';
      this.presentToast1();
    } else {
 
      return firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password).then((newUser) => {
        firebase.auth().signInWithEmailAndPassword(obj.email,obj.password).then((authenticatedUser) => {
          var user = firebase.auth().currentUser
          firebase.database().ref("profiles/" + user.uid).set(obj);
          // this.navCtrl.setRoot(MainPage);
 
      })
 
    })
    }
 
  } 
}
