import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginUser } from './login/login.component';
import {RegUser} from './register/register.component';

const routes: Routes = [
  {path:"", component: LoginUser},
  {path:"register", component : RegUser}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
