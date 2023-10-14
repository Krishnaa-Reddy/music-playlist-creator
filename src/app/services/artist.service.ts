import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../interfaces/artist';
import { switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private readonly url = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  artists$ = timer(2000).pipe(
    switchMap(() => {
      return this.http.get<Artist[]>(this.url+'/artists');
    })
  );


}
