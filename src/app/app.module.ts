import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

// for angular2 with webpack!
import * as firebase from "firebase";
import { AngularFireModule, AuthProviders, AuthMethods, AngularFire } from 'angularfire2';

import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';

import { AuthGuard } from "./shared/auth.guard";
import { AuthService } from "./shared/auth.service";

import { routing } from "./app.routing";

import { CoreModule } from "./core-module";
import { LoginModule } from "./login/login.module";
import { DiseaseCaseModule } from "./diseaseCase/diseaseCase.module";

import { HeaderComponent } from "./shared/header.component";

const firebaseConfig = {
    apiKey: "AIzaSyDLxXLtFAWXtOrD9mtSmLGb9uWHlOGH9SQ",
    authDomain: "fbe2-3e917.firebaseapp.com",
    databaseURL: "https://fbe2-3e917.firebaseio.com",
    storageBucket: "fbe2-3e917.appspot.com",
    messagingSenderId: "75684927389"
};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        HttpModule,
        routing,
        CoreModule,
        LoginModule,
        DiseaseCaseModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}