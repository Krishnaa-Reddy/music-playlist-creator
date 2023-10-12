import { Image } from "./image";

export interface Artist{
    id: number;
    name: string;
    type: string;
    images: Array<Image>;
    url: Array<string>;
}