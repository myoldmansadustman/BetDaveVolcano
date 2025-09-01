import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-orange-500/20 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M8</span>
              </div>
              <span className="text-white font-bold text-lg">M8TRX</span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionary blockchain lottery platform with cascading prize pools and volcanic excitement.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Lottery</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-400">How It Works</a></li>
              <li><a href="#" className="hover:text-orange-400">Prize Tiers</a></li>
              <li><a href="#" className="hover:text-orange-400">Recent Winners</a></li>
              <li><a href="#" className="hover:text-orange-400">Statistics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-400">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-orange-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Join our community for updates and exclusive offers.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 M8TRX. All rights reserved. • Powered by Telegram Mini Apps
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;