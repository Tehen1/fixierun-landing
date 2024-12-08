import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className = '' 
}) => {
  const variantStyles = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-border',
  };

  return (
    <div className={`
      inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors 
      focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
      ${variantStyles[variant]}
      ${className}
    `}>
      {children}
    </div>
  );
};
