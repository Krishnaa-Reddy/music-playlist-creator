import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Observable, fromEvent, map, startWith, switchMap, take } from 'rxjs';
import { OP_STATUS } from 'src/app/enum/state';
import { ArtistsData } from 'src/app/interfaces/home-state';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('myButton', { read: ElementRef })
  private myButtonRef!: ElementRef<HTMLButtonElement>;

  artists$!: Observable<ArtistsData>;
  public curStatus = OP_STATUS;

  constructor(
    private artistService: ArtistService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.artists$ = fromEvent(this.myButtonRef.nativeElement, 'click').pipe(
      take(1),
      switchMap(this.getArtists),
      startWith({ status: OP_STATUS.IDLE })
    );
    this.cdr.detectChanges();
  }

  getArtists = () => this.artistService.artists$.pipe(
    map((artists) => {
      return {
        artists: artists,
        status: OP_STATUS.SUCCESS,
      };
    }),
    startWith({ status: OP_STATUS.LOADING })
  );

  deleteArtist = () => {
    // #TODO
  }
}
