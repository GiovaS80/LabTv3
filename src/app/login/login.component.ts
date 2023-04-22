import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor
  (
    private loginService:LoginService,
    private router:Router
  ){}

  isLoggedin:boolean=this.loginService.IsLoggedIn()
  isLoginVisible:boolean=!this.isLoggedin
  isRegVisible:boolean=false

  msgError:string=''

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

  onReg(){
    this.isLoginVisible=false
    this.isRegVisible=true
  }
  onLogin(){
    this.isLoggedin=false
    this.isLoginVisible=true
    this.isRegVisible=false
  }
  onLogout(){
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('firstname')
    this.onLogin()
  }
  registerUser(user:any){
    this.userReg=user
    this.userReg.idMovie = []
    this.loginService.registration(this.userReg).subscribe(
      {
        next: (res: any) => 
        {
          console.log(res);
          console.log(res.accessToken);
          this.msgError=''
          sessionStorage.setItem('accessToken',res.accessToken)
          sessionStorage.setItem('firstname',res.user.firstname)
          this.router.navigate(['favorite'])
        },
        error: (err: any) => 
        {
          console.log(err);
          console.log(err.message);
          this.msgError=err.message
        },
        // complete: () => console.log('ok')
      }
    )//END subscribe
  }//END registerUser

  login(user:any){
    this.userLogin=user
    this.loginService.getLogin(this.userLogin).subscribe(
      {
        next: (res: any) => 
        {
          console.log(res);
          console.log(res.accessToken);
          this.msgError=''
          sessionStorage.setItem('accessToken',res.accessToken)
          sessionStorage.setItem('firstname',res.user.firstname)
          this.router.navigate(['favorite'])
        },
        error: (err: any) => 
        {
          console.log(err);
          console.log(err.message);
          this.msgError=err.message
        },
        // complete: () => console.log('ok')
      }
    )//END subscribe
  }//END login

  gettAllUser(){
    this.loginService.gettAllUser(1).subscribe(res => {console.log(res);
    })
  }

}//END class LoginComponent
