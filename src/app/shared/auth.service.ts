import { Injectable } from "@angular/core";

import { User } from "./user.interface";
import { Router } from "@angular/router";

declare let firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
      this.router.navigate(['/signin']);
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
       });
      this.router.navigate(['/diseaseCase']);
    }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
