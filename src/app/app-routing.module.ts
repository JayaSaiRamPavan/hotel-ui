import { UserReservationsPageComponent } from './user-reservations-page/user-reservations-page.component';
import { HotelpageComponent } from './hotelpage/hotelpage.component';

import { RoomspageComponent } from './roomspage/roomspage.component';

import { CitypageComponent } from './citypage/citypage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationpageComponent } from './reservationpage/reservationpage.component';

const routes: Routes = [
  {path: '', component: CitypageComponent},
  {path: 'citypage' , component : CitypageComponent},
  {path: 'hotelspage', component : HotelpageComponent},
  {path: 'roomspage', component : RoomspageComponent},
  {path: 'reservationspage', component : ReservationpageComponent},
  {path: 'myreservationspage', component : UserReservationsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
