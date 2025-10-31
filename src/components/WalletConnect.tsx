import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const WalletConnect = () => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const { toast } = useToast();

  const connectWallet = async () => {
    if (typeof (window as any).ethereum !== "undefined") {
      try {
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
        setConnected(true);
        toast({
          title: "Wallet Connected",
          description: `Connected to ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
        });
      } catch (error) {
        toast({
          title: "Connection Failed",
          description: "Failed to connect wallet. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "MetaMask Not Found",
        description: "Please install MetaMask to connect your wallet.",
        variant: "destructive",
      });
    }
  };

  const disconnectWallet = () => {
    setConnected(false);
    setAddress("");
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
    });
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
      <div className="flex items-center gap-3 mb-4">
        <Wallet className="w-6 h-6 text-primary" />
        <h3 className="text-lg font-semibold">Wallet Connection</h3>
      </div>
      
      {connected ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <CheckCircle className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">Connected</p>
              <p className="text-xs text-muted-foreground font-mono">
                {address.slice(0, 8)}...{address.slice(-6)}
              </p>
            </div>
          </div>
          <Button onClick={disconnectWallet} variant="outline" className="w-full">
            Disconnect Wallet
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Connect your wallet to enable transaction scheduling and advanced features.
          </p>
          <Button onClick={connectWallet} variant="hero" className="w-full">
            <Wallet className="w-4 h-4 mr-2" />
            Connect MetaMask
          </Button>
        </div>
      )}
    </Card>
  );
};
