'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Switch } from "@/components/ui/switch"

const pricingData = [
  {
    name: 'Basic',
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: ['1 User', '10 Projects', '5GB Storage', 'Basic Support'],
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: ['5 Users', 'Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: ['Unlimited Users', 'Unlimited Projects', '1TB Storage', '24/7 Dedicated Support', 'Custom Integrations'],
  },
]

export default function PricingTabs() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      
      <div className="flex items-center justify-center mb-8">
        <span className={`mr-3 text-sm font-medium ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>Monthly</span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          aria-label="Toggle yearly pricing"
        />
        <span className={`ml-3 text-sm font-medium ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>Yearly</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((plan) => (
          <div key={plan.name} className="border rounded-lg p-6 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span className="text-base font-normal text-muted-foreground">
                /{isYearly ? 'year' : 'month'}
              </span>
            </p>
            <ul className="space-y-3 mb-6 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors mt-auto">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

