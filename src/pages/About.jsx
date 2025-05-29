import Button from '../components/Button';

const About = () => {
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
            About <span className="text-primary">Nour Gym</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Learn about our mission, our story, and what makes Nour Gym the best choice for your fitness journey.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our <span className="text-primary">Story</span></h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010 by fitness enthusiast and professional trainer Ahmed Nour, Nour Gym began as a small personal training studio with a vision to create a fitness community that focuses on holistic wellness rather than just physical appearance.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've grown from a small studio to a full-service fitness center, but our core values remain the same: personalized attention, expert guidance, and a supportive community atmosphere.
              </p>
              <p className="text-gray-700">
                Today, Nour Gym is proud to be one of the leading fitness facilities in the city, with state-of-the-art equipment, a diverse range of classes, and a team of certified trainers dedicated to helping our members achieve their fitness goals.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Nour Gym Story" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our <span className="text-primary">Mission</span></h2>
              <p className="text-gray-700 mb-4">
                At Nour Gym, our mission is to empower individuals to transform their lives through fitness, nutrition, and wellness education. We believe that fitness is not just about looking good, but about feeling good and living a healthier, more fulfilling life.
              </p>
              <p className="text-gray-700 mb-4">
                We are committed to providing a welcoming, inclusive environment where people of all fitness levels can feel comfortable and supported on their journey. Our expert trainers are dedicated to helping each member develop a personalized fitness plan that aligns with their unique goals and needs.
              </p>
              <p className="text-gray-700">
                Through education, motivation, and community support, we aim to inspire lasting lifestyle changes that extend beyond the gym walls and into every aspect of our members' lives.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Nour Gym Mission" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* What Makes Us Special */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Makes Us <span className="text-primary">Special</span></h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Nour Gym, we pride ourselves on offering more than just a place to work out. Here's what sets us apart from other fitness centers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Trainers</h3>
              <p className="text-gray-700">
                Our team consists of certified fitness professionals with years of experience in various disciplines. They're not just trainers; they're mentors committed to your success.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Supportive Community</h3>
              <p className="text-gray-700">
                At Nour Gym, you're not just a member; you're part of a family. Our supportive community provides motivation, accountability, and friendship on your fitness journey.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Programs</h3>
              <p className="text-gray-700">
                We understand that everyone's fitness journey is unique. That's why we offer personalized programs tailored to your specific goals, fitness level, and preferences.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">State-of-the-Art Equipment</h3>
              <p className="text-gray-700">
                Our facility is equipped with the latest fitness technology and equipment, ensuring you have everything you need for an effective and enjoyable workout.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Hours</h3>
              <p className="text-gray-700">
                We understand that life is busy. That's why we offer extended hours, making it convenient for you to fit fitness into your schedule, no matter how hectic it may be.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="text-primary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Welcoming Environment</h3>
              <p className="text-gray-700">
                We've created a non-intimidating, welcoming space where everyone feels comfortable, regardless of their fitness level or experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience <span className="text-primary">Nour Gym</span>?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our community today and start your journey towards a healthier, stronger you. 
            We're excited to welcome you to the Nour Gym family!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              JOIN NOW
            </Button>
            <Button to="/services" variant="outline" size="lg">
              EXPLORE SERVICES
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;