import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Feeds } from '../../providers/feed';
/**
 * Generated class for the User page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class User {
  activeUser: any;
  searchKey: string;
  loading: any;
  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, public navParams: NavParams, public feedService: Feeds, private iab: InAppBrowser) {

  }

  ionViewDidEnter() {
    let user = this.feedService.getActiveUser();
    if (user) {
      this.feedService.setActiveUser(null);
      this.searchKey = user.login;
      this.showLoading();
      this.feedService.getUser(user.login).then(userInfo => {
        this.activeUser = userInfo;
        this.hideLoading();
      }, err => {
        this.activeUser = null;
        console.log(err);
        this.hideLoading();
      })
    } else {
      this.activeUser = null;
      this.searchKey = null;
    }
  }

  doSearch(e) {
    let key = e.target.value;
    console.log(key);
    if (key == '' || key == undefined || key == null) return;
    this.feedService.getUser(key).then(userInfo => {
      this.activeUser = userInfo;
    }, err => {
      this.activeUser = null;
      console.log(err);
    })
  }

  toUrl(url) {
    if (!url) return;
    const browser = this.iab.create(url);
  }

  showLoading() {

    this.loading = this.loadingCtrl.create({
      content: 'hide',
      duration: 5000
    });
    this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss();
  }

}
