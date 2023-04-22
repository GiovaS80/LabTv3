import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  @Input() regUser:any = { }

  @Output() transferData = new EventEmitter<any>()

  notAlowed:Array<string>=['my-account', 'myaccount', 'my', 'account', 'admin', 'user']

  sendData(form:NgForm)
  {
    if(this.checkFun(form.value.firstname, 'Nome'))
    { 
      if(this.checkFun(form.value.lastname, 'Cognome'))
      {
        this.regUser=form.value
        this.transferData.emit(this.regUser)
      }//END last IF
    }//END first IF
  }//END sendData

  checkFun(testString:string, from:string):boolean
  {
    var sentinel:boolean=true
    this.notAlowed.filter((e:string) => 
    {
      if(testString.toLowerCase().includes(e.toLowerCase()) && sentinel)
      {
        alert(`Non posso accettare ${testString} come Tuo ${from}`)
        sentinel = false
      }
    })
    return sentinel
  }//END checkFun

}//END class RegisterFormComponent
