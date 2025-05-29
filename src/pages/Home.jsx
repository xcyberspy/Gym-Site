import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* About Section Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="About Nour Gym" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About <span className="text-primary">Nour Gym</span></h2>
              <p className="text-gray-700 mb-6">
                At Nour Gym, we believe fitness is not just about building a better body, but about building a better life. 
                Our state-of-the-art facilities, expert trainers, and supportive community create the perfect environment 
                for you to reach your fitness goals, whatever they may be.
              </p>
              <p className="text-gray-700 mb-8">
                Founded in 2010, we've helped thousands of members transform their lives through personalized fitness programs, 
                nutrition guidance, and unwavering support.
              </p>
              <Button to="/about" variant="secondary">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our <span className="text-primary">Services</span></h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We offer a wide range of fitness services designed to help you achieve your personal goals, 
              whether you're looking to build muscle, lose weight, or improve your overall health and wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Bodybuilding" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Bodybuilding</h3>
                <p className="text-gray-700 mb-4">
                  Build muscle, increase strength, and sculpt your physique with our comprehensive bodybuilding programs.
                </p>
                <Link to="/services" className="text-primary font-bold hover:underline">Learn More →</Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Cardio Training" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Cardio Training</h3>
                <p className="text-gray-700 mb-4">
                  Improve your cardiovascular health, burn calories, and boost your endurance with our cardio programs.
                </p>
                <Link to="/services" className="text-primary font-bold hover:underline">Learn More →</Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Personal Training" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Personal Training</h3>
                <p className="text-gray-700 mb-4">
                  Get personalized guidance and motivation from our expert trainers to achieve your fitness goals faster.
                </p>
                <Link to="/services" className="text-primary font-bold hover:underline">Learn More →</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button to="/services" variant="primary">
              VIEW ALL SERVICES
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your <span className="text-primary">Fitness Journey</span>?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Nour Gym today and take the first step towards a healthier, stronger you. 
            Our expert trainers are ready to help you achieve your fitness goals.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            JOIN NOW
          </Button>
        </div>
      </section>
      
      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our <span className="text-primary">Members Say</span></h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our members who have transformed their lives with Nour Gym.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Sarah Johnson" 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600">Member since 2019</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Joining Nour Gym was the best decision I've made for my health. The trainers are knowledgeable and supportive, 
                and the community keeps me motivated. I've lost 30 pounds and gained so much confidence!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/44.jpg" 
                  alt="Michael Chen" 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600">Member since 2020</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The personal training at Nour Gym is top-notch. My trainer created a program specifically for my goals, 
                and I've seen incredible results. The gym has state-of-the-art equipment and a great atmosphere."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Aisha Patel" 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Aisha Patel</h4>
                  <p className="text-gray-600">Member since 2021</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I love the variety of classes at Nour Gym! From yoga to HIIT, there's always something new to try. 
                The instructors are passionate and motivating, and I've met so many great people in the community."
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button to="/testimonials" variant="secondary">
              READ MORE TESTIMONIALS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;