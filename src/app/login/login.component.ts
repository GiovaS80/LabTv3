import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  constructor
  (
    private loginService:LoginService,
    private apiService:ApiService,
    private router:Router
  ){}

  isLoggedin:boolean=this.loginService.IsLoggedIn()
  isLoginVisible:boolean=!this.isLoggedin
  isRegVisible:boolean=false
  didTheDataArrive: boolean = true

  errorMsg:string=''

  userReg:any = 
  {
    email:'',
    password:'',
    firstname:'',
    lastname:'',
    idMovie: []
  }
  userLogin:any =  
  { 
    email:'',
    password:''
  }

  onReg()
  {
    this.isLoginVisible=false
    this.isRegVisible=true
  }

  onLogin()
  {
    this.isLoggedin=false
    this.isLoginVisible=true
    this.isRegVisible=false
  }

  onLogout()
  {
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('firstname')
    // this.apiService.favoriteMovie=[]
    this.onLogin()
  }

  registerUser(user:any)
  {
    this.didTheDataArrive = false
    this.userReg=user
    this.userReg.idMovie = []
    this.loginService.registration(this.userReg).subscribe
    (
      {
        next: (res: any) => this.successLog(res),
        error: (err: any) => this.errorInResponse(err),
        complete: () => this.didTheDataArrive = true
      }
    )//END subscribe
  }//END registerUser

  login(user:any){
    this.didTheDataArrive = false
    this.userLogin=user
    this.loginService.getLogin(this.userLogin).subscribe
    (
      {
        next: (res: any) => this.successLog(res),
        error: (err: any) => this.errorInResponse(err),
        complete: () => this.didTheDataArrive = true
      }
    )//END subscribe
  }//END login

  successLog(res:any)
  {
    this.errorMsg=''
    sessionStorage.setItem('accessToken',res.accessToken)
    sessionStorage.setItem('firstname',res.user.firstname)
    this.router.navigate(['favorite'])
  }

  errorInResponse(err:any)
  {
    switch(err.error)
    {
      case "Cannot find user":
      {
        this.errorMsg='Email Errata o Utente Non Registrato'
        break; 
      }
      case "Incorrect password":
      {
        this.errorMsg='Password Errata'
        break; 
      }
      case "Email already exist":
      {
        this.errorMsg='Utente Gia Registrato'
        break; 
      }
      default:
      {
        this.errorMsg = 'Problema Tecnico \n' + err.name + '\n' + err.message
      }
    }//END switch
    this.didTheDataArrive = true
    console.error(err);
  }//END errorInResponse

  gettAllUser(){
    this.loginService.gettAllUser(1).subscribe(res => {console.log(res);
    })
  }

}//END class LoginComponent
