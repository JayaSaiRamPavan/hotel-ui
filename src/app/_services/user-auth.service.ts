import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  
  public getUser(): string {
    return JSON.stringify(localStorage.getItem('user'));
  }

  public clear() {
    localStorage.clear();
  }

  public  isLoggedIn() : string {
    return this.getUser();
  }
}
