import { Component, OnInit } from '@angular/core';
import {Hero} from './../hero';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.css']
})
export class HeroFormTemplateComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  submitted = false;
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  constructor(){

  }

  ngOnInit(): void {
    
  }

  submitForm(formData){
    console.log(formData);
  }

  onSubmit() { 
    this.submitted = true; 
    console.log('new hero was created: ' + this.model);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(42, '', '');
    console.log('form was cleared')
  }

  skyDog(): Hero {
    let myHero = new Hero(42, 'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // // Reveal in html:
  // //   Name via form.controls = {{showFormControls(heroForm)}}
  // showFormControls(form: any) {
  //   return form && form.controls['name'] &&
  //     form.controls['name'].value; // Dr. IQ
  // }

}
