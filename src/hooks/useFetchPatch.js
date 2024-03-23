import { useEffect, useState } from "react";

export const useFetchPost = (url) => {
  const [options, setOptions] = useState(null);

  const postData = (data) => {
    setOptions({
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, options);
      const json = await res.json();
      console.log(res);
    };
    if (options) {
      console.log("true");
      //fetchData();
    }
  }, [options]);

  return { postData };
};
