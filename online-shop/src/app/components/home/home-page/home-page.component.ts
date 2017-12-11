import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private sub$ = new Subscription();
  private adverts: Object[];

  constructor(private productService: ProductService) {
    this.sub$ = this.productService.adverts.subscribe(adverts => {
      this.adverts = adverts;
    })

    this.productService.getAdverts();
  }

  ngOnInit() {
    
  }

}
