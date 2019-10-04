import { Injectable } from '@angular/core';
import { Messages } from './messages';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatrService {

  private getByUsernameUrl: string;

  constructor(private http:HttpClient) { 
    this.getByUsernameUrl = "http://localhost:5005/search"
  }

  public findByUsername(username: string){
    return this.http.get<Messages[]>(this.getByUsernameUrl+username);
  }
}
