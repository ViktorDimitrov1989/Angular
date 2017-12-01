import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class FocusService {

  private pokemonSource = new Subject<any>();

  pokemonRecieved$ = this.pokemonSource.asObservable();

  constructor() { }

  elevatePokemonData(data){
    this.pokemonSource.next(data);
  }

}
