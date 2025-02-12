// pages/dashboard.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import PortfolioMetrics from "@/components/PortfolioMetrics";
import StockForm from "@/components/StockForm";
import StockList from "@/components/StockList";
import useStocks from "@/hooks/useStock";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const router = useRouter();
  const { user } = useAuth();
  const { stocks, loading, fetchStocks } = useStocks();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <Layout>
      <PortfolioMetrics />
      <StockForm refreshStocks={fetchStocks} />
      {loading ? (
        <p>Loading stocks...</p>
      ) : (
        <StockList stocks={stocks} refreshStocks={fetchStocks} />
      )}
    </Layout>
  );
}
