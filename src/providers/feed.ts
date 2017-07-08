import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the Feed provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Feeds {

  data: Array<any>;
  userUrl = 'https://api.github.com/users';
  limit: number = 10;
  activeUser: any;


  constructor(public http: Http) {
    this.data = null;

  }

  getFeeds() {
    // let reqUrl = this.userUrl + '?page=' + page.toString() + '&per_page=' + this.limit.toString();

    return new Promise((resolve, reject) => {
      if (this.data) {
        return Promise.resolve(this.data);
      }
      this.http.get(this.userUrl)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          reject(err);
        });
    });

  }

  getUser(userName: string) {

    let reqUrl = this.userUrl + '/' + userName;
    return new Promise((resolve, reject) => {
      this.http.get(reqUrl)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
    });
  }

  setActiveUser(user: any) {
    this.activeUser = user;
  }

  getActiveUser() {
    return this.activeUser;
  }


}
