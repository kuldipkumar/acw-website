import { ShoppingCart, Clock, Users, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      category: 'Custom Cakes',
      description: 'Personalized cakes designed specifically for your special occasion',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
      items: [
        {
          name: 'Small Custom Cake',
          size: '6 inches (serves 8-10)',
          price: 'Starting from $45',
          features: ['Basic design', '2 flavors available', '24hr notice']
        },
        {
          name: 'Medium Custom Cake',
          size: '8 inches (serves 12-15)',
          price: 'Starting from $65',
          features: ['Custom design', '5 flavors available', '48hr notice']
        },
        {
          name: 'Large Custom Cake',
          size: '10 inches (serves 20-25)',
          price: 'Starting from $85',
          features: ['Complex design', 'All flavors available', '72hr notice']
        },
        {
          name: 'Multi-Tier Custom Cake',
          size: '2-3 tiers (serves 30+)',
          price: 'Starting from $150',
          features: ['Premium design', 'Multiple flavors', '1 week notice']
        }
      ]
    },
    {
      category: 'Theme Cakes',
      description: 'Creative themed cakes perfect for birthdays and special celebrations',
      image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600',
      items: [
        {
          name: 'Character Theme Cake',
          size: '8 inches',
          price: '$75 - $95',
          features: ['Popular characters', '3D elements', 'Edible prints']
        },
        {
          name: 'Sports Theme Cake',
          size: '8-10 inches',
          price: '$70 - $90',
          features: ['Team colors', 'Sports equipment design', 'Custom jersey numbers']
        },
        {
          name: 'Princess/Superhero Cake',
          size: '8 inches',
          price: '$80 - $100',
          features: ['Castle/city design', 'Figurines included', 'Special effects']
        },
        {
          name: 'Holiday Theme Cake',
          size: '8-10 inches',
          price: '$65 - $85',
          features: ['Seasonal decorations', 'Traditional flavors', 'Festive colors']
        }
      ]
    },
    {
      category: 'Cupcakes',
      description: 'Delightful individual treats perfect for parties and everyday enjoyment',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600',
      items: [
        {
          name: 'Regular Cupcakes',
          size: 'Standard size',
          price: '$3.50 each',
          features: ['6 flavors available', 'Buttercream frosting', 'Minimum order: 6']
        },
        {
          name: 'Gourmet Cupcakes',
          size: 'Standard size',
          price: '$4.50 each',
          features: ['Premium ingredients', 'Specialty toppings', 'Minimum order: 6']
        },
        {
          name: 'Mini Cupcakes',
          size: 'Bite-sized',
          price: '$2.00 each',
          features: ['Perfect for events', '4 flavors available', 'Minimum order: 12']
        },
        {
          name: 'Custom Decorated Cupcakes',
          size: 'Standard size',
          price: '$5.50 each',
          features: ['Custom designs', 'Fondant decorations', 'Minimum order: 12']
        }
      ]
    },
    {
      category: 'Donuts',
      description: 'Freshly made donuts with unique flavors and beautiful presentation',
      image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600',
      items: [
        {
          name: 'Classic Glazed Donuts',
          size: 'Regular size',
          price: '$2.50 each',
          features: ['Traditional recipe', 'Fresh daily', 'Minimum order: 6']
        },
        {
          name: 'Specialty Donuts',
          size: 'Regular size',
          price: '$3.50 each',
          features: ['Unique flavors', 'Premium toppings', 'Minimum order: 6']
        },
        {
          name: 'Filled Donuts',
          size: 'Regular size',
          price: '$4.00 each',
          features: ['Cream/jam filled', '5 filling options', 'Minimum order: 6']
        },
        {
          name: 'Mini Donuts',
          size: 'Bite-sized',
          price: '$1.50 each',
          features: ['Party perfect', 'Assorted flavors', 'Minimum order: 12']
        }
      ]
    }
  ];

  const flavors = [
    'Vanilla', 'Chocolate', 'Red Velvet', 'Strawberry', 'Lemon', 'Carrot',
    'Funfetti', 'Chocolate Chip', 'Peanut Butter', 'Coconut', 'Caramel', 'Coffee'
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-800 mb-4">
            Our Products & Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of delicious treats, from custom cakes to everyday delights. All prices are starting prices and may vary based on design complexity.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-3">
            <Clock className="h-6 w-6 text-amber-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
              <p className="text-amber-700 mb-2">
                All orders require advance notice. Custom and theme cakes need detailed consultation to ensure we create exactly what you envision.
              </p>
              <p className="text-amber-700">
                Prices may vary based on design complexity, special dietary requirements, and seasonal availability.
              </p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="space-y-16">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-bold font-serif text-gray-800 mb-4">
                    {category.category}
                  </h2>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                          <span className="text-lg font-bold text-amber-600">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{item.size}</p>
                        <ul className="space-y-1">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                              <Star className="h-3 w-3 text-amber-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Available Flavors */}
        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 mt-16">
          <h3 className="text-2xl font-bold font-serif text-gray-800 mb-6 text-center">
            Available Flavors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {flavors.map((flavor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-gray-700 font-medium">{flavor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Custom Consultations</h3>
            <p className="text-gray-600 text-sm">
              Free consultation for orders over $100 to ensure your vision comes to life perfectly
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Flexible Timing</h3>
            <p className="text-gray-600 text-sm">
              Rush orders available with 24hr notice (additional charges may apply)
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Bulk Orders</h3>
            <p className="text-gray-600 text-sm">
              Special discounts available for large orders and corporate events
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Place Your Order?
          </h3>
          <p className="text-gray-600 mb-8">
            Contact us to discuss your requirements and get a personalized quote
          </p>
          <a
            href="/order"
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Place Your Order</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;