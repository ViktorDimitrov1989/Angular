import { Product } from '../../../models/Product';
import { ProductService } from '../../../services/product/product.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products: Product[];
  private sub$: Subscription;

  constructor(private productsService: ProductService) {
    this.sub$ = this.productsService.products.subscribe(products => {
      this.products = products;
    })
  }

  ngOnInit() {
    this.productsService.getProducts();
  }

}
