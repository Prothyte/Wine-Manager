import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
hide: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  signupForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })


  onSignUp() {
    if (!this.signupForm.valid) {
      return;
    }
    console.log(this.signupForm.value);
  }

}