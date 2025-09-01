import React from 'react';

interface LotteryHeaderProps {
  totalPrizePool: number;
  activeDraws: number;
}

const LotteryHeader: React.FC<LotteryHeaderProps> = ({ totalPrizePool, activeDraws }) => {
  return (
    <div className="relative z-10 text-center py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3 flex items-center justify-center">
            <span className="text-white font-bold text-sm">M8</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            M8TRX Volcanic Lottery
          </h1>
        </div>
        
        <p className="text-gray-200 text-lg mb-6">
          Experience the power of cascading jackpots across 78 volcanic prize pools
        </p>
        
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
            <div className="text-orange-400 text-sm font-medium">Total Prize Pool</div>
            <div className="text-white text-xl font-bold">
              ${totalPrizePool.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
            <div className="text-blue-400 text-sm font-medium">Active Draws</div>
            <div className="text-white text-xl font-bold">{activeDraws}</div>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default LotteryHeader;