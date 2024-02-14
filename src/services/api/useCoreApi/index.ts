import { useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useBearStore } from "@services/store";
import { API_CORE_URL } from "@services/config";

export const useCoreApi = (path: string) => {
  const { access_token } = useBearStore();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = useMemo(() => {
    if (!access_token) return null;
    return axios.create({
      baseURL: API_CORE_URL,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }, [access_token]);

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
