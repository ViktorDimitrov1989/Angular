import { FocusService } from '../../services/focus/focus.service';
import { Component, OnInit } from '@angular/core';
import { PokeSearchService } from '../../services/poke-search.service';


@Component({
  selector: 'app-focused',
  templateUrl: './focused.component.html',
  styleUrls: ['./focused.component.css']
})
export class FocusedComponent implements OnInit {

  public pokemonId: number;
  public pokemonImage: string;
  public pokemonName: string;

  constructor(
    private focusService: FocusService,
    private pokeSearchService: PokeSearchService
  ) {
    this.focusService.pokemonRecieved$.subscribe(data => {
      let pokemonId: number = data.id;

      this.pokeSearchService.getFocusedPokemon(pokemonId).subscribe(data => {
        console.log(data)
        this.pokemonId = data['data']['id'];
        //TODO img?
        this.pokemonImage = data.img;
        this.pokemonName = data['data']['ename'];
      })

      
    })
  }

  ngOnInit() {
  }

}
