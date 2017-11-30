import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Object;
  @Output() removeBookById : EventEmitter<number> = new EventEmitter();


  public isTextHidden: boolean;
  public isPictureHiden: boolean;

  constructor() { }

  ngOnInit() {
    this.isTextHidden = true;
    this.isPictureHiden = true;
  }

  //emit event when delete book from the list

  manageText(){
    //this.showHideText.emit(showHide);
    this.isTextHidden = !this.isTextHidden;
  }

  managePicture(){
    //this.showHidePicture.emit(showHide);
    this.isPictureHiden = !this.isPictureHiden;
  }

  removeBook(id: number){
    //console.log(id);
    this.removeBookById.emit(id);
  }

}
