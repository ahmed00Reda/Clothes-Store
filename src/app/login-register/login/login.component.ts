import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup ;
  result!:string;

  constructor(private fb:FormBuilder ,private loginService:LoginService, private router:Router) {
    this.loginForm=fb.group({
      username:['',Validators.required],
      password:['',[Validators.required,Validators.maxLength(8)]]
    })
  }

  ngOnInit(): void {
  }
 onSubmit(){
  console.log(this.loginForm.value)
        if (this.loginForm.valid){
          this.loginService.validateLogin(this.loginForm.value).subscribe((value) => {
            if ( value.username == this.loginForm.value.username
              && value.password == this.loginForm.value.password ) {
              // this.loginService.username$.next(value.username)
              localStorage.setItem('name', value.username)
              this.router.navigate(['../products']).then()
            }
            else { this.result = "Login Failed"; }
          })
  }

 }

}
