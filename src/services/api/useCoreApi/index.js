import axios from "axios";
import { useState, useEffect } from "react";
import { useBearStore } from "@services/store";
import { API_CORE_URL } from "@services/config";

export const useCoreApi = (path) => {
  const { token } = useBearStore((state) => state.token);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = axios.create({
    baseURL: API_CORE_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  });

  const fetchData = async () => {
    try {
      if (!token) throw new Error("Token is required");
      setLoading(true);
      const response = await api.get(path);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (postData) => {
    try {
      if (!token) throw new Error("Token is required");
      setLoading(true);
      const response = await api.post(path, postData);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return {
    data,
    loading,
    error,
    postData,
  };
};
