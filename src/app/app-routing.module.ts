import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { UserReservationsPageComponent } from './user-reservations-page/user-reservations-page.component';
import { HotelpageComponent } from './hotelpage/hotelpage.component';

import { RoomspageComponent } from './roomspage/roomspage.component';

import { CitypageComponent } from './citypage/citypage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationpageComponent } from './reservationpage/reservationpage.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'citypage' , component : CitypageComponent},
  {path: 'hotelspage', component : HotelpageComponent},
  {path: 'roomspage', component : RoomspageComponent},
  {path: 'reservationspage', component : ReservationpageComponent},
  {path: 'myreservationspage', component : UserReservationsPageComponent},
  {path: 'staffpage', component : StaffPageComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
