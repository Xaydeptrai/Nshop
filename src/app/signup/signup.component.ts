import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  // @ts-ignore
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirm-password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'terms': new FormControl(false, Validators.requiredTrue)
    });
  }

  onSubmit() {

    if(this.signupForm.get('email')?.value === null){
      alert('Please enter an email');
      return;
    }

    if(!this.signupForm.get('email')?.valid){
      alert('Please enter a valid email');
      return;
    }

    if (this.signupForm.get('password')?.value === null){
      alert('Please enter a password');
      return;
    }

    if (this.signupForm.get('password')?.value.length < 8){
      alert('Password should be at least 8 characters long');
      return;
    }

    if(this.signupForm.get('confirm-password')?.value === null){
      alert('Please confirm your password');
      return;
    }
    if(this.signupForm.get('password')?.value !== this.signupForm.get('confirm-password')?.value){
      alert('Passwords do not match');
      return;
    }
    if(this.signupForm.get('terms')?.value === false){
      alert('Please agree to the terms and conditions');
      return;
    }

    else {
      alert('Signup successful');
    }
  }
}
