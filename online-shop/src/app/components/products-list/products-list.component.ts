import { Product } from '../../models/Product';
import { ProductService } from '../../services/product/product.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  private sub$: Subscription;
  private products: Product[];

  constructor(private productsService: ProductService) {
    this.sub$ = this.productsService.products.subscribe(products => {
      this.products = products;
      console.log(this.products);
    })
  }

  ngOnInit() {
    this.productsService.getProducts();
  }

}
