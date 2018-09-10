
import { Injectable } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import { obj } from '../../class';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
declare var firebase;
@Injectable()
export class StreetartzProvider {
  obj = {} as obj;

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello StreetartzProvider Provider');
  }

  presentToast1() {
    const toast = this.toastCtrl.create({
      message: 'email or password doesnot match!',
      duration: 3000
    });
    toast.present();
  }
  register(obj: obj) {
    return firebase.auth().createUserWithEmailAndPassword(obj.email,obj.password).then((newUser) => {
      firebase.auth().signInWithEmailAndPassword(obj.email,obj.password).then((authenticatedUser) => {
        var user = firebase.auth().currentUser
        firebase.database().ref("profiles/" + user.uid).set(obj);
        // this.navCtrl.setRoot(MainPage);
      }).catch((error) => {
        const alert = this.alertCtrl.create({
          title: error.code,
          subTitle: error.message,
          buttons: [
            {
              text: 'ok',
              handler: data => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        alert.present();
        console.log(error);

      })
    })

  }
 login(email , password){
    return new Promise((resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(email , password).then(()=>{
        resolve()
      }, Error =>{
        alert(Error)
 
      }) ;
    })
  }
}