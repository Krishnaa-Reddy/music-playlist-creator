import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  artists: string[] = ['anirudh'];
  loading: boolean = false;
  deleting: boolean = false;

  artists$: Observable<string[]> = of(this.artists);
  artistsSubject = new Subject<string[]>();
  artistsAvailable: boolean = false;

  constructor(private songService: SongService) {}

  getArtists() {
    this.loading = true;
    this.artistsAvailable = true;
    if (!this.artists.length) {
      this.artistsAvailable = false;
      this.loading = false;
      return;
    }
    setTimeout(() => {
      this.loading = false;
      this.artistsSubject.next(this.artists);
    }, 2000);
  }

  deleteArtist() {
    this.deleting = true;
    if (!this.artistsAvailable) {
      this.deleting = false;
      return;
    }
    setTimeout(() => {
      this.artists = [...this.artists.slice(0, -1)];
      this.artistsSubject.next(this.artists);
      this.artistsAvailable = this.artists.length > 0;
      this.deleting = false;
    }, 2000);
  }
}
