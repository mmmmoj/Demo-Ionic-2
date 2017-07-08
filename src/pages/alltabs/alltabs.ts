import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Feed } from '../feed/feed';
import { User } from '../user/user';

/**
 * Generated class for the Alltabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alltabs',
  templateUrl: 'alltabs.html',
})
export class Alltabs {
  userParam: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tab1Root = Feed;
  tab2Root = User;

  setUserParam(user) {
    this.userParam = user;
  }

}
