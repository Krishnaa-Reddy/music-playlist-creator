import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { spotifyInterceptor } from './interceptors/spotify.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([spotifyInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
