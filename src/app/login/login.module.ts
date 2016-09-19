import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class LoginModule {}