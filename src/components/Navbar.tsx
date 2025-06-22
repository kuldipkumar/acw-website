import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cake, Instagram, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Products', href: '/products' },
    { name: 'Order', href: '/order' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-xl shadow-xl fixed w-full z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-500 p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Cake className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                Alka's CakeWalk
              </span>
              <p className="text-sm text-gray-600 -mt-1 font-medium">Joy Baked Fresh</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-200'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
              <a
                href="https://instagram.com/alkas_cake_walk_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-pink-500 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/8668281565"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-green-500 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-200"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-purple-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-4 px-4 py-3">
              <a
                href="https://instagram.com/alkascakewalk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-pink-500 hover:text-pink-600 font-medium"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-500 hover:text-green-600 font-medium"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;