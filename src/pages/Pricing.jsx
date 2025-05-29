import { useState } from 'react';
import Button from '../components/Button';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  // Pricing plans data
  const plans = [
    {
      id: 1,
      name: 'Basic',
      description: 'Perfect for beginners starting their fitness journey',
      monthlyPrice: 49.99,
      quarterlyPrice: 134.97, // 10% discount
      yearlyPrice: 479.90, // 20% discount
      features: [
        'Access to gym facilities',
        'Basic fitness assessment',
        'Access to group classes',
        'Locker room access',
        'Free parking'
      ],
      notIncluded: [
        'Personal training sessions',
        'Nutrition consultation',
        'Premium classes',
        'Guest passes'
      ]
    },
    {
      id: 2,
      name: 'Premium',
      description: 'Our most popular plan for fitness enthusiasts',
      monthlyPrice: 79.99,
      quarterlyPrice: 215.97, // 10% discount
      yearlyPrice: 767.90, // 20% discount
      featured: true,
      features: [
        'All Basic plan features',
        '2 personal training sessions/month',
        'Nutrition consultation',
        'Access to premium classes',
        'Towel service',
        '2 guest passes per month',
        'Access to sauna and spa'
      ],
      notIncluded: [
        'Unlimited personal training',
        'Private locker'
      ]
    },
    {
      id: 3,
      name: 'Elite',
      description: 'The ultimate fitness experience with all amenities',
      monthlyPrice: 129.99,
      quarterlyPrice: 350.97, // 10% discount
      yearlyPrice: 1247.90, // 20% discount
      features: [
        'All Premium plan features',
        'Unlimited personal training',
        'Quarterly fitness assessments',
        'Customized nutrition plan',
        'Private locker',
        'Unlimited guest passes',
        'Priority class booking',
        'Exclusive events access'
      ],
      notIncluded: []
    }
  ];
  
  // Calculate price based on billing cycle
  const getPrice = (plan) => {
    switch(billingCycle) {
      case 'monthly':
        return plan.monthlyPrice;
      case 'quarterly':
        return plan.quarterlyPrice;
      case 'yearly':
        return plan.yearlyPrice;
      default:
        return plan.monthlyPrice;
    }
  };
  
  // Calculate savings percentage
  const getSavings = () => {
    switch(billingCycle) {
      case 'quarterly':
        return 10;
      case 'yearly':
        return 20;
      default:
        return 0;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Membership <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Invest in your health with our flexible membership options designed to fit your needs and budget.
          </p>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your <span className="text-primary">Plan</span></h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              We offer flexible membership options to suit your fitness goals and budget. 
              All plans include access to our state-of-the-art facilities and supportive community.
            </p>
            
            {/* Billing cycle toggle */}
            <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg">
              <button 
                className={`px-4 py-2 rounded-md ${billingCycle === 'monthly' ? 'bg-primary text-white' : 'text-white'}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${billingCycle === 'quarterly' ? 'bg-primary text-white' : 'text-white'}`}
                onClick={() => setBillingCycle('quarterly')}
              >
                Quarterly (10% off)
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${billingCycle === 'yearly' ? 'bg-primary text-white' : 'text-white'}`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly (20% off)
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${plan.featured ? 'border-2 border-primary relative' : 'border border-gray-200'}`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-8 ${plan.featured ? 'bg-gray-100' : 'bg-white'}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${getPrice(plan).toFixed(2)}</span>
                    <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : billingCycle === 'quarterly' ? 'quarter' : 'year'}</span>
                    
                    {getSavings() > 0 && (
                      <div className="text-primary text-sm font-bold mt-1">
                        Save {getSavings()}% with {billingCycle} billing
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    to="/contact" 
                    variant={plan.featured ? 'primary' : 'secondary'} 
                    className="w-full mb-8"
                  >
                    JOIN NOW
                  </Button>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-3 text-gray-800">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.notIncluded.length > 0 && (
                    <div>
                      <h4 className="font-bold mb-3 text-gray-800">Not included:</h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Information */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Additional <span className="text-primary">Information</span></h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Here's what you need to know about our membership options and policies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Operating Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-bold">Monday - Friday:</span> 6:00 AM - 10:00 PM</li>
                <li><span className="font-bold">Saturday:</span> 7:00 AM - 9:00 PM</li>
                <li><span className="font-bold">Sunday:</span> 8:00 AM - 8:00 PM</li>
                <li><span className="font-bold">Holidays:</span> Hours may vary</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Membership Policies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>One-time registration fee: $49.99</li>
                <li>Minimum contract: 1 month</li>
                <li>Cancellation notice: 30 days</li>
                <li>Membership freeze: Available up to 3 months/year</li>
                <li>Membership transfer: Not permitted</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Frequently Asked Questions</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-bold">Can I freeze my membership?</span><br />Yes, up to 3 months per year.</li>
                <li><span className="font-bold">Is there a joining fee?</span><br />Yes, a one-time fee of $49.99.</li>
                <li><span className="font-bold">Can I try before joining?</span><br />Yes, we offer a free day pass.</li>
                <li><span className="font-bold">Are there family discounts?</span><br />Yes, 10% off for additional family members.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to <span className="text-primary">Get Started</span>?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Nour Gym today and take the first step towards a healthier, stronger you. 
            Our team is ready to welcome you to our fitness community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              JOIN NOW
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              SCHEDULE A TOUR
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;