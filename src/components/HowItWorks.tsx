import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: '🎫',
      title: 'Buy Tickets',
      description: 'Purchase tickets for any volcano tier or all volcanoes at once'
    },
    {
      icon: '🌋',
      title: 'Volcanoes Fill',
      description: 'Watch as ticket sales fill up the volcanic prize pools'
    },
    {
      icon: '💥',
      title: 'Eruption!',
      description: 'When a volcano reaches 100%, it erupts and pays out the winner'
    },
    {
      icon: '🌊',
      title: 'Cascade Effect',
      description: '50% of the prize flows to connected volcanoes, creating chain reactions'
    }
  ];

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 mx-4 mb-8">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        How Volcanic Lottery Works
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-3">{step.icon}</div>
            <h4 className="text-white font-bold mb-2">{step.title}</h4>
            <p className="text-gray-300 text-sm">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-lg p-4 border border-orange-500/30">
          <h4 className="text-orange-400 font-bold mb-2">Cascade Multiplier Effect</h4>
          <p className="text-gray-300 text-sm">
            When larger volcanoes erupt, they trigger chain reactions that can cause multiple 
            smaller volcanoes to erupt simultaneously, creating massive payout events!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;