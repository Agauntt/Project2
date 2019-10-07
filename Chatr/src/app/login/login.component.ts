import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ChatrService } from '../chatr.service';
import { Router } from '@angular/router';
// import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User;

  constructor(private chatrService:ChatrService, private router:Router) {
    this.user = new User;
   }

   login(){
    this.chatrService.login(this.user).subscribe(data => {
      if(data == null){
        alert("no user found");
      } else{
        localStorage.setItem('username', this.user.chatruser);
      this.goToChat()
      }
    })
   }
   goToChat(){
    this.router.navigate(['/home'])
  }
}
