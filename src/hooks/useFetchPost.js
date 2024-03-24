import { useEffect, useState } from "react";

export const useFetchPost = (url, method = "GET") => {
  const [options, setOptions] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const postData = (tdata) => {
    setOptions({
      method: "POST",
      body: JSON.stringify(tdata),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const patchData = (tdata) => {
    setOptions({
      method: "PATCH",
      body: JSON.stringify(tdata),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  useEffect(() => {
    const fetchData = async (fOptions) => {
      try {
        const res = await fetch(url, fOptions);
        const json = await res.json();
        setData(json);
        console.log(res);
      } catch (err) {
        setError(err);
        console.log(error);
      }
    };

    if (method === "GET") {
      fetchData();
      console.log("test GET");
    }

    if (method === "POST" && options) {
      console.log("true POSt");
      fetchData(options);
    }
  }, [url, method, options]);

  return { data, postData };
};
