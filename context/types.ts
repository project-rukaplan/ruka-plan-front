import { UserProps } from "../interfaces/user/user.interface";

export interface IStore {
  loading: boolean;
  user: UserProps;
}

export enum StoreActions {
  UPDATE_LOADING = "UPDATE_LOADING",
}

export interface IStoreDispatch {
  type: StoreActions;
  payload: any;
}
