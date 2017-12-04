//Modules
import { AuthService } from '../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthService
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ]
})

export class AuthModule { };
