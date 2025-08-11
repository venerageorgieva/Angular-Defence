import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component';
import {ForumPageComponent } from './forum-page/forum-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forum', component: ForumPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

