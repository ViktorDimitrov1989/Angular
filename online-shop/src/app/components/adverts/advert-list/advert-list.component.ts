import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  @Input() adverts: Object[];

  constructor() { 
    
  }

  ngOnInit() {
  }

}
