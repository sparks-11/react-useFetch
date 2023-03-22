import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchError, setIsFetchError] = useState(false);
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const pendingData = await axios.get(url);
      setData(pendingData.data);
      setIsLoading(false);
    } catch (error) {
      setIsFetchError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return [data, isLoading, isFetchError];
}
