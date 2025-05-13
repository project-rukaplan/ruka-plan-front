import React, { useContext, useEffect, useReducer } from "react";

import { IStore, IStoreDispatch, StoreActions } from "./types";
import { StoreReducer } from "./reducer";
import { getProjectsByUser } from "../services/projects.service";

const InitialStore: IStore = {
  loading: false,
  // Mock data, this should come from backend
  user: {
    user_id: 1,
    user_name: "Pepito",
    user_lastname: "Perez",
    user_email: "pepitoperez@gmail.com",
  },
  user_projects: [],
};

export const StorageContext = React.createContext<{
  store: IStore;
  dispatch: React.Dispatch<IStoreDispatch>;
  reloadUserProjects: () => void;
}>({
  store: InitialStore,
  dispatch: () => null,
  reloadUserProjects: () => null,
});

const Storage = ({ children }: { children: JSX.Element }) => {
  const [store, dispatch] = useReducer(StoreReducer, InitialStore);

  const reloadUserProjects = async () => {
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: true });
    const response = await getProjectsByUser(store.user.user_id);
    dispatch({ type: StoreActions.UPDATE_USER_PROJECTS, payload: response });
    dispatch({ type: StoreActions.UPDATE_LOADING, payload: false });
  };

  useEffect(() => {
    reloadUserProjects();
  }, [store.user.user_id]);

  return (
    <StorageContext.Provider value={{ store, dispatch, reloadUserProjects }}>
      {children}
    </StorageContext.Provider>
  );
};

// THIS IS THE CUSTOM HOOK TO ACCESS TO THE CONTEXT
export const UseStore = () => useContext(StorageContext);

export default Storage;
