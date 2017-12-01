
import { Component, Input, OnInit } from '@angular/core';
import { FocusService } from '../../services/focus/focus.service';

@Component({
  selector: 'app-table-element',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.css']
})
export class TableElementComponent implements OnInit {

  @Input() pokemon;

  constructor(private focusService: FocusService) { }

  ngOnInit() {
  }

  select(data){
    this.focusService.elevatePokemonData(data);
  }

}
