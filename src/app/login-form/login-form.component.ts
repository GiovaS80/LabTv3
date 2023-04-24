import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent 
{

  @Input() loginUser:any = {}

  @Output() transferData = new EventEmitter<any>()

  sendData(form:NgForm)
  {
    this.loginUser=form.value
    this.transferData.emit(this.loginUser)
  }

}//END class LoginFormComponent
