import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roomspage',
  templateUrl: './roomspage.component.html',
  styleUrls: ['./roomspage.component.css']
})
export class RoomspageComponent implements OnInit {
  PATH_OF_API = 'http://localhost:8080';
  constructor(private httpclient: HttpClient,private router : Router) { }

  rooms : any;
  hotelid : any;
  date : string = "";
  today : string = "";
  maxday : string = "";
  ngOnInit(): void {
    this.hotelid = localStorage.getItem('hotelid');
    this.OnToday();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var t_mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var l_mm = String(today.getMonth() + 1 +2).padStart(2, '0'); //January is 0!


    this.today= yyyy + '-' + t_mm + '-' + dd;
    this.maxday = yyyy + '-' + l_mm + '-' + dd;
  }

  OnSelect(roomid : number){
    this.router.navigate(['/reservationspage']);
    localStorage.setItem('reservationDate', this.date);
    localStorage.setItem('roomid', JSON.stringify(roomid));
  }

  OnToday(){
    // let today = new Date().toLocaleDateString();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.date= yyyy + '-' + mm + '-' + dd;
    this.getRooms();
  }

  OnTomorrow(){
    var today = new Date();
    var dd = String(today.getDate()+1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.date= yyyy + '-' + mm + '-' + dd;
    this.getRooms();
    
  }

  OnSelectedDate(){
    var theDate = new Date(Date.parse(this.date));
    const localDate = theDate.toLocaleString().split(" ");
    var udate =localDate[0]
    let str = udate.slice(0, -1);
    var newdate = str.split("/").reverse().join("-");
    this.date = newdate;
    this.getRooms();
  }

  doEmpty(){
    this.rooms = null;
  }

  getRooms(){
    //http://localhost:8080/hotel/1/date/2022-08-03/freerooms
    this.httpclient.get(this.PATH_OF_API +'/hotel/'+ this.hotelid +'/date/'+this.date+'/freerooms').subscribe(
      (response :any) => {
        this.rooms = response;
        console.log("Rooms are");
        console.log(this.rooms);
      },
      (error) => {
        console.log(error);
      }
    )

  }

}
