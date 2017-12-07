import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // private sub$ = new Subscription();
  // private products: Object[];

  constructor(private productService: ProductService) {
    // this.productService.getProducts();
    // this.sub$ = this.productService.products.subscribe(products => {
    //   this.products = products;
    // })

  }

  ngOnInit() {
    
    //console.log(this.products);
  }

}
