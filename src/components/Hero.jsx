import Button from './Button';

const Hero = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">TRANSFORM YOUR BODY</span>
            <span className="text-primary">TRANSFORM YOUR LIFE</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Join Nour Gym today and start your fitness journey with the best trainers and equipment in the city.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/contact" variant="primary" size="lg">
              JOIN NOW
            </Button>
            <Button to="/services" variant="outline" size="lg">
              OUR SERVICES
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-primary text-4xl font-bold">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-primary text-4xl font-bold">50+</div>
              <div className="text-gray-300">Expert Trainers</div>
            </div>
            <div>
              <div className="text-primary text-4xl font-bold">1000+</div>
              <div className="text-gray-300">Happy Members</div>
            </div>
            <div>
              <div className="text-primary text-4xl font-bold">100+</div>
              <div className="text-gray-300">Fitness Equipment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;