import { ProjectProps } from "@/components/ProjectPreview/interfaces";
import { UserProps } from "../interfaces/user/user.interface";

export interface IStore {
  loading: boolean;
  user: UserProps;
  user_projects: ProjectProps[];
}

export enum StoreActions {
  UPDATE_LOADING = "UPDATE_LOADING",
  UPDATE_USER_PROJECTS = "UPDATE_USER_PROJECTS",
}

export interface IStoreDispatch {
  type: StoreActions;
  payload: any;
}
