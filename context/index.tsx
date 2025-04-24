import React, { useContext, useReducer } from "react";

import { IStore, IStoreDispatch } from "./types";
import { StoreReducer } from "./reducer";

const InitialStore: IStore = {
  loading: false,
  // Mock data, this should come from backend
  user: {
    user_id: 1,
    user_name: "Pepito",
    user_lastname: "Perez",
    user_email: "pepitoperez@gmail.com",
  },
};

export const StorageContext = React.createContext<{
  store: IStore;
  dispatch: React.Dispatch<IStoreDispatch>;
}>({
  store: InitialStore,
  dispatch: () => null,
});

const Storage = ({ children }: { children: JSX.Element }) => {
  const [store, dispatch] = useReducer(StoreReducer, InitialStore);

  return (
    <StorageContext.Provider value={{ store, dispatch }}>
      {children}
    </StorageContext.Provider>
  );
};

// THIS IS THE CUSTOM HOOK TO ACCESS TO THE CONTEXT
export const UseStore = () => useContext(StorageContext);

export default Storage;
