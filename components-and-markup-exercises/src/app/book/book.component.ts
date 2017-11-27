import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Object;
  @Output() showHideText = new EventEmitter<boolean>();
  @Output() showHidePicture = new EventEmitter<boolean>();

  hideText = true;
  hidePicture = true;

  constructor() { }

  ngOnInit() {
  }

  manageText(showHide: boolean){
    this.showHideText.emit(showHide);
    this.hideText = showHide;
  }

  managePicture(showHide: boolean){
    this.showHidePicture.emit(showHide);
    this.hidePicture = showHide;
  }

}
