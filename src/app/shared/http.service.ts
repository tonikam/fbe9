import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
//import {AngularFire} from "angularfire2/angularfire2";

// for angular2 with webpack!
/*
import * as firebase from "firebase";
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseListObservable} from "angularfire2";
import {AngularFire} from "angularfire2";
*/

@Injectable()
export class HttpService {

  /*
  items: FirebaseListObservable<any[]>;
  af: AngularFire;
 */

  constructor(private http: Http) { //     , af: AngularFire) {
    //reference to the database
    // this.databaseFb = new Firebase('https://fbe2-3e917.firebaseio.com');

    //this.inhalt = af.database.list('/users');

    /*
    this.af = af;
    this.items = af.database.list('items');
    */

  }

  getData() {
    return this.http.get('https://fbe2-3e917.firebaseio.com/title.json').map((response: Response) => response.json());
  }

  sendData(incident: any) {
    const body = JSON.stringify(incident);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://fbe2-3e917.firebaseio.com/structure1/structure2/data.json', body, {
    //return this.http.put('https://fbe2-3e917.firebaseio.com/structure1/data.json', body, {
    //var test = ["bla","blubb","gaga"];
    //return this.http.put('https://fbe2-3e917.firebaseio.com/structure1/data.json', test, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
		
  }

  getOwnData() {
    return this.http.get('https://fbe2-3e917.firebaseio.com/structure1/structure2/data.json')
      .map((response: Response) => response.json());
  }

  setOwnData2() {
    /*
    let refTestData = this.af.child("testdata");
    refTestData.set({
        user1: {
          name: "bruno",
          book: "kudos"
        },
        user2: {
          name: "ford",
          book: "panic"
        }
    });
    */
    return [{"name": "hugo"}];
  }

  getOwnData2() {
    return this.http.get('https://fbe2-3e917.firebaseio.com/structure1/structure2/data.json')
        .map((response: Response) => response.json());
  }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
