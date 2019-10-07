import { Component, OnInit } from '@angular/core';
import { MessageSpan } from '@angular/compiler/src/i18n/i18n_ast';
import { Messages } from '../messages';
import { ChatrService } from '../chatr.service';
import { Router } from '@angular/router';
import { WebSocketAPI } from '../web-socket-api';
import { ChatWindowComponent } from '../chat-window/chat-window.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  username:string;
  messages:Messages[];
  webSocketAPI: WebSocketAPI;

  constructor(private chatrService: ChatrService, private router: Router) { 
    
  }

  ngOnInit(){
    this.webSocketAPI = new WebSocketAPI(new ChatWindowComponent);
  }

  search() {
    this.chatrService.findByUsername(this.username).subscribe(data=> {
      console.log(data)
      this.messages = data;
    })
  }

  logout = () =>{
    location.href="/";
  }

}
