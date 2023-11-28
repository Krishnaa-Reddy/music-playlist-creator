import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Constants } from '../constants/common';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private http = inject(HttpClient);
  
  searchArtists$ = this.http.get<any>('https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb');

}
