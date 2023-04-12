import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ngOnInit(): void {}

  areTheDataCorrect:boolean=false
  userName:string=''
  sendData(form:NgForm){
    console.log(form.value)
    console.log(form.value.name)
    this.userName=form.value.name
    this.areTheDataCorrect=true
  }

  test(value:any){
    // console.log(value)
  }
  
}//END class ContactComponent
