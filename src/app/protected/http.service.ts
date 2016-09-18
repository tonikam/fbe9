import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
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

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
