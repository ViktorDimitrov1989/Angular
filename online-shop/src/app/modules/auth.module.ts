//Modules
//import { AuthService } from '../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Validators
import { EqualValidator } from '../services/user/equal-validator-directive';

//Components
import { RegisterComponent } from '../components/auth/register/register.component';
import { LoginComponent } from '../components/auth/login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [
        EqualValidator,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ]
})

export class AuthModule { };
