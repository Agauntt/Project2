import { Injectable } from '@angular/core';
import { Messages } from './messages';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ChatrService {

  private getByUsernameUrl: string;
  private loginUrl: string

  constructor(private http:HttpClient) { 
    this.getByUsernameUrl = "http://localhost:5050/search"
    this.loginUrl = "http://localhost:5050/login"
  }

  public findByUsername(username: string){
    return this.http.get<Messages[]>(this.getByUsernameUrl+username);
  }

  public login(user: User){
    return this.http.post<User>(this.loginUrl, user);
  }
}