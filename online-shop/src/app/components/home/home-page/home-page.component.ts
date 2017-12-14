import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AdvertService } from '../../../services/advert/advert.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  private sub$ = new Subscription();
  private adverts: Object[];

  constructor(private advertService: AdvertService) {
    this.sub$ = this.advertService.adverts.subscribe(adverts => {
      this.adverts = adverts;
    })

    this.advertService.getAdverts();
  }

  ngOnDestroy(): void {
    if(this.sub$){
      this.sub$.unsubscribe();
    }
  }

  ngOnInit() {
    
  }

}
