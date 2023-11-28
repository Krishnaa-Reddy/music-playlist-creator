import { Subject } from 'rxjs/internal/Subject';
import { Injectable, inject } from '@angular/core';
import { Constants } from '../constants/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { delay, map, switchMap, tap } from 'rxjs/operators';
import { Token } from '@angular/compiler';
import { interval, of, timer } from 'rxjs';

export interface AuthResponse {
  access_token : string,
  expires_in : number,
  token_type : string
}

export interface AccessToken {
  token?: string,
  isExpired: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private http = inject(HttpClient);
  
  private readonly headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  private readonly params = new HttpParams()
  .set('grant_type', Constants.grant_type)
  .set('client_id', Constants.client_id)
  .set('client_secret', Constants.client_secret);

  private token$ = this.http.post<AuthResponse>(Constants.auth_url,  this.params, {headers: this.headers});

  refreshTokens$ = timer(0, Constants.call_before_expiry * 1000) // 5mins before expiry
  .pipe(
    switchMap(_ => this.token$),
    tap(response => {
      sessionStorage.setItem('token', response.access_token);
    })
  );

}
