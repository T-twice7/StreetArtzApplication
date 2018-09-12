import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { obj } from '../../class';
import { StreetartzProvider } from '../../providers/streetartz/streetartz';
import { ProfilePage } from '../profile/profile';
import arr from '../../class';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  obj = {} as obj
  arr = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
  profile(obj: obj) {
    this.art.profile(this.obj).then((data) => {
      this.navCtrl.push(ProfilePage, {obj:data});
    })



  }


}
