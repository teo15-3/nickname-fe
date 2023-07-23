import { useEffect, useState } from "react";
import type { AxiosRequestConfig } from "axios";
import axios from "../lib/api/index";

const useAxios = (configParams: AxiosRequestConfig) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async (configParams: AxiosRequestConfig) => {
      await axios
        .request(configParams)
        .then((res) => setData(res.data))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };

    if (isLoading) {
      fetchData(configParams);
    }
  }, [configParams]);

  return [data, error, isLoading];
};

export default useAxios;
