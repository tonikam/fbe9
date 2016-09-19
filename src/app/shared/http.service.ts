import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";

//import * as firebaseX from 'firebase';

@Injectable()
export class HttpService {

  private db: firebase;

  constructor(private http: Http) {
    //this.db = new firebaseX('https://fbe2-3e917.firebaseio.com/data');
    this.db = firebase.database();
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

  getOwnData2() {
    return Observable.range(1,5);
  }

  getOwnData3(): Observable<Post> {
    return Observable.create(observer => {
      let listener = this.db.on('child_added', snapshot => {
        let data = snapshot.val();
        observer.next(new Post(
            snapshot.key(),
            data.title,
            data.description
        ));
      }, observer.error);

      return () => {
        this.db.off('child_added', listener);
      };
    });
  }

  setOwnData2() {
    return Observable;
  }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
