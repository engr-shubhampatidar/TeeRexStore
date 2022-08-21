import axios from "axios";
import { useCallback, useState, useEffect } from "react";

axios.defaults.baseURL = "https://geektrust.s3.ap-southeast-1.amazonaws.com";

const useApi = ({ url, method, body = null, header = null }) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const callApi = useCallback(() => {
    axios[method](url, JSON.parse(header), JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, method, header, body]);

  useEffect(() => {
    callApi();
  }, [callApi]);

  return { response, error, loading };
};

export default useApi;
