import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, className, variant = 'primary', size = 'md', type = 'button' }) => {
  const baseClasses = 'font-bold rounded transition-all duration-300 inline-block text-center';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-red-700',
    secondary: 'bg-black text-white hover:bg-gray-800',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    dark: 'bg-black text-white hover:bg-primary',
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`;
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;