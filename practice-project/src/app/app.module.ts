import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VoterComponent } from './event-emmiter-example/voter/voter.component';
import { VotetakerComponent } from './event-emmiter-example/votetaker/votetaker.component';
import { KeyupComponent } from './template-reference-variable/keyup/keyup.component';
import { HeroFormTemplateComponent } from './forms/hero-form-template/hero-form-template.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {JuriNameValidator} from './forms/shared/name-validator';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    VotetakerComponent,
    KeyupComponent,
    HeroFormTemplateComponent,
    JuriNameValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
