import { useState, useEffect } from "react";

const useFetch = ()=>{
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const url = "http://127.0.0.1:8000/api/public/portfolio";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return {data, loading, error};
}

export default useFetch;