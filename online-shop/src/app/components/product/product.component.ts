import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { 
  }

  ngOnInit() {
  }

  viewDetails(productId){
    this.router.navigateByUrl(`products/${productId}`);
  }

}
