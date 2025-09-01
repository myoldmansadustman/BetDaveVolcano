import React from 'react';

interface VolcanoCardProps {
  id: string;
  prizeAmount: number;
  currentAmount: number;
  image: string;
  size: 'mega' | 'large' | 'medium' | 'small' | 'mini';
  isActive: boolean;
  onClick: () => void;
}

const VolcanoCard: React.FC<VolcanoCardProps> = ({
  prizeAmount,
  currentAmount,
  image,
  size,
  isActive,
  onClick
}) => {
  const fillPercentage = (currentAmount / prizeAmount) * 100;
  
  const sizeClasses = {
    mega: 'w-32 h-32 md:w-40 md:h-40',
    large: 'w-24 h-24 md:w-28 md:h-28',
    medium: 'w-20 h-20 md:w-24 md:h-24',
    small: 'w-16 h-16 md:w-20 md:h-20',
    mini: 'w-12 h-12 md:w-16 md:h-16'
  };

  const glowClasses = {
    mega: 'shadow-orange-500/50',
    large: 'shadow-red-500/40',
    medium: 'shadow-blue-500/40',
    small: 'shadow-green-500/40',
    mini: 'shadow-purple-500/30'
  };

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-300 hover:scale-110 ${
        isActive ? 'animate-pulse' : ''
      }`}
      onClick={onClick}
    >
      <div className={`${sizeClasses[size]} relative rounded-full overflow-hidden shadow-2xl ${glowClasses[size]}`}>
        <img 
          src={image} 
          alt="Volcano" 
          className="w-full h-full object-cover"
        />
        
        {/* Fill meter overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-400/80 to-orange-500/80 transition-all duration-500"
            style={{ height: `${fillPercentage}%` }}
          />
        </div>
        
        {/* Prize amount */}
        <div className="absolute top-1 left-1 right-1 text-center">
          <div className="text-white text-xs font-bold bg-black/50 rounded px-1 py-0.5">
            ${(prizeAmount / 1000).toFixed(0)}K
          </div>
        </div>
        
        {/* Fill percentage */}
        <div className="absolute bottom-1 left-1 right-1 text-center">
          <div className="text-white text-xs font-bold bg-black/50 rounded px-1 py-0.5">
            {fillPercentage.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolcanoCard;