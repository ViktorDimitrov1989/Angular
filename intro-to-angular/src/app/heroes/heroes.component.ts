import { Component, OnInit } from '@angular/core';
import {Hero} from './../models/Hero';
import {HeroService} from './../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  private heroService: HeroService;

  constructor(heroServise: HeroService) {
    this.heroService = heroServise; 
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
