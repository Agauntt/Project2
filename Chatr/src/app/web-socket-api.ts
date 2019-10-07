import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { delay } from 'q';


export class WebSocketAPI {
    username: string = localStorage.getItem('username');
    WebSocketEndPoint: string = 'http://localhost:5050/ws'; // might need to remove http b
    topic: string = "/topic/public";
    stompClient: any;
    // chatWindowComponent: ChatWindowComponent;

    constructor(private chatWindowComponent: ChatWindowComponent) { }


    connect(){
        console.log("Initialize WebSocket Connection");
        // pass in username
        let app = new SockJS(this.WebSocketEndPoint);
        this.stompClient = Stomp.over(app);
        const _this = this;
        _this.stompClient.connect({}, this.onConnected(_this), this.errorCallBack) 
    };
    disconnect(){
        if(this.stompClient !== null){
            this.stompClient._disconnect();
        }
        console.log("Disconnected");
    }

    errorCallBack(error){
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            this.connect();
        }, 5000);
    }

     /**
  * Send message to sever via web socket
  * @param {*} message 
  */
 send(message) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(message));
}

onConnected(_this){
    
    delay(1000).then(()=> {
        this.stompClient.subscribe(this.topic, (message)=>{
            console.log("Message Recieved from Server :: " + message);
            this.chatWindowComponent.handleMessage(JSON.parse(message.body))
        });
        console.log("about to send..")
        _this.stompClient.send("/app/chat.addUser",
            {},
            JSON.stringify({sender: this.username, type: 'JOIN'})
        )
        
    }) 
}

onMessageReceived(message) {
    console.log("Message Recieved from Server :: " + message);
    console.log(this);
    // this.chatWindowComponent.handleMessage(JSON.stringify(message.body))
}
}
