import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';

import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


const baseUrl = 'http://localhost:5000';

@Injectable()
export class PokeSearchService {

  pokemonById$ = new Observable<any>();

  constructor(private http: HttpClient) { }

  debouncePokemons(e){
    return e.debounceTime(400)
    .distinctUntilChanged()
    .switchMap(x => this.getPokemons(x))
  }

  getPokemons(payload) {
    return this.http.get(`${baseUrl}/pokedex?pokename=${payload}`)
  }
  
  getFocusedPokemon(pokemonId){
    return this.pokemonById$ = this.http.get(`${baseUrl}/pokemon?pokemonId=${pokemonId}`);
  }

}
