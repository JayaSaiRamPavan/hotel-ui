import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citypage',
  templateUrl: './citypage.component.html',
  styleUrls: ['./citypage.component.css']
})
export class CitypageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  OnSelect(city : any){
    this.router.navigate(['/hotelspage']);
    localStorage.setItem('city', JSON.stringify(city));

  }
  gridColumns = 3;

  cities = [
    {
      id : 1,
      name : 'Hyderabad',
      image : 'https://media.gettyimages.com/photos/the-charminar-built-in-1591-is-a-monument-and-mosque-located-in-the-picture-id1133624817?k=20&m=1133624817&s=612x612&w=0&h=niPmenMKi3CI0wEwdB2YLvbDL-1uqArQHwAgXZLnajA='      
    },
    {
      id : 2,
      name : 'Mumbai',
      image : 'https://media.gettyimages.com/photos/pigeons-india-gate-colaba-mumbai-india-picture-id160438756?k=20&m=160438756&s=612x612&w=0&h=rBmFRHt08So3GLMdYBLDb4SHnKaeuEem-CkvMom64zQ='
    },
    {
      id : 3,
      name : 'Delhi',
      image : 'https://media.gettyimages.com/photos/india-gate-picture-id506812641?k=20&m=506812641&s=612x612&w=0&h=dSSe2x6OsCjrmu9n3Rsds-Tenrx8h3fNSZgt3xLeGR0='
    }
  ]

}
