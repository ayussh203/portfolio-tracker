import { useState } from "react";
import axios from "axios";
import { Input, Button, Card } from "@nextui-org/react";

interface StockFormProps {
  refreshStocks: () => void;
}

export default function StockForm({ refreshStocks }: StockFormProps) {
  const [formData, setFormData] = useState({
    stockName: "",
    ticker: "",
    quantity: 1,
    buyPrice: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/stocks", formData);
      setFormData({ stockName: "", ticker: "", quantity: 1, buyPrice: 0 });
      refreshStocks();
    } catch (error) {
      console.error("Error adding stock:", error);
    }
  };

  return (
    <Card className="p-6 shadow-lg">
      <h4 className="text-lg font-bold mb-4">Add New Stock</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          label="Stock Name"
          className="w-full"
          value={formData.stockName}
          onChange={(e) =>
            setFormData({ ...formData, stockName: e.target.value })
          }
        />
        <Input
          type="text"
          label="Ticker"
          className="w-full"
          value={formData.ticker}
          onChange={(e) =>
            setFormData({ ...formData, ticker: e.target.value })
          }
        />
        <Input
          type="number"
          label="Quantity"
          className="w-full"
          value={String(formData.quantity)} // Convert number to string
          onChange={(e) =>
            setFormData({ ...formData, quantity: parseInt(e.target.value) })
          }
        />
        <Input
          type="number"
          label="Buy Price"
          className="w-full"
          value={String(formData.buyPrice)} // Convert number to string
          onChange={(e) =>
            setFormData({ ...formData, buyPrice: parseFloat(e.target.value) })
          }
        />
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:opacity-90"
        >
          Add Stock
        </Button>
      </form>
    </Card>
  );
}
