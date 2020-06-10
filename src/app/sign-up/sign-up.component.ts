import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
  
import { ConfirmedValidator } from '../confirmedvalidator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

   form: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) {
  
    this.form = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })
  }
    
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }

}