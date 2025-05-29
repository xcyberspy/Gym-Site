import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Member for 2 years',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'Nour Gym completely transformed my fitness journey. The trainers are incredibly knowledgeable and supportive. I\'ve lost 30 pounds and gained so much confidence!',
      rating: 5,
      program: 'Personal Training'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Member for 1 year',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'The community at Nour Gym is what keeps me coming back. Everyone is so friendly and motivating. The facilities are top-notch and always clean.',
      rating: 5,
      program: 'Group Classes'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Member for 3 years',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
      quote: 'As a busy professional, I appreciate how flexible the gym hours are. The variety of classes keeps my routine fresh and exciting. I\'ve never been fitter!',
      rating: 4,
      program: 'Yoga & Cardio'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Member for 6 months',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'I was intimidated to join a gym at first, but the staff at Nour made me feel welcome from day one. The beginner-friendly approach helped me build confidence quickly.',
      rating: 5,
      program: 'Strength Training'
    },
    {
      id: 5,
      name: 'Aisha Patel',
      role: 'Member for 1.5 years',
      image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'The personal trainers at Nour Gym truly care about your progress. They create customized plans that challenge you while keeping your goals in mind.',
      rating: 5,
      program: 'Personal Training'
    },
    {
      id: 6,
      name: 'James Thompson',
      role: 'Member for 8 months',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'The Zumba classes are incredible! I never thought working out could be so fun. The instructors bring amazing energy to every session.',
      rating: 4,
      program: 'Zumba'
    },
    {
      id: 7,
      name: 'Sofia Martinez',
      role: 'Member for 2 years',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'I\'ve tried many gyms over the years, but Nour Gym stands out for its community feel and attention to detail. The nutrition guidance alongside training has been game-changing.',
      rating: 5,
      program: 'Nutrition & Training'
    },
    {
      id: 8,
      name: 'Robert Kim',
      role: 'Member for 3 months',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'Even as a newcomer, I felt right at home. The equipment is modern and well-maintained, and there\'s always someone available to help if you need it.',
      rating: 4,
      program: 'General Membership'
    },
  ];
  
  // Filter state
  const [filter, setFilter] = useState('All');
  
  // Get unique programs for filter
  const programs = ['All', ...new Set(testimonials.map(t => t.program))];
  
  // Filter testimonials based on selected program
  const filteredTestimonials = filter === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.program === filter);
  
  // Render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={i < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Members</span> Say
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Discover how Nour Gym has transformed the lives and fitness journeys of our community members.
          </p>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Program Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {programs.map((program) => (
              <button
                key={program}
                className={`px-6 py-2 rounded-full transition-colors ${filter === program ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setFilter(program)}
              >
                {program}
              </button>
            ))}
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                      {testimonial.program}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-700 text-xl">No testimonials found for this program.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Experience the Nour Gym difference for yourself and start your fitness journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/pricing" variant="primary" size="lg">
              View Membership Options
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      {/* Share Your Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Share Your Nour Gym Story</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            We'd love to hear about your experience at Nour Gym. Submit your testimonial and it might be featured on our website!
          </p>
          <Link to="/contact" className="text-primary font-semibold hover:underline">
            Submit Your Testimonial →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;