import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  user !: any;
  
  public getUser(): string {
    return JSON.stringify(localStorage.getItem('user'));
  }

  public clear() {
    localStorage.clear();
  }

  public  isLoggedIn() : string {
    return this.getUser();
  }

  public isStaff() : boolean{
    this.user = JSON.parse(localStorage.getItem('user') || '{}'); 
    if(this.user.userName === "Staff"){
      return true;
    }
    else{
      return false;
    }
  }
}
