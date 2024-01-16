import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useBearStore } from "@services/store";
import { API_CORE_URL } from "@services/config";

export const useCoreApi = (path) => {
  const { token } = useBearStore();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = useMemo(() => {
    return axios.create({
      baseURL: API_CORE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [token]);

  const fetchData = useCallback(async () => {
    try {
      if (!token) throw new Error("Token is required");
      setLoading(true);
      const response = await api.get(path);
      setData(response.data);
    } catch (error) {
      console.log("error", JSON.stringify(error.response.data));

      setError(error);
    } finally {
      setLoading(false);
    }
  }, [api, path, token]);

  const postData = async (postData) => {
    try {
      if (!token) throw new Error("Token is required");
      setLoading(true);
      const response = await api.post(path, postData);
      setData(response.data);
    } catch (error) {
      console.log("error", JSON.stringify(error.response.data));

      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    postData,
  };
};
