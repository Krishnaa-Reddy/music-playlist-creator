import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../interfaces/artist';
import { Observable, delay, filter, map, switchMap, timer } from 'rxjs';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private readonly url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]>{
    return this.http.get<Song[]>(`${this.url}/songs`);
  }

  getAlbums(): Observable<Song[]>{
    return this.http.get<Song[]>(`${this.url}/albums`);
  }
  
  artists$ = this.http.get<Artist[]>(this.url + '/artists').pipe(delay(2000));

  delete$ = (id: number) =>
    this.http.delete<Artist>(this.url + '/artists/' + id).pipe(delay(2000));

  update$ = (id: number, artist:Artist) =>
    this.http.put<Artist>(this.url+'/artists/' + id, artist).pipe(delay(2000));





}


