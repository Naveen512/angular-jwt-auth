import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthTokenInterceptors } from './interceptors/auth.token.interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule, AppRoutingModule, 
    BrowserAnimationsModule
   ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptors,
      multi: true
    },
    AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
