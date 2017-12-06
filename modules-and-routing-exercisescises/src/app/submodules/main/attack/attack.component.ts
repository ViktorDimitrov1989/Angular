import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'softuni-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css']
})
export class AttackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  attackTeam(e){
    let target = e.target.innerHTML.toLowerCase();
    this.router.navigateByUrl(`${target}`)
  }


  logout(): void{
    localStorage.clear();
    this.router.navigateByUrl('');
  }

}
