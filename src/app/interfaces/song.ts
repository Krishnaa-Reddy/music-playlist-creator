import { Artist } from "./artist";
import { Image } from "./image";

export interface Song{
    id: string;
    title: string;
    images: Array<Image>;
    url: string;
    duration: number;
    albumId: number;
    artists: Array<string>;
    trackNumber: number;
    releaseDate: string;
    releaseDatePrecision: string;
}