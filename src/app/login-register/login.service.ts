import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPayload } from './login-payload';


export const data:LoginPayload = {
  username:"ahmed",
  password:"1234"
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }
  validateLogin(request: LoginPayload){
    return this.http.get<LoginPayload>("assets/data/db.json");
  }
}
