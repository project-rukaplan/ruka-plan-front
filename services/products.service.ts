import ApiHandler from "./api/api.service";
import { endpoints } from "./api/endpoints";

export const getProductsInSection = async (section_id: number) => {
  try {
    const apiHandler = new ApiHandler();
    const endpoint: string = endpoints.products.by_section + "/" + section_id;
    const response = await apiHandler.get({ endpoint });
    return response;
  } catch (error) {
    console.error("Error doing the petition@getProductsInSection", error);
    throw error;
  }
};
