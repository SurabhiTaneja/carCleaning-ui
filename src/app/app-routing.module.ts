import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/index';
import { RegisterLoginFormComponent } from './register-login-form/index';
import { RegisterComponent } from './register/index';
//import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: RegisterLoginFormComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule = RouterModule.forRoot(appRoutes);


//export class AppRoutingModule { }
