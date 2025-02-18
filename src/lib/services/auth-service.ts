import axios from "axios";
import { getSettings } from "./settings-service";

interface TokenData {
  token: string;
  expiration: Date;
  tenantId: string;
}

let tokenData: TokenData | null = null;

export const isTokenExpired = (): boolean => {
  if (!tokenData) {
    return true;
  }
  const currentUtcTime = new Date(
    Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate(),
      new Date().getUTCHours(),
      new Date().getUTCMinutes(),
      new Date().getUTCSeconds()
    )
  );
  return tokenData.expiration <= currentUtcTime;
};

export const setTokenData = (
  token: string,
  expiration: Date,
  tenantId: string
) => {
  tokenData = { token, expiration, tenantId };
};

export const login = async (): Promise<void> => {
  try {
    const settings = getSettings();
    const response = await axios.post(`${settings.apiUrl}/api/account/login`, {
      email: settings.login,
      password: settings.password,
    });

    const { token, expiresAt, account } = response.data;
    const tenantId = account.defaultId;
    setTokenData(token, new Date(expiresAt), tenantId);
  } catch (error) {
    console.error("Error while performing login:", error);
    throw new Error("Failure when performing login");
  }
};

export const getToken = (): string | null => {
  return tokenData?.token || null;
};

export const getTenantId = (): string | null => {
  return tokenData?.tenantId || null;
};
