import Button from '../components/Button';

const Trainers = () => {
  // Trainers data
  const trainers = [
    {
      id: 1,
      name: 'Ahmed Nour',
      role: 'Founder & Head Trainer',
      specialties: ['Bodybuilding', 'Strength Training', 'Nutrition'],
      bio: 'With over 15 years of experience in the fitness industry, Ahmed founded Nour Gym with a vision to create a supportive community focused on holistic wellness. He holds multiple certifications in personal training, nutrition, and sports medicine.',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Yoga & Pilates Instructor',
      specialties: ['Yoga', 'Pilates', 'Meditation'],
      bio: 'Sarah brings tranquility and mindfulness to Nour Gym with her extensive background in yoga and pilates. Certified in multiple yoga disciplines, she focuses on helping members improve flexibility, balance, and mental wellness through mindful movement.',
      image: 'https://images.unsplash.com/photo-1609899464926-c71f257cff75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Cardio & HIIT Specialist',
      specialties: ['Cardio Training', 'HIIT', 'Weight Loss'],
      bio: "'Michael's high-energy approach to fitness has helped countless members achieve their weight loss and endurance goals. A former competitive athlete, he specializes in designing cardio and HIIT programs that are both effective and enjoyable.'",
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e6349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      id: 4,
      name: 'Aisha Patel',
      role: 'Zumba & Dance Fitness Instructor',
      specialties: ['Zumba', 'Dance Fitness', 'Aerobics'],
      bio: 'Aisha brings the joy of movement to Nour Gym with her infectious enthusiasm for dance fitness. With a background in professional dance and certified in Zumba instruction, she creates workouts that feel more like a party than exercise.',
      image: 'https://images.unsplash.com/photo-1607081692251-d689f1b9af84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      id: 5,
      name: 'David Rodriguez',
      role: 'Strength & Conditioning Coach',
      specialties: ['Strength Training', 'Sports Performance', 'Functional Fitness'],
      bio: 'David specializes in helping athletes and fitness enthusiasts take their performance to the next level. With a degree in Exercise Science and experience training professional athletes, he brings expert knowledge in strength and conditioning to the Nour Gym team.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
    },
    {
      id: 6,
      name: 'Emma Wilson',
      role: 'Nutrition & Wellness Coach',
      specialties: ['Nutrition Planning', 'Weight Management', 'Holistic Wellness'],
      bio: 'Emma helps members achieve their fitness goals through proper nutrition and lifestyle changes. As a certified nutritionist and wellness coach, she provides personalized guidance to complement your fitness routine and maximize results.',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      id: 7,
      name: 'James Thompson',
      role: 'Senior Personal Trainer',
      specialties: ['Personal Training', 'Body Transformation', 'Rehabilitation'],
      bio: 'James has a passion for helping clients transform their bodies and lives through personalized training. With expertise in rehabilitation and corrective exercise, he specializes in creating safe, effective programs for clients of all fitness levels and backgrounds.',
      image: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 8,
      name: 'Sophia Kim',
      role: 'Group Fitness Coordinator',
      specialties: ['Group Fitness', 'Boot Camp', 'Circuit Training'],
      bio: "'Sophia brings energy and expertise to Nour Gym's group fitness programs. With experience managing fitness programs for major health clubs, she designs and leads engaging group workouts that build both fitness and community.'",
      image: 'https://images.unsplash.com/photo-1593476123561-9516f2097158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-primary">Trainers</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Our team of certified fitness professionals is dedicated to helping you achieve your goals.
          </p>
        </div>
      </section>
      
      {/* Trainers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Expert <span className="text-primary">Guidance</span></h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Nour Gym, we pride ourselves on having a team of highly qualified, passionate fitness professionals. 
              Each trainer brings unique expertise and a commitment to helping you succeed on your fitness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-primary font-semibold mb-3">{trainer.role}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-sm text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm">{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional <span className="text-primary">Certifications</span></h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our trainers hold certifications from the industry's most respected organizations, ensuring you receive 
              expert guidance based on the latest research and best practices in fitness and wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold mb-2">NASM</div>
              <p className="text-gray-700">National Academy of Sports Medicine</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold mb-2">ACE</div>
              <p className="text-gray-700">American Council on Exercise</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold mb-2">ISSA</div>
              <p className="text-gray-700">International Sports Sciences Association</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold mb-2">ACSM</div>
              <p className="text-gray-700">American College of Sports Medicine</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Train With The <span className="text-primary">Best</span></h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to work with our expert trainers? Schedule a consultation today 
            and take the first step toward achieving your fitness goals.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            SCHEDULE A CONSULTATION
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Trainers;