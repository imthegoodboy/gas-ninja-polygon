import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ScheduledTransaction {
  id: string;
  maxGasPrice: number;
  to: string;
  value: string;
  status: "pending" | "executed";
}

const Scheduler = () => {
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<ScheduledTransaction[]>([
    {
      id: "1",
      maxGasPrice: 30,
      to: "0x1234...5678",
      value: "0.5 MATIC",
      status: "pending",
    },
  ]);
  
  const [formData, setFormData] = useState({
    maxGasPrice: "",
    to: "",
    value: "",
  });

  const handleSchedule = () => {
    if (!formData.maxGasPrice || !formData.to || !formData.value) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newTransaction: ScheduledTransaction = {
      id: Date.now().toString(),
      maxGasPrice: Number(formData.maxGasPrice),
      to: formData.to,
      value: formData.value,
      status: "pending",
    };

    setTransactions([...transactions, newTransaction]);
    setFormData({ maxGasPrice: "", to: "", value: "" });
    
    toast({
      title: "Transaction Scheduled",
      description: "Your transaction will execute when gas price drops below your limit",
    });
  };

  const handleDelete = (id: string) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
    toast({
      title: "Transaction Cancelled",
      description: "Scheduled transaction has been removed",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Transaction Scheduler
          </h1>
          <p className="text-muted-foreground">
            Schedule transactions to execute when gas prices meet your criteria
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Schedule New Transaction</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="maxGasPrice">Max Gas Price (Gwei)</Label>
                <Input
                  id="maxGasPrice"
                  type="number"
                  placeholder="30"
                  value={formData.maxGasPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, maxGasPrice: e.target.value })
                  }
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Transaction will execute when gas drops below this price
                </p>
              </div>

              <div>
                <Label htmlFor="to">Recipient Address</Label>
                <Input
                  id="to"
                  placeholder="0x..."
                  value={formData.to}
                  onChange={(e) =>
                    setFormData({ ...formData, to: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="value">Amount (MATIC)</Label>
                <Input
                  id="value"
                  placeholder="0.5"
                  value={formData.value}
                  onChange={(e) =>
                    setFormData({ ...formData, value: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <Button
                onClick={handleSchedule}
                variant="hero"
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-2" />
                Schedule Transaction
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
            <h2 className="text-xl font-semibold mb-6">Scheduled Transactions</h2>
            
            {transactions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No scheduled transactions</p>
              </div>
            ) : (
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="p-4 bg-background/50 rounded-lg border border-border"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium">To: {tx.to}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Max Gas: {tx.maxGasPrice} Gwei</span>
                          <span>Amount: {tx.value}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(tx.id)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          tx.status === "pending"
                            ? "bg-primary animate-pulse"
                            : "bg-muted"
                        }`}
                      />
                      <span className="text-xs capitalize">{tx.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
