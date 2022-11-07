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
  room !: any ;
  city !: any;
  hotel !: any;
  reservationDate : string = "";
  user !: any;
  ngOnInit(): void {
    this.reservationDate = JSON.parse(JSON.stringify(localStorage.getItem('reservationDate')));
    this.city = JSON.parse(localStorage.getItem('city') || '{}');
    this.room = JSON.parse(localStorage.getItem('room') || '{}');
    this.hotel = JSON.parse(localStorage.getItem('hotel') || '{}');
    // console.log("Room is");
    console.log(this.room);
    // console.log(this.room.number);
    
    // console.log("And");
    
    this.user = JSON.parse(localStorage.getItem('user') || '{}');    
  }
  reservationDto !: ReservationDto ;
  OnSubmit(){
    console.log(this.reservationDate);
    
    if(this.reservationDate){
      this.reservationDto = new ReservationDto(this.user.id,this.room.id, this.reservationDate);
      console.log(this.reservationDto);
      this.http.post(this.PATH_OF_API+'/reserveroom', this.reservationDto).subscribe(
        (response :any) => {
          alert("Room Reserved");

          this.router.navigate(['/myreservationspage']);
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
