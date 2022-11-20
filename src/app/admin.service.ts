import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  apiurl = "https://localhost:44340/api/Admin/";
  loginadmin(loginInfo:Array<string>)
  {
    return this.http.post
    (
      this.apiurl + "Loginadmin",
      {
        UserName:loginInfo[0],
        Password:loginInfo[1],
      },
      {
        responseType:'text',
      }
    );
  }
  setToken(token:string)
  {
    localStorage.setItem("access_token",token);
  }
  isLoggedin():boolean
  {
    return localStorage.getItem("access_token")?true:false;
  }
  removeToken(){
    localStorage.removeItem("access_token");
  }
}
