import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reservations-page',
  templateUrl: './user-reservations-page.component.html',
  styleUrls: ['./user-reservations-page.component.css']
})
export class UserReservationsPageComponent implements OnInit {

  constructor(private httpclient: HttpClient, private router : Router) { }

  PATH_OF_API = 'http://localhost:8080';
  userReservations : any;
  user !: any;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    this.getReservations();
  }

  getReservations(){      
    this.httpclient.get(this.PATH_OF_API + '/userid/'+ this.user.id+'/reservations').subscribe(
      (response :any) => {
        this.userReservations = response;
        console.log("Reservations are");
        console.log(this.userReservations);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  cancelReservation(res : any){
      console.log(res);
      this.httpclient.post(this.PATH_OF_API + '/cancelReservation',res).subscribe(
        (response :any) => {
          console.log(response);
          alert("Cancelled Succesfully");
          this.getReservations();
          // window.location.reload();
          // alert("Reservation Cancelled");
        },
        (error) => {
          console.log(error);
          this.getReservations();
          // window.location.reload();
          // alert("Reservation Cancelled");
        }
      )
  }

}
