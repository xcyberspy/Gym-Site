import Button from '../components/Button';

const Services = () => {
  // Service data
  const services = [
    {
      id: 1,
      title: 'Bodybuilding',
      description: 'Our bodybuilding program is designed to help you build muscle, increase strength, and sculpt your physique. Our expert trainers will guide you through proper form and technique, create a personalized workout plan, and provide nutrition advice to help you achieve your bodybuilding goals.',
      features: [
        'Personalized workout plans',
        'Nutrition guidance',
        'Form and technique coaching',
        'Progress tracking',
        'Access to state-of-the-art equipment'
      ],
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Cardio Training',
      description: 'Improve your cardiovascular health, burn calories, and boost your endurance with our cardio programs. Whether you prefer running, cycling, rowing, or using the elliptical, our trainers will help you create an effective cardio routine that keeps your heart healthy and helps you reach your fitness goals.',
      features: [
        'Varied cardio equipment',
        'Interval training programs',
        'Heart rate monitoring',
        'Endurance building',
        'Weight management support'
      ],
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'Yoga Classes',
      description: "'Find balance, flexibility, and inner peace with our yoga classes. Our certified yoga instructors offer classes for all levels, from beginners to advanced practitioners. Yoga is not just about physical postures; it's about connecting your mind, body, and breath to improve overall wellness.'",
      features: [
        'Classes for all levels',
        'Various yoga styles (Hatha, Vinyasa, etc.)',
        'Meditation techniques',
        'Breathing exercises',
        'Stress reduction'
      ],
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      title: 'Zumba',
      description: "'Dance your way to fitness with our energetic Zumba classes! Zumba combines Latin and international music with dance moves, creating a dynamic, exciting, and effective fitness system. It's a fun way to improve your cardiovascular health, coordination, and mood.'",
      features: [
        'Fun, energetic atmosphere',
        'Calorie-burning workouts',
        'Improved coordination',
        'Stress relief',
        'No dance experience necessary'
      ],
      image: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 5,
      title: 'Personal Training',
      description: 'Get personalized guidance and motivation from our expert trainers to achieve your fitness goals faster. Our personal training sessions are tailored to your specific needs, whether you want to lose weight, build muscle, improve athletic performance, or enhance overall fitness.',
      features: [
        'One-on-one attention',
        'Customized workout plans',
        'Nutritional guidance',
        'Accountability and motivation',
        'Flexible scheduling'
      ],
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 6,
      title: 'Group Fitness Classes',
      description: 'Experience the energy and motivation of working out in a group setting. Our diverse range of group fitness classes includes HIIT, spinning, boot camp, and more. Led by enthusiastic instructors, these classes provide structure, variety, and a supportive community atmosphere.',
      features: [
        'Variety of class options',
        'Motivating group environment',
        'Expert instruction',
        'Scheduled sessions for accountability',
        'Community support'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Discover our comprehensive range of fitness services designed to help you achieve your personal goals.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We <span className="text-primary">Offer</span></h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Nour Gym, we provide a wide range of services to cater to all fitness levels and goals. 
              Whether you're just starting your fitness journey or looking to take your training to the next level, 
              we have something for you.
            </p>
          </div>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button to="/contact" variant="primary">
                    GET STARTED
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your <span className="text-primary">Fitness Journey</span>?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Nour Gym today and take advantage of our comprehensive services. 
            Our expert trainers are ready to help you achieve your fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              JOIN NOW
            </Button>
            <Button to="/pricing" variant="outline" size="lg">
              VIEW PRICING
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;