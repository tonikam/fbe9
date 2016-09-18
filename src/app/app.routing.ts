import { RouterModule, Routes } from "@angular/router";

import { SignupComponent } from "./unprotected/signup.component";
import { SigninComponent } from "./unprotected/signin.component";
import { ProtectedComponent } from "./protected/protected.component";
import { AuthGuard } from "./shared/auth.guard";
import { HomeComponent } from "./home.component";

const APP_ROUTES: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
    {path: '', component: HomeComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
