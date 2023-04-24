import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent 
{
  ngOnInit(): void {}

  userName:string=''
  
  sendData(form:NgForm){this.userName=form.value.name}
  
}//END class ContactComponent
