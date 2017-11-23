import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VoterComponent } from './event-emmiter-example/voter/voter.component';
import { VotetakerComponent } from './event-emmiter-example/votetaker/votetaker.component';
import { KeyupComponent } from './template-reference-variable/keyup/keyup.component';


@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    VotetakerComponent,
    KeyupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
