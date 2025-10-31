import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingDown, Clock, Shield, Zap, ArrowRight, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                Save up to 70% on gas fees
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Optimize Your
              </span>
              <br />
              Polygon Transactions
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track real-time gas prices, schedule transactions intelligently, and never overpay on Polygon network again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="group">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg">
                  View Live Tracker
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-card to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How PolyGas Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to start saving on gas fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-card to-secondary border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect & Track</h3>
              <p className="text-muted-foreground">
                Connect your wallet and monitor real-time Polygon gas prices with live updates every 5 seconds
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-card to-secondary border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Set Your Limits</h3>
              <p className="text-muted-foreground">
                Schedule transactions with custom gas price limits and get AI-powered recommendations
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-card to-secondary border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Save & Optimize</h3>
              <p className="text-muted-foreground">
                Execute transactions automatically when prices drop, saving up to 70% on gas fees
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose PolyGas?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced tools and insights to maximize your efficiency on Polygon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.3)] transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor Polygon gas prices in real-time with live updates every 5 seconds
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.3)] transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                Schedule transactions to execute when gas prices drop below your limit
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.3)] transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Price Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Detailed charts and historical data to identify the best transaction times
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.3)] transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Your wallet keys never leave your device. Non-custodial and open source
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-card to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$2.5M+</div>
              <p className="text-muted-foreground">Gas Fees Saved</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1M+</div>
              <p className="text-muted-foreground">Optimized Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
            <Zap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Gas Fees?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users saving money on every Polygon transaction
            </p>
            <Link to="/auth">
              <Button variant="hero" size="lg">
                Start Saving Now
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-gradient-to-br from-card to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">Built with</span>
              <img 
                src="https://cryptologos.cc/logos/polygon-matic-logo.svg" 
                alt="Polygon" 
                className="h-6 w-6"
              />
              <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Polygon
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 PolyGas. Empowering the Polygon community with smart gas optimization.
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span>Real-time gas tracking</span>
              <span>•</span>
              <span>AI-powered insights</span>
              <span>•</span>
              <span>Smart scheduling</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
