import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  PATH_OF_API = 'http://localhost:8080';
  constructor(
    private http : HttpClient, 
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {

    console.log(loginForm.value);

    //http://localhost:8080/verifyuser
    this.http.post(this.PATH_OF_API+'/verifyuser', loginForm.value).subscribe(
      (response :any) => {
        console.log(response);
        alert("Login Successful");
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/citypage']);
        

      },
      (error) => {
        alert("Authentication Failed Check your Username and Password \n");
      }
    )   
    
    // this.userService.login(loginForm.value).subscribe(
    //   (response: any) => {
    //     this.userAuthService.setRoles(response.user.role);
    //     this.userAuthService.setToken(response.jwtToken);

    //     const role = response.user.role[0].roleName;
    //     if (role === 'Admin') {
    //       this.router.navigate(['/admin']);
    //     } else {
    //       this.router.navigate(['/user']);
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

}
