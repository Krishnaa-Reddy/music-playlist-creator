import { CRUD_TYPE, OP_STATUS } from "../enum/state";
import { Artist } from "./artist";

export interface ArtistsData {
  artists?: Artist[];
  status: OP_STATUS;
  operation?: CRUD_TYPE;
}
