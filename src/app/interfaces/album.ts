import { AlbumType } from "../enum/albumType";
import { Image } from "./image";
import { Song } from "./song";

export interface Album{
    id: string;
    totalSongs: number;
    songs: Array<Song>;
    name: string;
    images: Array<Image>;
    artists?: Array<string>;
    artistId?: string;
    albumType: AlbumType;
    url: Array<string>;
    releaseDate: string;
    releaseDatePrecision: string;
}