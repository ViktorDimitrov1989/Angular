
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-element',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.css']
})
export class TableElementComponent implements OnInit {

  @Input() pokemon;

  constructor() { }

  ngOnInit() {
  }

}
