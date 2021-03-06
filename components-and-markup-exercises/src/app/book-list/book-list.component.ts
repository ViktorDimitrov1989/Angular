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

  removeBookById(id: number) {
    if(this.data.length > 1){
      this.data.splice(id, 1);
    }else{
      this.data.splice(0, 1);
    }
    
  }

}
