import { Component, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Subscription,
  catchError,
  finalize,
  of,
  tap,
} from 'rxjs';
import { OP_STATUS } from 'src/app/enum/state';
import { Artist } from 'src/app/interfaces/artist';
import { ArtistsData } from 'src/app/interfaces/home-state';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  readonly status = OP_STATUS;
  artists$ = new BehaviorSubject<ArtistsData>({ status: OP_STATUS.IDLE });
  subscription!: Subscription;

  constructor(private artistService: ArtistService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getArtists() {
    this.subscription = this.artistService.artists$
      .pipe(
        tap(() => {
          console.log("Loading");
          this.artists$.next({ status: OP_STATUS.LOADING });
        }),
        catchError((error) => {
          console.log("Error");
          this.artists$.next({ status: OP_STATUS.FAILED });
          return of(error);
        }),
        finalize(() => {
          console.log("Done");
          this.artists$.next({ status: OP_STATUS.DONE });
        })
      )
      .subscribe({
        next: (response: Artist[]) => {
          console.log("Next");
          
          this.artists$.next({
            status: OP_STATUS.SUCCESS,
            artists: response,
          });
        },
      });
  }

  deleteArtist() {
    console.log('Will be deleted');
  }
}
