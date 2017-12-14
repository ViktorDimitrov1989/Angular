import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  @Input() advert: Object;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewAdvertProduct(){
    this.router.navigateByUrl(`products/${this.advert['product_id']}`);
  }

}
