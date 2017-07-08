import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { Feeds } from '../../providers/feed';

/**
 * Generated class for the Feed page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class Feed {
  tabs: Tabs;
  constructor(public navCtrl: NavController, public navParams: NavParams, public feedService: Feeds) {
    this.tabs = navCtrl.parent;
  }
  page: number = 0;
  limit: number = 10;
  feeds: any;
  filterFeeds: any;
  // noMoreData: boolean = true;

  ionViewDidLoad() {
    this.feedService.getFeeds().then((data) => {
      this.feeds = data;
      this.doLoad();
    }, err => {
      console.log('error');
    });
  }

  loadMore(infiniteScroll) {
    setTimeout(() => {
      this.doLoad();
      infiniteScroll.complete();
    }, 10);
  }

  doLoad() {
    this.page++;
    let shift = this.page * this.limit;
    if (this.feeds && this.feeds.length >= shift) {
      this.filterFeeds = this.feeds.slice(0, shift <= this.feeds.length ? shift : this.feeds.length);
      // this.noMoreData = shift >= this.feeds.length ? true : false;
    }
  }

  toUserDetails(user: any) {
    if (user) {
      this.feedService.setActiveUser(user);
      console.log(user.login)
      this.tabs.select(1);
    }
  }

}
