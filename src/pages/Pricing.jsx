import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';

const PricingCard = ({ title, price, features }) => {
  return (
       
    <div className="border-blue-600 rounded-2xl border divide-y divide-gray-200 max-w-sm mx-auto mt-20"
      style={{boxShadow: "rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px"}}>
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-gray-600">{title}</h2>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">{title === "Professional" ? "For established companies" : null}</p>
        <p className="mt-8"><span className="text-4xl font-bold tracking-tight text-gray-900">{price}</span>
          <span className="text-base font-medium text-gray-500">/mo</span>
        </p>
              <LoadingButton
      fullWidth
      size="large"
      type="submit"
          variant="contained"
      color="inherit"
    >
      Get
          started now
    </LoadingButton>
        
      </div>
      <div className="px-6 pt-6 pb-8">
        <h3 className="text-sm font-medium text-gray-900">What&rsquo;s included</h3>
        <ul role="list" className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex space-x-3">
              <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                  className="h-3 w-3 flex-shrink-0 text-green-500">
                  <path fillRule="evenodd"
                    d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

const PricingPage = () => {
  const plans = [
    {
      title: "Base",
      price: "$29",
      features: ["3 workspaces", "5 testimonials", "5 collection forms", "10 embeddable widgets"]
    },
    {
      title: "Standard",
      price: "$49",
      features: ["5 workspaces", "Unlimited testimonials", "10 collection forms", "20 embeddable widgets", "White labeled widgets and forms"]
    },
    {
      title: "Premium",
      price: "$79",
      features: ["10 workspaces", "Unlimited testimonials", "Unlimited collection forms", "50 embeddable widgets", "White labeled widgets and forms", "Custom branding (logo, colors, etc...)", "5 members per workspace"]
    }
  ];

  return (
<Container>
      <Grid container spacing={3}>
   
    <div className="flex justify-center">
      {plans.map((plan, index) => (
        <PricingCard key={index} title={plan.title} price={plan.price} features={plan.features} />
      ))}
    </div>
    </Grid>
</Container>
  );
}

export default PricingPage;