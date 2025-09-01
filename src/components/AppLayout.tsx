import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import LotteryHeader from './LotteryHeader';
import InteractiveVolcanicField from './InteractiveVolcanicField';
import CascadeVisualization from './CascadeVisualization';
import TicketPurchase from './TicketPurchase';
import StatsPanel from './StatsPanel';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background volcanic landscape */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68b59d759a8543794300e811_1756732836059_f8c2d465.webp')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <LotteryHeader totalPrizePool={2878000} activeDraws={78} />
        <InteractiveVolcanicField />
        
        <StatsPanel 
          totalTicketsSold={156789}
          recentWinners={[
            { pot: 'Small Volcano #7', amount: 10000, winner: '0x1234...', time: '2 min ago' },
            { pot: 'Mini Volcano #23', amount: 1000, winner: '0x5678...', time: '5 min ago' },
            { pot: 'Medium Volcano #3', amount: 100000, winner: '0x9abc...', time: '12 min ago' }
          ]}
        />
        
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
