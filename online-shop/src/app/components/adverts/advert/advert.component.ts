import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  @Input() advert: Object;

  constructor() { }

  ngOnInit() {
  }

  viewAdvertProduct(){
    //get productId as param and view product
  }

}
