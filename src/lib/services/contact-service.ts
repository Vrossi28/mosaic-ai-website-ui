import { ApiRoutes } from "@/constants/ApiRoutes";
import apiClient from "./api-client";

export const sendContactForm = async (
  data: ContactFormData
): Promise<boolean> => {
  try {
    const response = await apiClient.post(ApiRoutes.RequestContact, data);
    return response.status === 204;
  } catch (error) {
    throw new Error("Error while sending the contact formulary");
  }
};
