import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spinner } from "@nextui-org/react";

interface PortfolioMetricsData {
  totalValue: number;
  highestBuyPrice: number;
  stockCount: number;
}

export default function PortfolioMetrics() {
  const [metrics, setMetrics] = useState<PortfolioMetricsData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMetrics() {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8081/api/stocks/portfolio-value");
        setMetrics(response.data);
      } catch (error) {
        console.error("Error fetching portfolio metrics", error);
      }
      setLoading(false);
    }
    fetchMetrics();
  }, []);

  if (loading) return <div className="flex justify-center mt-4"><Spinner color="primary" /></div>;

  return (
    <Card className="mb-6 p-6 shadow-lg">
      <h4 className="text-lg font-bold mb-4">Portfolio Metrics</h4>
      {metrics ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-gray-600">Total Value:</p>
            <p className="text-xl font-bold">${metrics?.totalValue?.toFixed(2) ?? "N/A"}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-gray-600">Highest Buy Price:</p>
            <p className="text-xl font-bold">${metrics?.highestBuyPrice?.toFixed(2) ?? "N/A"}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-gray-600">Stock Count:</p>
            <p className="text-xl font-bold">{metrics?.stockCount ?? "N/A"}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No metrics available.</p>
      )}
    </Card>
  );
}
