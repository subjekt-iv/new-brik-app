import { useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useBearStore } from "@services/store";
import { API_CORE_URL } from "@services/config";
import { coreResources } from "./collection";

export const useCoreApi = (path: string) => {
  const { access_token, refresh_token, setAccessToken, setRefreshToken } =
    useBearStore();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = useMemo(() => {
    if (!access_token) return null;
    const instance = axios.create({
      baseURL: API_CORE_URL,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 403 && !error.config._retry) {
          error.config._retry = true;
          try {
            const refreshResponse = await axios.post(
              `${API_CORE_URL}/${coreResources.RefreshToken}`,
              {
                refresh: refresh_token,
              }
            );
            const newAccessToken = refreshResponse.data.access;
            const newRefreshToken = refreshResponse.data.refresh;
            setAccessToken(newAccessToken);
            setRefreshToken(newRefreshToken);
            console.log("Token refreshed");
            error.config.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios.request(error.config);
          } catch (refreshError) {
            console.error("Failed to refresh token:", refreshError);
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );

    return instance;
  }, [access_token, refresh_token, setAccessToken, setRefreshToken]);

  const fetchData = useCallback(async () => {
    try {
      if (!access_token) throw new Error("Token is required");
      setLoading(true);
      const response = await api.get(path);
      setData(response.data);
    } catch (error) {
      console.log("error", JSON.stringify(error.response.data));
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [api, path, access_token]);

  const postData = async (postData: object) => {
    try {
      if (!access_token) throw new Error("Token is required");
      setLoading(true);
      const response = await api.post(path, postData);
      setData(response.data);
      return response.data;
    } catch (error) {
      console.log("error", JSON.stringify(error.response.data));
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const triggerFetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    postData,
    triggerFetch,
  };
};
