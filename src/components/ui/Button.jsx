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
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide rounded-sm transition-colors duration-200';

  const variantStyles = {
    primary: 'bg-ink text-white hover:bg-ink-soft',
    accent: 'bg-brass text-ink-deep hover:bg-brass-dark hover:text-white',
    // for use on dark/photo backgrounds
    ghost: 'border border-white/60 text-white hover:bg-white/10',
    outline: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-white',
  };

  const sizeStyles = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
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
