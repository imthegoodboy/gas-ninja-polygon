import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";
import { useEffect, useState } from "react";

interface GasData {
  time: string;
  slow: number;
  standard: number;
  fast: number;
}

export const GasTracker = () => {
  const [gasData, setGasData] = useState<GasData[]>([]);
  const [currentGas, setCurrentGas] = useState({
    slow: 25,
    standard: 35,
    fast: 50,
  });

  // Simulate real-time gas price updates
  useEffect(() => {
    const generateMockData = () => {
      const now = new Date();
      const data: GasData[] = [];
      
      for (let i = 11; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 5 * 60000);
        data.push({
          time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          slow: Math.floor(Math.random() * 20) + 20,
          standard: Math.floor(Math.random() * 20) + 30,
          fast: Math.floor(Math.random() * 30) + 40,
        });
      }
      return data;
    };

    setGasData(generateMockData());

    const interval = setInterval(() => {
      setCurrentGas({
        slow: Math.floor(Math.random() * 20) + 20,
        standard: Math.floor(Math.random() * 20) + 30,
        fast: Math.floor(Math.random() * 30) + 40,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const GasCard = ({ title, price, icon: Icon, trend }: any) => (
    <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.2)] transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        </div>
        {trend > 0 ? (
          <TrendingUp className="w-4 h-4 text-destructive" />
        ) : (
          <TrendingDown className="w-4 h-4 text-primary" />
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-foreground">{price}</span>
        <span className="text-sm text-muted-foreground">Gwei</span>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        ~${(price * 0.05).toFixed(2)} USD
      </p>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GasCard title="Slow" price={currentGas.slow} icon={Activity} trend={-1} />
        <GasCard title="Standard" price={currentGas.standard} icon={Activity} trend={1} />
        <GasCard title="Fast" price={currentGas.fast} icon={Activity} trend={-1} />
      </div>

      <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
        <h3 className="text-lg font-semibold mb-4">Gas Price History</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={gasData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
              }}
            />
            <Line
              type="monotone"
              dataKey="slow"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="standard"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="fast"
              stroke="hsl(var(--destructive))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">Slow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-muted-foreground">Standard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-muted-foreground">Fast</span>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
          <h3 className="text-lg font-semibold mb-4">Average Gas by Time Period</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={gasData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
              <Area
                type="monotone"
                dataKey="standard"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary)/0.2)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Standard gas price trends over the last hour
          </p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
          <h3 className="text-lg font-semibold mb-4">Gas Price Comparison</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={gasData.slice(-6)}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
              <Bar dataKey="slow" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              <Bar dataKey="standard" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
              <Bar dataKey="fast" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Last 30 minutes gas price comparison
          </p>
        </Card>
      </div>
    </div>
  );
};
