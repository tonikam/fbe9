import { RouterModule, Routes } from "@angular/router";

import { SignupComponent } from "./login/signup.component";
import { SigninComponent } from "./login/signin.component";
import { DiseaseCaseComponent } from "./diseaseCase/diseaseCase.component";
import { AuthGuard } from "./shared/auth.guard";
import { HomeComponent } from "./home.component";

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'diseaseCase', component: DiseaseCaseComponent, canActivate: [AuthGuard]},
    {path: '', component: HomeComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
