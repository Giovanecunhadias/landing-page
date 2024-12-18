'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Switch } from "@/components/ui/switch"

const pricingData = {
  monthly: [
    {
      name: 'Starter',
      price: 29,
      features: ['1 User', '10 Projects', '5GB Storage', 'Basic Support'],
    },
    {
      name: 'Professional',
      price: 59,
      features: ['5 Users', 'Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'],
    },
    {
      name: 'Team',
      price: 119,
      features: ['10 Users', 'Unlimited Projects', '500GB Storage', '24/7 Support', 'Custom Integrations'],
    },
  ],
  yearly: [
    {
      name: 'Business',
      price: 299,
      features: ['Unlimited Users', 'Unlimited Projects', '1TB Storage', 'Dedicated Support', 'Enterprise Features'],
    },
    {
      name: 'Enterprise',
      price: 599,
      features: ['Unlimited Users', 'Unlimited Projects', '5TB Storage', 'White-label Options', 'Custom Development'],
    },
    {
      name: 'Enterprise Plus',
      price: 999,
      features: ['Unlimited Everything', 'Highest Priority Support', 'Customized Solutions', 'On-site Training'],
    },
  ],
}


export default function Plans() {
  const [isYearly, setIsYearly] = useState(false)

  const currentPlans = isYearly ? pricingData.yearly : pricingData.monthly

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      
      <div className="flex items-center justify-center mb-8">
        <button
          onClick={() => setIsYearly(false)}
          className={`mr-3 text-sm font-medium focus:outline-none ${!isYearly ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
        >
          Monthly
        </button>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          aria-label="Toggle yearly pricing"
        />
        <button
          onClick={() => setIsYearly(true)}
          className={`ml-3 text-sm font-medium focus:outline-none ${isYearly ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
        >
          Yearly
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentPlans.map((plan) => (
          <div key={plan.name} className="border rounded-lg p-6 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">
              ${plan.price}
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

