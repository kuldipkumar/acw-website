import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Award, Users, Sparkles } from 'lucide-react';
import Carousel from '../components/Carousel';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  // Sample images for carousel - replace with actual S3 URLs
  const featuredCakes = [
    'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'The birthday cake was absolutely perfect! My daughter loved the unicorn theme and it tasted amazing.',
      occasion: 'Birthday Party'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Outstanding wedding cake! Beautiful design and incredibly delicious. All our guests were impressed.',
      occasion: 'Wedding'
    },
    {
      name: 'Emma Davis',
      rating: 5,
      comment: 'The cupcakes for our office party were a huge hit. Great flavors and beautiful presentation.',
      occasion: 'Corporate Event'
    }
  ];

  const stats = [
    { icon: Heart, number: '500+', label: 'Happy Customers' },
    { icon: Award, number: '1000+', label: 'Cakes Created' },
    { icon: Star, number: '4.9', label: 'Average Rating' },
    { icon: Users, number: '50+', label: 'Events Catered' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-purple-500 mr-2 animate-pulse" />
              <span className="text-purple-600 font-semibold text-lg">Premium Bakery Experience</span>
              <Sparkles className="h-8 w-8 text-pink-500 ml-2 animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-6 leading-tight">
              Alka's CakeWalk
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed mb-4">
              Where <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Sweet Dreams Come True</span>
            </p>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Handcrafted custom cakes, theme cakes, cupcakes, and donuts made with love for your special moments
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/gallery"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-3"
            >
              <span>View Our Gallery</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/order"
              className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold border-2 border-purple-500 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
            >
              Place Your Order
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                <stat.icon className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cakes Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              Our Latest <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Creations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most recent cake masterpieces, each one crafted with precision and love
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12">
            <Carousel images={featuredCakes} />
          </div>
          
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-3 text-purple-600 hover:text-purple-700 font-bold text-xl group"
            >
              <span>See All Our Work</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Specialties</span>
            </h2>
            <p className="text-xl text-gray-600">
              From custom celebrations to everyday treats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Custom Cakes',
                image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Personalized cakes for your special occasions',
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Theme Cakes',
                image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Creative themed designs for memorable celebrations',
                gradient: 'from-pink-500 to-pink-600'
              },
              {
                title: 'Cupcakes',
                image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Delightful individual treats in various flavors',
                gradient: 'from-rose-500 to-rose-600'
              },
              {
                title: 'Donuts',
                image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Freshly made donuts with unique toppings',
                gradient: 'from-indigo-500 to-indigo-600'
              }
            ].map((product, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 inline-flex items-center space-x-3"
            >
              <span>View All Products</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              What Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a
              href="https://g.page/alkascakewalk/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-purple-600 hover:text-purple-700 font-bold text-xl group"
            >
              <span>Leave a Google Review</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black mb-6">
            Ready to Create Something Sweet?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Let's make your celebration unforgettable with our custom creations
          </p>
          <Link
            to="/order"
            className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 inline-flex items-center space-x-3"
          >
            <span>Start Your Order</span>
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;