import { IStore, IStoreDispatch, StoreActions } from "./types";

export const StoreReducer = (state: IStore, action: IStoreDispatch): IStore => {
  switch (action.type) {
    case StoreActions.UPDATE_LOADING:
      return { ...state, loading: action.payload };
    default:
      throw new Error(
        `Not action defined to update global context: ${action.type}`,
      );
  }
};
