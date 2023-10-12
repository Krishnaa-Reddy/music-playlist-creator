import { Image } from "./image";

export interface Album{
    id: string;
    albumType: string;
    totalSongs: number;
    name: string;
    images: Array<Image>;
    url: Array<string>;
    popularity: number;
    explicit: boolean;
    releaseDate: string;
    releaseDatePrecision: string;
}