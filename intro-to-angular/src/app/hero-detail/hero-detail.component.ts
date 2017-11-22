import { Component, OnInit, Input } from '@angular/core';
import {Hero} from './../models/Hero';
import {HeroService} from './../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroservice: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroservice.getHero(id)
    .subscribe(hero => this.hero = hero); 
  }

  goBack(): void{
    this.location.back();
  }

}
