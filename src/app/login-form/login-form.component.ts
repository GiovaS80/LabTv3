import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Log } from '../models/user-interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent 
{

  @Input() loginUser:Log = {
    email: '',
    password: ''
  }

  @Output() transferData = new EventEmitter<Log>()

  sendData(form:NgForm)
  {
    this.loginUser=form.value
    this.transferData.emit(this.loginUser)
  }

}//END class LoginFormComponent
