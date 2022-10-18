import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotelpage',
  templateUrl: './hotelpage.component.html',
  styleUrls: ['./hotelpage.component.css']
})
export class HotelpageComponent implements OnInit {

  constructor(private httpclient: HttpClient,private router : Router) { }
  PATH_OF_API = 'http://localhost:8080';

  hotels : any;
  city !: any;
  ngOnInit(): void {
    this.city = JSON.parse(localStorage.getItem('city') || '{}');
    console.log(this.city);
    this.httpclient.get(this.PATH_OF_API + '/cityid/'+ this.city.id +'/hotels').subscribe(
      (response :any) => {
        this.hotels = response;
        console.log("Hotels are");
        console.log(this.hotels);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  OnSelect(hotel : any){
    this.router.navigate(['/roomspage']);
    localStorage.setItem('hotel', JSON.stringify(hotel));
  }

}
