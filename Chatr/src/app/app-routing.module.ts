import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent as LoginUser } from './login/login.component';
import { RegisterComponent as RegUser } from './register/register.component';
import { ChatWindowComponent as HomePage } from './chat-window/chat-window.component'

const routes: Routes = [
  {path:"", component: LoginUser},
  {path:"register", component : RegUser},
  {path:"homePage", component : HomePage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
