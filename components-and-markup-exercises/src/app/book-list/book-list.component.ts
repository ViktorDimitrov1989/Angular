import { Component, OnInit } from '@angular/core';
import { books } from './../data/seed';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  data: Object[];

  constructor() { }

  ngOnInit() {
    this.data = books;
  }

  showHideText(showHideText: boolean): void {
    console.log(showHideText);
  }

  showHidePicture(showHidePicture: boolean): void {
    console.log(showHidePicture);
  }
}
