import { useState } from 'react';
import { Filter, Search, Heart } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample images organized by category - replace with actual S3 URLs
  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'custom',
      title: 'Princess Birthday Cake',
      description: 'Custom pink and gold princess cake with edible crown'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'theme',
      title: 'Superhero Theme Cake',
      description: 'Batman themed cake with 3D decorations'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'cupcakes',
      title: 'Wedding Cupcakes',
      description: 'Elegant vanilla cupcakes with buttercream roses'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'donuts',
      title: 'Glazed Donuts',
      description: 'Fresh glazed donuts with colorful sprinkles'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'custom',
      title: 'Wedding Cake',
      description: 'Three-tier white wedding cake with flowers'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'theme',
      title: 'Unicorn Cake',
      description: 'Magical unicorn cake with rainbow layers'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'cupcakes',
      title: 'Chocolate Cupcakes',
      description: 'Rich chocolate cupcakes with ganache topping'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'donuts',
      title: 'Artisan Donuts',
      description: 'Gourmet donuts with unique flavors and toppings'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1000769/pexels-photo-1000769.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'custom',
      title: 'Birthday Celebration',
      description: 'Custom birthday cake with personalized message'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'theme',
      title: 'Floral Theme Cake',
      description: 'Beautiful floral themed cake with sugar flowers'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'cupcakes',
      title: 'Red Velvet Cupcakes',
      description: 'Classic red velvet cupcakes with cream cheese frosting'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1631043/pexels-photo-1631043.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'donuts',
      title: 'Specialty Donuts',
      description: 'Assorted specialty donuts with premium toppings'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Items', color: 'from-purple-500 to-pink-500' },
    { value: 'custom', label: 'Custom Cakes', color: 'from-purple-500 to-purple-600' },
    { value: 'theme', label: 'Theme Cakes', color: 'from-pink-500 to-pink-600' },
    { value: 'cupcakes', label: 'Cupcakes', color: 'from-rose-500 to-rose-600' },
    { value: 'donuts', label: 'Donuts', color: 'from-indigo-500 to-indigo-600' }
  ];

  const filteredImages = images.filter(image => {
    const matchesFilter = filter === 'all' || image.category === filter;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of handcrafted cakes, cupcakes, and treats. Each creation tells a story of celebration and joy.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    filter === category.value
                      ? `bg-gradient-to-r ${category.color} text-white shadow-2xl shadow-purple-500/25`
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-500 hover:text-purple-600 shadow-lg'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Filter className="h-5 w-5" />
                    <span>{category.label}</span>
                  </span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search our gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 w-96 font-medium shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-6 w-6 text-white hover:text-red-400 cursor-pointer transition-colors duration-200" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-600 line-clamp-2 leading-relaxed">
                  {image.description}
                </p>
                <div className="mt-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                    image.category === 'custom' ? 'bg-purple-100 text-purple-800' :
                    image.category === 'theme' ? 'bg-pink-100 text-pink-800' :
                    image.category === 'cupcakes' ? 'bg-rose-100 text-rose-800' :
                    'bg-indigo-100 text-indigo-800'
                  }`}>
                    {categories.find(cat => cat.value === image.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-6">
              <Search className="h-20 w-20 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No items found</h3>
            <p className="text-gray-500 text-lg">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More */}
        {filteredImages.length > 0 && (
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
              Load More Images
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;