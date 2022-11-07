import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm ! : FormGroup;

  PATH_OF_API = 'http://localhost:8080';

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router,
    ) { }
  
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userName : [''],
      password : ['']
    })
  }
  

  signUp(){
    console.log(this.signUpForm.value);
    //http://localhost:8080/createuser

    this.http.post(this.PATH_OF_API+'/createuser', this.signUpForm.value).subscribe(
      (response :any) => {
        console.log(response);
        alert("Registered");
        this.router.navigate(['/login']);

      },
      (error) => {
        alert("Something went wrong try again \n" + error.error);
        console.log(error.error);
      }
    )   
  }

    
    // this.http.post<any>("localhost:9090/registerNewUser",this.signUpForm.value )
    // this.userService.signUp(this.signUpForm.value)
    // .subscribe(res =>{
    //   if(res==null){
    //     alert("User already exist");
    //   }
    //   alert("SignUp Successfull");
    //   this.signUpForm.reset();
    //   this.router.navigate(['home']);
    // },
    // err =>{
    //   alert("Something Went Wrong");
    //   console.log(this.signUpForm.value);
    //   console.log(err);
    // }
    // )
    
  }


