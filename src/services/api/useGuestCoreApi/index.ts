import axios from "axios";
import { useCallback, useState } from "react";
import { API_CORE_URL } from "@services/config";
import { useBearStore } from "@services/store";

export const useGuestCoreApi = (path: string) => {
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

  const { setErrorCode } = useBearStore();

  const postData = async (postData: object) => {
    try {
      setLoading(true);
      const response = await api.post(path, postData);
      setData(response.data);
    } catch (error) {
      console.log("error", JSON.stringify(error.response.data));
      setErrorCode(error.response.data.error.details.status_code);
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
