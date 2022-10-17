import { ReservationDto } from './../models/ReservationDto';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservationspage',
  templateUrl: './reservationpage.component.html',
  styleUrls: ['./reservationpage.component.css']
})
export class ReservationpageComponent implements OnInit {
  PATH_OF_API = 'http://localhost:8080';
  constructor( private http : HttpClient, private router : Router) { }
  roomid !: number ;
  userid !: number ;
  cityid !:number;
  reservationDate : string = "";
  ngOnInit(): void {
    this.reservationDate = JSON.parse(JSON.stringify(localStorage.getItem('reservationDate')));
    this.cityid =JSON.parse(JSON.stringify(localStorage.getItem('cityid')));
    this.roomid = JSON.parse(JSON.stringify(localStorage.getItem('roomid')));
    this.userid = 1;
  }
  reservationDto !: ReservationDto ;
  OnSubmit(){
    console.log(this.reservationDate);
    
    if(this.reservationDate){
      this.reservationDto = new ReservationDto(this.userid,this.roomid, this.reservationDate);
      console.log(this.reservationDto);
      this.http.post(this.PATH_OF_API+'/reserveroom', this.reservationDto).subscribe(
        (response :any) => {
          alert("Room Reserved");
          this.router.navigate(['/citypage']);
        },
        (error) => {
          alert("Something went wrong try again \n" + error.error);
          console.log(error.error);
        }
      )   
    }
    else{
      alert("select date");
    }
    
  }
}
