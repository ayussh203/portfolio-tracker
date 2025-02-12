// hooks/useStocks.js
import { useState, useEffect } from "react";
import axios from "axios";

export default function useStocks() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStocks = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8081/api/stocks");
      setStocks(response.data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return { stocks, setStocks, loading, fetchStocks };
}
