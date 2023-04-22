import { Component, SimpleChange } from '@angular/core';
import { LoginService } from '../services/login.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor
  (
    private loginService:LoginService
  ){}

  ngOnInit(){}

  // ngOnChanges(){
  //   console.log("CHANGES")
  // }
  ngDoCheck()
  {
    this.isLoggedin=this.loginService.IsLoggedIn()
    if(this.loginService.IsLoggedIn())
    {      
      this.userName=sessionStorage.getItem('firstname')
    }
    else
    {
      this.userName='MyAccount'
    }
  }//END ngDoCheck

  isLoggedin:boolean=this.loginService.IsLoggedIn()

  userName:string | null=''

}//EMD class NavbarComponent
