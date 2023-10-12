import { Artist } from "./artist";
import { Image } from "./image";

export interface Song{
    id: number;
    title: string;
    images: Array<Image>;
    url: Array<string>;
    duration: number;
    albumId: number;
    artists: Array<Artist>;
    trackNumber: number;
    popularity: number;
    explicit: boolean;
    releaseDate: string;
    releaseDatePrecision: string;
}