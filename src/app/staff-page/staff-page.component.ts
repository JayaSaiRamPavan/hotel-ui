import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {
  

  constructor(private httpclient: HttpClient) { }
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

  city !: any;
  hotel !:any;
  cityname = '';
  hotelname = '';
  hotels !: any;
  today : string = "";
  maxday : string = "";
  date : string = "";
  reservations : any;
  PATH_OF_API = 'http://localhost:8080';
  ngOnInit(): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var t_mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var l_mm = String(today.getMonth() + 1 +2).padStart(2, '0'); //January is 0!


    this.today= yyyy + '-' + t_mm + '-' + dd;
    this.maxday = yyyy + '-' + l_mm + '-' + dd;
  }

  OnSelectCity(city :any){
    this.city = city;
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

  OnSelectHotel(hotel : any){
    this.hotel = hotel;
    console.log(this.hotel);
  }

  OnSelectedDate(){
    // var theDate = new Date(Date.parse(this.date));
    // const localDate = theDate.toLocaleString().split(" ");
    // var udate =localDate[0]
    // let str = udate.slice(0, -1);
    // var newdate = str.split("/").reverse().join("-");
    // this.date = newdate;
    console.log(this.date);
    this.getReservations();
  }

  //http://localhost:8080/hotel/1/date/2022-10-18/reservations
  getReservations(){
    this.httpclient.get(this.PATH_OF_API +'/hotel/'+ this.hotel.id +'/date/'+this.date+'/reservations').subscribe(
      (response :any) => {
        this.reservations = response;
        console.log("Reservations are");
        console.log(this.reservations);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  doCheckIn(res : any){
    console.log(res);
    this.httpclient.post(this.PATH_OF_API + '/docheckin',res).subscribe(
      (response :any) => {
        console.log(response);
        this.getReservations();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  doCheckOut(res : any){
    console.log(res);
    this.httpclient.post(this.PATH_OF_API + '/docheckout',res).subscribe(
      (response :any) => {
        console.log(response);
        alert("Checked Out Succesfully")
        this.getReservations();
      },
      (error) => {
        console.log(error);
        alert("Not yet Checked In")
        this.getReservations();
      }
    )
  }


}
