import { Component } from '@angular/core';
import { User } from '../user';
import { ChatrService } from '../chatr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  user:User;

  constructor(private chatrService:ChatrService) {
    this.user = new User;
   }

   
}
