import { Image } from "./image";

export interface Artist{
    id: string;
    name: string;
    type: string;
    images?: Array<Image>;
}