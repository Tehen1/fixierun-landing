import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface AnimatedCardProps {
children: ReactNode;
className?: string;
glowEffect?: boolean; 
gradientBorder?: boolean;
hoverScale?: number;
backgroundStyle?: 'solid' | 'gradient' | 'glass';
colorScheme?: {
    from: string;
    via?: string;
    to: string;
};
}

export const AnimatedCard: FC<AnimatedCardProps> = ({
children,
className,
glowEffect = false,
gradientBorder = true,
hoverScale = 1.02,
backgroundStyle = 'solid',
colorScheme = {
    from: 'from-primary-500',
    via: 'via-secondary-500',
    to: 'to-accent-500'
}
}) => {
const baseStyles = 'rounded-xl p-6 transition-all duration-300 ease-in-out';

const gradientBorderStyles = gradientBorder
    ? `border-2 border-transparent bg-clip-padding backdrop-filter backdrop-blur-sm
    before:absolute before:inset-0 before:-z-10 before:rounded-xl
    before:bg-gradient-to-r before:${colorScheme.from} 
    ${colorScheme.via ? `before:${colorScheme.via}` : ''} 
    before:${colorScheme.to}`
    : '';

const glowStyles = glowEffect
    ? `after:absolute after:inset-0 after:-z-20 after:rounded-xl
    after:bg-gradient-to-r after:${colorScheme.from} 
    ${colorScheme.via ? `after:${colorScheme.via}` : ''} 
    after:${colorScheme.to} after:blur-xl after:opacity-40
    after:transition-opacity hover:after:opacity-60`
    : '';

const backgroundStyles = {
    solid: 'bg-background/80',
    gradient: `bg-gradient-to-r ${colorScheme.from} ${colorScheme.via || ''} ${colorScheme.to}`,
    glass: 'bg-background/20 backdrop-blur-lg'
}[backgroundStyle];

return (
    <motion.div
    className={cn(
        'relative overflow-hidden',
        baseStyles,
        backgroundStyles,
        gradientBorderStyles,
        glowStyles,
        className
    )}
    whileHover={{ scale: hoverScale }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
    }}
    >
    {children}
    </motion.div>
);
}

