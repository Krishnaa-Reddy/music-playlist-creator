import { OP_STATUS } from "../enum/state";
import { Artist } from "./artist";

export interface ArtistsData {
  artists?: Artist[];
  status: OP_STATUS;
}
