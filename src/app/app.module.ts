import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {LoginView} from "./views/login/login.view";
import {FronteggAppModule, FronteggComponent} from '@frontegg/angular';
import { ProtectedView } from './views/protected/protected.view.component';
import { NotFoundView } from './views/not-found/not-found.view';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginView,
    ProtectedView,
    NotFoundView,
    UserInfoComponent
  ],
  imports: [
    FronteggAppModule.forRoot(
      {
        contextOptions: {
          baseUrl: 'https://frontegg.box.sk'
        },
      }
    ),
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [FronteggComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
