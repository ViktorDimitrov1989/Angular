import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {
  public values: string = '';

  constructor() { }

  ngOnInit() {

  }

  update(value: string){
    this.values = value;
  }

}
