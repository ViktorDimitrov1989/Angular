import { ProductService } from '../../services/product/product.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private sub$ = new Subscription();
  private product: Object;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { 
    let id = this.route.snapshot.params.id;
    this.productService.getProductById(id);

    this.sub$ = productService.focusedProduct.subscribe(focusedProd => {
      this.product = focusedProd;
      console.log(this.product);
    })

  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productService.getProductById(id);
  }

}
