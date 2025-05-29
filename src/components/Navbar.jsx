import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">NOUR GYM</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link to="/trainers" className="hover:text-primary transition-colors">Trainers</Link>
          <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
          <Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black py-4 px-6 absolute top-16 left-0 right-0 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="hover:text-primary transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/trainers" className="hover:text-primary transition-colors" onClick={toggleMenu}>Trainers</Link>
            <Link to="/pricing" className="hover:text-primary transition-colors" onClick={toggleMenu}>Pricing</Link>
            <Link to="/gallery" className="hover:text-primary transition-colors" onClick={toggleMenu}>Gallery</Link>
            <Link to="/testimonials" className="hover:text-primary transition-colors" onClick={toggleMenu}>Testimonials</Link>
            <Link to="/contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;