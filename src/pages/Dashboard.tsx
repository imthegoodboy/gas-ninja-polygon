import { Navbar } from "@/components/Navbar";
import { GasTracker } from "@/components/GasTracker";
import { WalletConnect } from "@/components/WalletConnect";
import { Card } from "@/components/ui/card";
import { Activity, Clock, TrendingDown } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Gas Tracker Dashboard
          </h1>
          <p className="text-muted-foreground">
            Real-time Polygon network gas prices and analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <GasTracker />
          </div>
          
          <div className="space-y-6">
            <WalletConnect />
            
            <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Best Time to Transact</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Today</span>
                  <span className="text-sm font-medium">2:00 AM - 6:00 AM UTC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg. Savings</span>
                  <span className="text-sm font-medium text-primary">~45%</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Network Status</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Block Time</span>
                  <span className="text-sm font-medium">~2.1s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Network Load</span>
                  <span className="text-sm font-medium text-primary">Medium</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
