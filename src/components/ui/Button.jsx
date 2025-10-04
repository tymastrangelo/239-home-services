import React from 'react';

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-block font-bold rounded-md transition-all duration-300 transform hover:scale-105';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const variantStyles = {
    primary: 'bg-brand-primary text-white hover:bg-opacity-90',
    secondary: 'bg-brand-secondary text-brand-primary hover:bg-opacity-90',
    accent: 'bg-brand-accent text-brand-primary hover:bg-yellow-400',
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;