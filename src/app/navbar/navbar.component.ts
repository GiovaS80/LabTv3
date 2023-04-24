import { Component, SimpleChange } from '@angular/core';
import { LoginService } from '../services/login.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent 
{
  constructor
  (
    private loginService:LoginService
  ){}

  ngOnInit(){}

  ngDoCheck()
  {
    this.isLoggedin=this.loginService.IsLoggedIn()
    if(this.loginService.IsLoggedIn())
    {      
      this.userName=sessionStorage.getItem('firstname')
      this.log='LogOut'
    }
    else
    {
      this.userName='MyAccount'
      this.log='LogIn / Registrazione'
    }
  }//END ngDoCheck

  isLoggedin:boolean=this.loginService.IsLoggedIn()
  isChecked:boolean=false
  userName:string | null=''
  log:string=''
  boo:string='low'

  sideMenu(e:any){this.boo=e?'low':'high'}

}//EMD class NavbarComponent
