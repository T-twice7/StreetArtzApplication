import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import { obj } from '../../class';
declare var firebase;

/*
  Generated class for the StreetartzProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StreetartzProvider {

  obj = {} as obj;

  constructor(public http: HttpClient) {
    console.log('Hello StreetartzProvider Provider');
  }
  login(email , password){

    //firebase.auth().signInWithEmail()
    return new Promise((resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(email , password).then(()=>{
        
        resolve()
       
      }, Error =>{
        alert(Error)
      
      }) ;
    }
  )
  }
  logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });

  }
  }

