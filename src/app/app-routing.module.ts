import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginView} from "./views/login/login.view";

const routes: Routes = [
  { path: 'login', component: LoginView }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
