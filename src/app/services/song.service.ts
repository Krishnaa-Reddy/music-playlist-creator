import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Artist } from '../interfaces/artist';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  artist1: Artist = {
    id: 1,
    name: '<NAME>',
    type: 'artist',
    images: [],
    url: [],
  };
  artist2: Artist = {
    id: 2,
    name: '<NAME>',
    type: 'artist',
    images: [],
    url: [],
  };

  artists: Artist[] = [this.artist1, this.artist2];

  /// create a subject out of artists
  artistsSubject = new Observable<Artist[]>(
    (observer) => {
      observer.next(this.artists);
    }
  )
  //  new Subject<Artist[]>();


  constructor() {}

  song$ = (id: number) => <Observable<any>>new Observable((observer) => {
      setTimeout(() => {
        observer.next(id);
        observer.complete();
      }, 2000);
    });

  //get all songs
  allSongs$ = <Observable<any>>new Observable((observer) => {
    setTimeout(() => {
      observer.next(this.artists);
      observer.complete();
    }, 2000);
  });

  // get all artists
  allArtists$ = <Observable<any>>new Observable((observer) => {
    setTimeout(() => {
      observer.next(this.artists);
      observer.complete();
    }, 2000);
  });
}
