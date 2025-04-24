import ApiHandler from "./api/api.service";
import { endpoints } from "./api/endpoints";

export const getAllSections = async () => {
  try {
    const apiHandler = new ApiHandler();
    const endpoint: string = endpoints.sections.all_sections;
    const response = await apiHandler.get({ endpoint });
    return response;
  } catch (error) {
    console.error("Error doing the petition@getAllSections", error);
    throw error;
  }
};
