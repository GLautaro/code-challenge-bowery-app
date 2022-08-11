// useFetch custom hook
import { useEffect, useState, useCallback } from "react";
import axios, { AxiosError } from "axios";
import toast from "../utils/toast";

type UseFetchResult = [any, boolean, any];

const useFetch = (endpoint: string): UseFetchResult => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(async (endpoint: string): Promise<any> => {
    try {
      const res = await axios.get(endpoint).then((response) => (response.data));
      setData(res);
    } catch (error: any) {
      const err = error as AxiosError;
      setError(err);
      toast.error('Unexpected error')
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData(endpoint);
  }, [fetchData, endpoint]);

  return [data, loading, error];
};

export default useFetch;
