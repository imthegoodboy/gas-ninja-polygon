import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "5 free gas price scans per day",
        "Real-time gas tracking",
        "Basic price alerts",
        "Email support",
      ],
      cta: "Get Started",
      variant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      features: [
        "Unlimited gas price scans",
        "Advanced scheduling",
        "Priority transaction execution",
        "Historical analytics",
        "API access",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
      variant: "hero" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      features: [
        "Everything in Pro",
        "Custom gas optimization",
        "Dedicated account manager",
        "White-label solutions",
        "Custom integrations",
        "24/7 premium support",
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free, upgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 relative ${
                plan.popular
                  ? "border-primary shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
                  : ""
              } bg-gradient-to-br from-card to-secondary`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/auth">
                <Button variant={plan.variant} className="w-full">
                  {plan.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include access to our core gas tracking features
          </p>
          <p className="text-sm text-muted-foreground">
            Questions? <Link to="/auth" className="text-primary hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
