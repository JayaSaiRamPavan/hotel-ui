import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userAuthService: UserAuthService,
    private router : Router
    ) { }

  ngOnInit(): void {

  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }
  // navbarfixed:boolean = true;

  logout(){
    this.userAuthService.clear();
    console.log(this.isLoggedIn());
    this.router.navigate(['/login']);
  }


}
