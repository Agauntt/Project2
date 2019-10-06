import { Component } from '@angular/core';
import { WebSocketAPI } from '../web-socket-api';
import { User } from '../user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  
  user:User;
  webSocketAPI: WebSocketAPI;
  greeting: any;
  message: Message;
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
    if(message.type === "JOIN"){
      console.log(message.sender + " joined!")
    }
    console.log(message)
  }
  testFunc(){
    console.log("This is a test")
  }
}
