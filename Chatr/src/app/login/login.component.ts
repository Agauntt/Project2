import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ChatrService } from '../chatr.service';
// import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User;

  constructor(private chatrService:ChatrService) {
    this.user = new User;
   }

   login(){
    this.chatrService.login(this.user).subscribe(data => {
      console.log(data);
    })
   }
}
