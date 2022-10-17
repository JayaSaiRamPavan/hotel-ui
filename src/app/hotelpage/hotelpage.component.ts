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
  cityid !: any;
  ngOnInit(): void {
    this.cityid = localStorage.getItem('cityid');
    this.httpclient.get(this.PATH_OF_API + '/cityid/'+ this.cityid +'/hotels').subscribe(
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

  OnSelect(hotelid : number){
    this.router.navigate(['/roomspage']);
    localStorage.setItem('hotelid', JSON.stringify(hotelid));
  }

}
