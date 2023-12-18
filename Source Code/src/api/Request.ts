import Axios, { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { API_BASE_URL } from "../config/BaseInfo";
import { STORAGE } from "../config/Storage";
import { RequestType } from "../models/Request";

let token = localStorage.getItem(STORAGE.TOKEN);

/**
 *
 * This hook is for mange api requests
 * @Component useRequest
 * @param {string} url
 * @param {AxiosRequestConfig} options
 * @returns {RequestType}
 */
function useRequest<T>(
  url: string,
  options: AxiosRequestConfig = {
    method: "GET",
  }
): RequestType {
  let [data, setData] = useState<T | null>(null);
  let [error, setError] = useState<boolean>(false);
  let [loading, setLoading] = useState<boolean>(false);
  let [message, setMessage] = useState<string>("");

  const axiosInstance = useMemo(() => {
    return Axios.create({
      baseURL: API_BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
  }, []);

  useEffect(() => {
    // Auto run fetch function if request method is Get and is first time to request
    if (options?.method?.toUpperCase() === "GET" && !data) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // =========== Main Request Function =========
  const fetch = useCallback(() => {
    setLoading(true);
    setError(false);
    return new Promise(function (resolve, reject) {
      axiosInstance({
        url,
        ...options,
      })
        .then((res: any) => {
          let resData = res?.data;
          setData(resData);
          setMessage(resData?.message);
          setError(false);
          if (resData?.isSucceed === false) {
            setError(true);
            toast.error(resData?.message);
          }
          resolve(resData);
        })
        .catch((err) => {
          toast.error("Network Error!");
          if (err?.response?.status === 401) {
            window.location.href = "/login";
          }
          setError(true);
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, options]);

  return [{ data, loading, message, error }, fetch];
}

export default useRequest;
