import ApiHandler from "./api/api.service";
import { endpoints } from "./api/endpoints";

export const getProjectsByUser = async (user_id: number) => {
  try {
    const apiHandler = new ApiHandler();
    const endpoint: string = endpoints.projects.with_products + "/" + user_id;
    const response = await apiHandler.get({ endpoint });
    return response;
  } catch (error) {
    console.error("Error doing the petition@getProjectsByUser", error);
    throw error;
  }
};
