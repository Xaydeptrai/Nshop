import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";


// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit() {

    if (this.loginForm.get('email')?.value === null) {
      alert('Please enter an email');
      return;
    }

    if (!this.loginForm.get('email')?.valid) {
      alert('Please enter a valid email');
      return;
    }

    if (this.loginForm.get('password')?.value === null) {
      alert('Please enter a password');
      return;
    }

    if (this.loginForm.get('password')?.value.length < 8) {
      alert('Password should be at least 8 characters long');
      return;
    } else {
      alert('Login Successful!');

    }
  }
}
