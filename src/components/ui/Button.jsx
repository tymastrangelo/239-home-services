import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  to,
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-block font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-brand-primary text-white hover:bg-[#063a6b] focus:ring-brand-primary shadow-md',
    accent: 'bg-brand-accent text-white hover:bg-[#e89c00] focus:ring-brand-accent shadow-md',
  };

  const sizeStyles = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (to) {
    return <Link to={to} className={combinedClassName} {...props}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={combinedClassName} {...props}>{children}</a>;
  }

  return <button type={type} onClick={onClick} className={combinedClassName} {...props}>{children}</button>;
};

export default Button;