import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = [{id: 1, name: 'Mr. IQ'}, {id: 2, name: 'Ms. Universe'}, {id: 3, name: 'Bombasto'}];

  constructor() { }

  ngOnInit() {
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
