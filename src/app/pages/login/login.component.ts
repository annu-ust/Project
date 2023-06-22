import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User=new User();
  email!: User["email"];
  password!: User["password"];
 

  constructor(private router: Router) { }
 
  login() {
    
    this.router.navigate(['/userhome']);
   
  }
    navigateToReset() {
      this.router.navigateByUrl('/reset-password');
    }
 
  
}
