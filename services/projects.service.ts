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

export const updateProjectProductQuantity = async (
  user_id: number,
  project_id: number,
  product_id: number,
  new_quantity: number,
) => {
  try {
    const apiHandler = new ApiHandler();
    const endpoint: string = endpoints.projects.update_product_quantity;

    const body = {
      user_id,
      project_id,
      product_id,
      new_quantity,
    };

    const response = await apiHandler.put({ endpoint, body });
    return response;
  } catch (error) {
    console.error(
      "Error doing the petition@updateProjectProductQuantity",
      error,
    );
    throw error;
  }
};
