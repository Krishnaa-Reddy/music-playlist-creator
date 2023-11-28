import { Subject } from 'rxjs/internal/Subject';
import { SpotifyService } from './services/spotify.service';
import { Component, OnDestroy, inject } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment.development';
import { AuthService } from './services/auth.service';
import { Observable, Subscription, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = environment.title;
  sub : Subscription;
  artist$ !: Observable<any>;

  private spotifyService= inject(SpotifyService);
  private authService= inject(AuthService);

  constructor(){
    this.sub = this.authService.refreshTokens$.subscribe();
  }

  doSomething(){
    this.artist$ = this.spotifyService.searchArtists$;
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
