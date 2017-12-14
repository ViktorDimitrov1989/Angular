import { ProductService } from '../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  public term$ = new Subject<string>();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.term$
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(data => {
        this.search(data);
      })
  }

  search(searchStr) {
    this.productService.getProductsByBrand(searchStr);
  }

  ngOnDestroy(): void {
    if(this.term$){
      this.term$.unsubscribe();
    }
  }

}
