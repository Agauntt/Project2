import { Component } from '@angular/core';
import { WebSocketAPI } from '../web-socket-api';
import { User } from '../user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Messages } from '../messages';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  username: string = localStorage.getItem('username');
  user: User;
  webSocketAPI: WebSocketAPI;
  greeting: any;
  message: Message;
  name: string;
  payload: Messages;
  // chatPage: any = document.getElementById("post-box");

  constructor() {
    this.payload = new Messages()
  }

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
    this.payload.sender = this.username;
    this.payload.type = 'CHAT';
    console.log(this.payload);
    this.webSocketAPI.send(this.payload);
  }
  handleMessage(message){
    let messageElement = document.createElement('ul');
    let messageArea = document.getElementById("messageArea");
    this.message = message;
    if(message.type === "JOIN"){
      console.log(message.sender + " joined!")
      messageElement.classList.add('event-message');
      message.message = message.sender + " joined!"
    } else if (message.type === 'LEAVE') {
      messageElement.classList.add('event-message');
      message.message = message.sender + ' left!';
    } else {
      messageElement.classList.add('chat-message');

      var avatarElement = document.createElement('i');
      // var avatarText = document.createTextNode(message.sender[0]);
      // avatarElement.appendChild(avatarText);
      // avatarElement.style['background-color'] = getAvatarColor(message.sender);

      messageElement.appendChild(avatarElement);

      var usernameElement = document.createElement('span');
      var usernameText = document.createTextNode(message.sender);
      usernameElement.appendChild(usernameText);
      messageElement.appendChild(usernameElement);
  }

  var textElement = document.createElement('p');
  var messageText = document.createTextNode(message.message);
  textElement.appendChild(messageText);

  messageElement.appendChild(textElement);

  messageArea.appendChild(messageElement);
  messageArea.scrollTop = messageArea.scrollHeight;
  }
  testFunc(){
    console.log("This is a test")
  }
}
