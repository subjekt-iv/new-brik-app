import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { API_CORE_URL } from "@services/config";

export const useGuestCoreApi = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Cambiado a false inicialmente
  const [error, setError] = useState(null);

  const api = axios.create({
    baseURL: API_CORE_URL,
  });

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(path);
      setData(response.data);
    } catch (error) {
      console.log("error", JSON.stringify(error.response.data));
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [api, path]);

  const postData = async (postData) => {
    try {
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

  const triggerFetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    fetchData,
    postData,
    triggerFetch, // Función para iniciar manualmente la solicitud
  };
};
