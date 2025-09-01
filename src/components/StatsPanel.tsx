import React from 'react';

interface StatsPanelProps {
  totalTicketsSold: number;
  recentWinners: Array<{
    pot: string;
    amount: number;
    winner: string;
    time: string;
  }>;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ totalTicketsSold, recentWinners }) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 mx-4 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Live Activity
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-orange-400 text-sm font-medium mb-2">Total Tickets Sold</div>
          <div className="text-white text-2xl font-bold mb-4">
            {totalTicketsSold.toLocaleString()}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Mega Volcano</span>
              <span className="text-orange-400">12,543 tickets</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Large Volcanoes</span>
              <span className="text-red-400">8,921 tickets</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Medium Volcanoes</span>
              <span className="text-blue-400">15,667 tickets</span>
            </div>
          </div>
        </div>
        
        <div>
          <div className="text-green-400 text-sm font-medium mb-2">Recent Winners</div>
          <div className="space-y-3">
            {recentWinners.map((winner, index) => (
              <div key={index} className="bg-black/20 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white font-medium text-sm">{winner.pot}</div>
                    <div className="text-gray-400 text-xs">{winner.winner}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-sm">
                      ${winner.amount.toLocaleString()}
                    </div>
                    <div className="text-gray-500 text-xs">{winner.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;