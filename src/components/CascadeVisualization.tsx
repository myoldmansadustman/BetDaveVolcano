import React from 'react';

interface CascadeVisualizationProps {
  isVisible: boolean;
  winningPot: string;
  cascadeAmount: number;
}

const CascadeVisualization: React.FC<CascadeVisualizationProps> = ({
  isVisible,
  winningPot,
  cascadeAmount
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gradient-to-br from-orange-900/90 to-red-900/90 rounded-2xl p-8 max-w-md mx-4 border border-orange-500/30">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">Volcanic Eruption!</h3>
          <p className="text-orange-200 mb-4">
            {winningPot} has erupted and won the jackpot!
          </p>
          
          <div className="bg-black/30 rounded-lg p-4 mb-4">
            <div className="text-orange-400 text-sm font-medium">Cascade Amount</div>
            <div className="text-white text-2xl font-bold">
              ${cascadeAmount.toLocaleString()}
            </div>
            <div className="text-gray-300 text-sm">
              Flowing to connected volcanoes...
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          
          <button 
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-200"
            onClick={() => window.location.reload()}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CascadeVisualization;