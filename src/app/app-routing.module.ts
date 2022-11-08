import { ForbiddenComponent } from './forbidden/forbidden.component';
import { StaffAuthGuard } from './_auth/staff-auth.guard';
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
import { LoginAuthGuard } from './_auth/login-auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'citypage' , component : CitypageComponent,  canActivate:[LoginAuthGuard]},
  {path: 'hotelspage', component : HotelpageComponent, canActivate:[LoginAuthGuard]},
  {path: 'roomspage', component : RoomspageComponent, canActivate:[LoginAuthGuard]},
  {path: 'reservationspage', component : ReservationpageComponent, canActivate:[LoginAuthGuard]},
  {path: 'myreservationspage', component : UserReservationsPageComponent, canActivate:[LoginAuthGuard]},
  {path: 'staffpage', component : StaffPageComponent, canActivate:[LoginAuthGuard, StaffAuthGuard]},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'forbidden', component: ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
