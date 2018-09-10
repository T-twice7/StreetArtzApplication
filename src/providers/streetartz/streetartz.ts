
import { Injectable } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import { obj } from '../../class';
import { ToastController } from 'ionic-angular';

declare var firebase;
@Injectable()
export class StreetartzProvider {
  obj = {} as obj

  constructor(public toastCtrl: ToastController) {
    console.log('Hello StreetartzProvider Provider');
  }


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
