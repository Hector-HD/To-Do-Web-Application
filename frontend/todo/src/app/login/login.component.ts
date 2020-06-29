import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'hector'
  password= ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  handleLogin(){
    if(this.username === 'hector' && this.password === 'pwd'){
      this.invalidLogin = false
      this.router.navigate(['welcome'])
    }else{
      this.invalidLogin = true
    }
  }
}
