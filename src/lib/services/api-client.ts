import axios from "axios";
import { getSettings } from "./settings-service";
import { getTenantId, getToken, isTokenExpired, login } from "./auth-service";

const apiClient = axios.create({
  baseURL: getSettings().apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    try {
      if (isTokenExpired()) {
        await login();
      }

      const token = getToken();
      const tenantId = getTenantId();
      if (token && config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
        config.headers["X-Tenant"] = tenantId;
      }
      return config;
    } catch (error) {
      console.error("Error while intercepting request:", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.error("Error while sending request:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
