import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes=[
  {path: 'search', component: SearchComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // NoopAnimationsModule,
    // MatFormFieldModule,
    // MatInputModule,
    FormsModule,
    // ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
