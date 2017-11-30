import { Subject } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokeSearchService } from '../../services/poke-search.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit, OnDestroy {


  sub$;
  pokeData;

  targetName = new Subject<any>();

  constructor(private pokeSeartchService: PokeSearchService) { 
    this.pokeSeartchService.debouncePokemons(this.targetName).subscribe(e => {

      this.pokeData = e
    })
  }

  ngOnInit() {
  }

  pokemonSearchRequest(e){
    this.targetName.next(e.target.value);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
