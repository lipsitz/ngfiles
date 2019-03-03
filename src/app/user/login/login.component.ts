import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service'
import {Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName
  password
  mouseoverLogin
  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit() {
  }

login(data){
  console.log(data);
  
this.authService.loginUser(data.userName , data.password)
this.router.navigate(['events'])
}
cancel(){
  this.router.navigate(['events'])
}
}
