import { Injectable } from "@angular/core";

import { User } from "./user.interface";
import { Router } from "@angular/router";

import * as firebase from "firebase";
import { AngularFire, AuthProviders, AuthMethods } from "angularfire2/angularfire2";

// declare let firebase: any;

@Injectable()
export class AuthService {

  af: AngularFire;

  constructor(private router: Router, af: AngularFire) {
    this.af = af;
  }

  signupUser(user: User) {
    /*
    //firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    this.af.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
      this.router.navigate(['/signin']);
     */
  }

  signinUser(user: User) {
    //firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    this.af.auth.login({email: user.email, password: user.password},{provider: AuthProviders.Password, method: AuthMethods.Password});
    /*
      .catch(function (error) {
        console.log(error);
       });
    */
      this.router.navigate(['/diseaseCase']);
    }

  logout() {
    /*
    //firebase.auth().signOut();
    this.af.auth().signOut();
    this.router.navigate(['/signin']);
    */
  }

  isAuthenticated() {
    /*
    //var user = firebase.auth().currentUser;
    var user = this.af.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }
    */
  }
}
