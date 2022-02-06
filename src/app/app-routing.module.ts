import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginView} from "./views/login/login.view";
import {FronteggAuthGuard} from "@frontegg/angular";
import {ProtectedView} from "./views/protected/protected.view.component";
import {NotFoundView} from "./views/not-found/not-found.view";

const routes: Routes = [
  { path: '', component: LoginView },
  { path: 'protected', canActivate: [FronteggAuthGuard], component: ProtectedView },
  { path: '**', component: NotFoundView },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
