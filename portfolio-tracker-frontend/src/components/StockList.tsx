import { useState } from "react";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";


interface Stock {
  id: number;
  stockName: string;
  ticker: string;
  quantity: number;
  buyPrice: number;
}

interface StockListProps {
  stocks: Stock[];
  refreshStocks: () => void;
}

export default function StockList({ stocks, refreshStocks }: StockListProps) {
  const [editingStock, setEditingStock] = useState<Stock | null>(null);
  const [formData, setFormData] = useState<Stock>({
    id: 0,
    stockName: "",
    ticker: "",
    quantity: 1,
    buyPrice: 0,
  });

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8081/api/stocks/${id}`);
      refreshStocks();
    } catch (error) {
      console.error("Error deleting stock:", error);
    }
  };

  const handleEdit = (stock: Stock) => {
    setEditingStock(stock);
    setFormData(stock);
  };

  const handleUpdate = async () => {
    try {
      if (editingStock) {
        await axios.put(`http://localhost:8081/api/stocks/${editingStock.id}`, formData);
        setEditingStock(null);
        refreshStocks();
      }
    } catch (error) {
      console.error("Error updating stock:", error);
    }
  };

  return (
    <>
      <Table aria-label="Stocks Table" className="w-full shadow-lg rounded-lg">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Stock Name</TableColumn>
          <TableColumn>Ticker</TableColumn>
          <TableColumn>Quantity</TableColumn>
          <TableColumn>Buy Price</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.id}>
              <TableCell>{stock.id}</TableCell>
              <TableCell>{stock.stockName}</TableCell>
              <TableCell>{stock.ticker}</TableCell>
              <TableCell>{stock.quantity}</TableCell>
              <TableCell>${stock.buyPrice.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" onClick={() => handleEdit(stock)}>
                    Edit
                  </Button>
                  <Button size="sm" color="danger" onClick={() => handleDelete(stock.id)}>
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal isOpen={Boolean(editingStock)} onClose={() => setEditingStock(null)}>
        <ModalContent>
          <ModalHeader>
            <h4 className="text-lg font-semibold">Edit Stock</h4>
          </ModalHeader>
          <ModalBody>
            <Input
              label="Stock Name"
              fullWidth
              value={formData.stockName}
              onChange={(e) => setFormData({ ...formData, stockName: e.target.value })}
              className="mb-4"
            />
            <Input
              label="Ticker"
              fullWidth
              value={formData.ticker}
              onChange={(e) => setFormData({ ...formData, ticker: e.target.value })}
              className="mb-4"
            />
            <Input
              label="Quantity"
              type="number"
              fullWidth
              value={String(formData.quantity)}
              onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
              className="mb-4"
            />
            <Input
              label="Buy Price"
              type="number"
              fullWidth
              value={String(formData.buyPrice)}
              onChange={(e) => setFormData({ ...formData, buyPrice: parseFloat(e.target.value) })}
              className="mb-4"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => setEditingStock(null)}>
              Cancel
            </Button>
            <Button onClick={handleUpdate}>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
