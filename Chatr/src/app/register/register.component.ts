import { Component } from '@angular/core';
import { User } from '../user';
import { ChatrService } from '../chatr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  user:User;

  constructor(private chatrService:ChatrService, private router:Router) {
    this.user = new User;
   }

   registerUser(){
     console.log("registering user --" + this.user.passWord);
     this.chatrService.registerUser(this.user).subscribe(data => {
       if(data != null) {
         this.goToChat()
       }
     })
   }

   goToChat(){
     this.router.navigate(['/home'])
   }
}
