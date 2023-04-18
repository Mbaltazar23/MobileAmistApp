import { Action } from "../entities/Action";

export interface ActionRepository {
  getAllActions(): Promise<Action[]>;
  
}
