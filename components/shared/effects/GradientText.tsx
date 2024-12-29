import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface GradientTextProps {
children: ReactNode;
preset?: 'primary' | 'secondary' | 'accent' | 'rainbow';
startColor?: string;
endColor?: string;
direction?: 'left' | 'right' | 'top' | 'bottom' | 'diagonal';
className?: string;
animate?: boolean;
hover?: boolean;
}

const presetStyles = {
primary: 'from-blue-400 to-indigo-600',
secondary: 'from-purple-400 to-pink-600',
accent: 'from-amber-400 to-orange-600',
rainbow: 'from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
};

const directionStyles = {
left: 'bg-gradient-to-r',
right: 'bg-gradient-to-l',
top: 'bg-gradient-to-t',
bottom: 'bg-gradient-to-b',
diagonal: 'bg-gradient-to-br',
};

export const GradientText: FC<GradientTextProps> = ({
children,
preset = 'primary',
startColor,
endColor,
direction = 'right',
className = '',
animate = false,
hover = false,
}) => {
const gradientColors = startColor && endColor
    ? `from-[${startColor}] to-[${endColor}]`
    : presetStyles[preset];

const baseStyles = twMerge(
    'bg-clip-text text-transparent',
    directionStyles[direction],
    gradientColors,
    animate && 'animate-gradient bg-[length:200%_auto]',
    hover && 'transition-all duration-300 hover:bg-[length:300%_auto]',
    className
);

return (
    <span className={baseStyles}>
    {children}
    </span>
);
};

export default GradientText;

