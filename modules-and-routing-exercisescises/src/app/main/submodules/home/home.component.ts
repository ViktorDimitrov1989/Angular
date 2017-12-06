import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'softuni-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectTeam(e){
    console.log('here')
    
    localStorage.setItem('token', e.target.innerHTML.toLowerCase());
    this.router.navigateByUrl('/attack');
    
  }

}
