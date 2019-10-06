import { Component } from '@angular/core';
import { WebSocketAPI } from '../web-socket-api';


@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  
  user:string;
  webSocketAPI: WebSocketAPI;
  greeting: any;
  message: string;
  name: string;

  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new ChatWindowComponent());
    this.connect();
  }
  connect(){
    this.webSocketAPI.connect();
  }
  disconnect(){
    this.webSocketAPI.disconnect();
  }
  sendMessage(){
    this.webSocketAPI.send(this.name);
  }
  handleMessage(message){
    this.message = message;
  }

}
