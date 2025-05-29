import { useState } from 'react';

const Gallery = () => {
  // Gallery categories
  const categories = ['All', 'Gym Interior', 'Equipment', 'Training Sessions', 'Classes', 'Events'];
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Gallery images data
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Modern gym interior with various equipment',
      category: 'Gym Interior'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Weight training area with dumbbells',
      category: 'Equipment'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80',
      alt: 'Personal training session',
      category: 'Training Sessions'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Group of people in a cardio class',
      category: 'Classes'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      alt: 'Gym reception area',
      category: 'Gym Interior'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Woman doing deadlift with trainer',
      category: 'Training Sessions'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      alt: 'Rows of treadmills in cardio area',
      category: 'Equipment'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Group fitness class in session',
      category: 'Classes'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      alt: 'Gym anniversary celebration',
      category: 'Events'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      alt: 'Weight plates organized on rack',
      category: 'Equipment'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      alt: 'Yoga class in session',
      category: 'Classes'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Gym locker room',
      category: 'Gym Interior'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      alt: 'Personal trainer helping client with weights',
      category: 'Training Sessions'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1431&q=80',
      alt: 'Charity fitness event',
      category: 'Events'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Gym floor with various equipment',
      category: 'Gym Interior'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Fitness competition at the gym',
      category: 'Events'
    },
  ];
  
  // Filter images based on active category
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(image => image.category === activeCategory);
  
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  
  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Take a visual tour of our state-of-the-art facilities, equipment, and community.
          </p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors ${activeCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-700 text-xl">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute top-4 right-4 text-white hover:text-primary"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4">{currentImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;