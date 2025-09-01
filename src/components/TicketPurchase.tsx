import React, { useState } from 'react';

interface TicketPurchaseProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPot?: string;
}

const TicketPurchase: React.FC<TicketPurchaseProps> = ({ isOpen, onClose, selectedPot }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedTier, setSelectedTier] = useState('all');
  
  const ticketPrice = 5; // $5 per ticket
  const totalCost = ticketCount * ticketPrice;

  if (!isOpen) return null;

  const tiers = [
    { id: 'all', name: 'All Volcanoes', color: 'from-purple-500 to-pink-500' },
    { id: 'mega', name: 'Mega ($1M)', color: 'from-orange-500 to-red-600' },
    { id: 'large', name: 'Large ($250K)', color: 'from-red-500 to-orange-500' },
    { id: 'medium', name: 'Medium ($100K)', color: 'from-blue-500 to-cyan-500' },
    { id: 'small', name: 'Small ($10K)', color: 'from-green-500 to-emerald-500' },
    { id: 'mini', name: 'Mini ($1K)', color: 'from-purple-500 to-violet-500' }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 max-w-md w-full border border-orange-500/30">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white">Buy Tickets</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>
        
        {/* Ticket Count */}
        <div className="mb-6">
          <label className="text-white font-medium block mb-2">Number of Tickets</label>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
              className="bg-gray-700 hover:bg-gray-600 text-white w-10 h-10 rounded-full"
            >
              -
            </button>
            <span className="text-white text-xl font-bold w-12 text-center">{ticketCount}</span>
            <button 
              onClick={() => setTicketCount(ticketCount + 1)}
              className="bg-gray-700 hover:bg-gray-600 text-white w-10 h-10 rounded-full"
            >
              +
            </button>
          </div>
        </div>
        
        {/* Tier Selection */}
        <div className="mb-6">
          <label className="text-white font-medium block mb-2">Target Volcanoes</label>
          <div className="space-y-2">
            {tiers.map(tier => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`w-full p-3 rounded-lg border-2 transition-all ${
                  selectedTier === tier.id 
                    ? 'border-orange-500 bg-gradient-to-r ' + tier.color + ' text-white' 
                    : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500'
                }`}
              >
                {tier.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Cost Summary */}
        <div className="bg-black/30 rounded-lg p-4 mb-6">
          <div className="flex justify-between text-gray-300 mb-2">
            <span>Tickets ({ticketCount}x)</span>
            <span>${ticketPrice} each</span>
          </div>
          <div className="flex justify-between text-white text-xl font-bold">
            <span>Total</span>
            <span>${totalCost}</span>
          </div>
        </div>
        
        {/* Purchase Button */}
        <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 rounded-full transition-all duration-200 transform hover:scale-105">
          Purchase Tickets
        </button>
        
        <p className="text-gray-400 text-sm text-center mt-4">
          Powered by M8TRX • Secure & Fair
        </p>
      </div>
    </div>
  );
};

export default TicketPurchase;