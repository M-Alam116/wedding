import { useState, useCallback } from "react";
import axiosInstance from "../utils/axiosInstance";

function useApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (config) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await axiosInstance(config);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
}

export default useApi;
