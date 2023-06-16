import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:User=new User();
  username!: string;
  phone:User["contactNumber"] | undefined;
  email!: string;
  password!: string;
  confirmPassword!: string;
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(private router: Router) { }

  signUp() {
    // Perform signup logic
    // ...

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
