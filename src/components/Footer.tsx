import { Cake, Instagram, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg">
                <Cake className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Alka's CakeWalk</h3>
                <p className="text-purple-200 text-sm font-medium">Joy Baked Fresh</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Creating magical moments with custom cakes, theme cakes, cupcakes, and donuts. 
              Every bite is crafted with love and attention to detail for your special occasions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/alkascakewalk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/25"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@alkascakewalk.com"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Products', href: '/products' },
                { name: 'Order', href: '/order' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-300 mt-1" />
                <div>
                  <p className="text-gray-300">Malpani Greens Society</p>
                  <p className="text-gray-300">Kaspate Wasti, Wakad, Pune</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-purple-300" />
                <p className="text-gray-300">8668281565</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-300" />
                <p className="text-gray-300">alkascakewalk@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-purple-300 mt-1" />
                <div>
                  <p className="text-gray-300">Mon-Sun: 9AM-9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Alka's CakeWalk. All rights reserved. Made with ❤️ for sweet moments.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
