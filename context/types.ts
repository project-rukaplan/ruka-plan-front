export interface IStore {
  loading: boolean;
}

export enum StoreActions {
  UPDATE_LOADING = "UPDATE_LOADING",
}

export interface IStoreDispatch {
  type: StoreActions;
  payload: any;
}
