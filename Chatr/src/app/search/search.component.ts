import { Component, OnInit } from '@angular/core';
import { MessageSpan } from '@angular/compiler/src/i18n/i18n_ast';
import { Messages } from '../messages';
import { ChatrService } from '../chatr.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  username:string;
  messages:Messages[];

  constructor(private chatrService: ChatrService) { 
    
  }

  search() {
    this.chatrService.findByUsername(this.username).subscribe(data=> {
      console.log(data)
      this.messages = data;
    })
  }

}
