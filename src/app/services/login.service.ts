import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  apiUrl:string='http://localhost:3000'
  reg:string = '/register'
  log:string = '/login'
  get:string = '/users'
  token:string|null = this.IsLoggedIn()?sessionStorage.getItem('accessToken'):''


  gettAllUser(pos:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        {'Authorization': `Bearer ${this.token}`}
        // {'Content-Type':'application/json'}
      )
    }
    return this.http.get(this.apiUrl+this.get+'/'+pos,httpOptions)
  }

  getLogin(user:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        // {'Authorization': `Bearer ${this.token}`}
        {'Content-Type':'application/json'}
      )
    }
    return this.http.post(this.apiUrl+this.log, user, httpOptions)
  }

  registration(user:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        {'Content-Type':'application/json'}
      )
    }
    return this.http.post(this.apiUrl+this.reg, user, httpOptions)
  }

  update(user:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        {'Authorization': `Bearer ${this.token}`}
        // {'Content-Type':'application/json'}
      )
    }
    return this.http.patch(this.apiUrl+this.get+'/1', user, httpOptions)
  }

  IsLoggedIn(){
    return sessionStorage.getItem('accessToken')!=null
  }

}//END class LoginService
