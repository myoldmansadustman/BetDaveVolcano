import React, { useState } from 'react';
import VolcanoCard from './VolcanoCard';
import TicketPurchase from './TicketPurchase';
import CascadeVisualization from './CascadeVisualization';

interface LotteryPot {
  id: string;
  prizeAmount: number;
  currentAmount: number;
  size: 'mega' | 'large' | 'medium' | 'small' | 'mini';
  image: string;
  isActive: boolean;
}

const InteractiveVolcanicField: React.FC = () => {
  const [selectedPot, setSelectedPot] = useState<string | null>(null);
  const [showTicketPurchase, setShowTicketPurchase] = useState(false);
  const [showCascade, setShowCascade] = useState(false);
  const [cascadeData, setCascadeData] = useState({ pot: '', amount: 0 });

  const volcanoImages = {
    mega: 'https://d64gsuwffb70l.cloudfront.net/68b59d759a8543794300e811_1756732839873_6af8509b.webp',
    large: 'https://d64gsuwffb70l.cloudfront.net/68b59d759a8543794300e811_1756732841598_17091be2.webp',
    medium: 'https://d64gsuwffb70l.cloudfront.net/68b59d759a8543794300e811_1756732850160_910b17a3.webp',
    small: 'https://d64gsuwffb70l.cloudfront.net/68b59d759a8543794300e811_1756732852037_6cef64a7.webp',
    mini: 'https://d64gsuwffb70l.cloudfront.net/68b59d759a8543794300e811_1756732857536_a731936c.webp'
  };

  const createPots = (): LotteryPot[] => {
    const pots: LotteryPot[] = [];
    
    pots.push({
      id: 'mega-1',
      prizeAmount: 1000000,
      currentAmount: 750000,
      size: 'mega',
      image: volcanoImages.mega,
      isActive: true
    });
    
    for (let i = 1; i <= 2; i++) {
      pots.push({
        id: `large-${i}`,
        prizeAmount: 250000,
        currentAmount: Math.floor(Math.random() * 200000) + 50000,
        size: 'large',
        image: volcanoImages.large,
        isActive: Math.random() > 0.3
      });
    }
    
    for (let i = 1; i <= 5; i++) {
      pots.push({
        id: `medium-${i}`,
        prizeAmount: 100000,
        currentAmount: Math.floor(Math.random() * 80000) + 20000,
        size: 'medium',
        image: volcanoImages.medium,
        isActive: Math.random() > 0.4
      });
    }
    
    for (let i = 1; i <= 20; i++) {
      pots.push({
        id: `small-${i}`,
        prizeAmount: 10000,
        currentAmount: Math.floor(Math.random() * 8000) + 2000,
        size: 'small',
        image: volcanoImages.small,
        isActive: Math.random() > 0.5
      });
    }
    
    for (let i = 1; i <= 50; i++) {
      pots.push({
        id: `mini-${i}`,
        prizeAmount: 1000,
        currentAmount: Math.floor(Math.random() * 800) + 200,
        size: 'mini',
        image: volcanoImages.mini,
        isActive: Math.random() > 0.6
      });
    }
    
    return pots;
  };

  const pots = createPots();

  const handleVolcanoClick = (potId: string) => {
    setSelectedPot(potId);
    setShowTicketPurchase(true);
  };

  return (
    <div className="relative min-h-screen py-8">
      <div className="flex justify-center mb-12">
        {pots.filter(p => p.size === 'mega').map(pot => (
          <VolcanoCard
            key={pot.id}
            {...pot}
            onClick={() => handleVolcanoClick(pot.id)}
          />
        ))}
      </div>
      
      <div className="flex justify-center gap-8 mb-10">
        {pots.filter(p => p.size === 'large').map(pot => (
          <VolcanoCard
            key={pot.id}
            {...pot}
            onClick={() => handleVolcanoClick(pot.id)}
          />
        ))}
      </div>
      
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        {pots.filter(p => p.size === 'medium').map(pot => (
          <VolcanoCard
            key={pot.id}
            {...pot}
            onClick={() => handleVolcanoClick(pot.id)}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-6 px-4">
        {pots.filter(p => p.size === 'small').map(pot => (
          <VolcanoCard
            key={pot.id}
            {...pot}
            onClick={() => handleVolcanoClick(pot.id)}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 px-4">
        {pots.filter(p => p.size === 'mini').map(pot => (
          <VolcanoCard
            key={pot.id}
            {...pot}
            onClick={() => handleVolcanoClick(pot.id)}
          />
        ))}
      </div>

      <TicketPurchase 
        isOpen={showTicketPurchase}
        onClose={() => setShowTicketPurchase(false)}
        selectedPot={selectedPot}
      />
      
      <CascadeVisualization
        isVisible={showCascade}
        winningPot={cascadeData.pot}
        cascadeAmount={cascadeData.amount}
      />
    </div>
  );
};

export default InteractiveVolcanicField;