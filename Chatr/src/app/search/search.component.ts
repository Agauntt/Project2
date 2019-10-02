import { Component, OnInit } from '@angular/core';
import { MessageSpan } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username:string;
  messages:Messages[];

  constructor(private chatrService: ChatrService) { 
    
  }

  messagesByUsername() {
    this.chatrService.findByUsername(this.username).subscribe(data=> {
      console.log(data)
      this.messages = data;
    })
  }

}
