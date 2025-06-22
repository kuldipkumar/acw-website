import { useState } from 'react';
import { Send, Phone, MapPin, Clock, MessageCircle, Mail, CheckCircle } from 'lucide-react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    size: '',
    flavor: '',
    occasion: '',
    dateNeeded: '',
    designDetails: '',
    specialRequirements: '',
    budget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Order form submitted:', formData);
    setIsSubmitted(true);
    
    // Create WhatsApp message
    const message = `Hi! I'd like to place an order:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProduct: ${formData.productType}\nSize: ${formData.size}\nFlavor: ${formData.flavor}\nOccasion: ${formData.occasion}\nDate Needed: ${formData.dateNeeded}\nDesign Details: ${formData.designDetails}\nSpecial Requirements: ${formData.specialRequirements}\nBudget: ${formData.budget}`;
    
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your order! We've redirected you to WhatsApp where you can continue the conversation with us directly. 
              We'll get back to you within 2-4 hours to discuss your requirements in detail.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 mr-4"
              >
                Place Another Order
              </button>
              <a
                href="/"
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold border-2 border-amber-500 hover:bg-amber-50 transition-all duration-300"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const productTypes = [
    'Custom Cake',
    'Theme Cake',
    'Cupcakes',
    'Donuts',
    'Multiple Items'
  ];

  const sizes = [
    '6 inches (serves 8-10)',
    '8 inches (serves 12-15)',
    '10 inches (serves 20-25)',
    '12 inches (serves 30-35)',
    'Multi-tier',
    'Other/Not sure'
  ];

  const flavors = [
    'Vanilla',
    'Chocolate',
    'Red Velvet',
    'Strawberry',
    'Lemon',
    'Carrot',
    'Funfetti',
    'Other/Multiple flavors'
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-800 mb-4">
            Place Your Order
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your dream cake or treat! Fill out the form below and we'll contact you to discuss details and provide a personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                      Product Type *
                    </label>
                    <select
                      id="productType"
                      name="productType"
                      required
                      value={formData.productType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select a product</option>
                      {productTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
                      Size
                    </label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select size</option>
                      {sizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="flavor" className="block text-sm font-medium text-gray-700 mb-2">
                      Flavor
                    </label>
                    <select
                      id="flavor"
                      name="flavor"
                      value={formData.flavor}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select flavor</option>
                      {flavors.map((flavor) => (
                        <option key={flavor} value={flavor}>{flavor}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
                      Occasion
                    </label>
                    <input
                      type="text"
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      placeholder="Birthday, Wedding, Anniversary, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="dateNeeded" className="block text-sm font-medium text-gray-700 mb-2">
                      Date Needed *
                    </label>
                    <input
                      type="date"
                      id="dateNeeded"
                      name="dateNeeded"
                      required
                      value={formData.dateNeeded}
                      onChange={handleInputChange}
                      min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $50">Under $50</option>
                      <option value="$50 - $100">$50 - $100</option>
                      <option value="$100 - $200">$100 - $200</option>
                      <option value="$200 - $300">$200 - $300</option>
                      <option value="Over $300">Over $300</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="designDetails" className="block text-sm font-medium text-gray-700 mb-2">
                    Design Details & Theme
                  </label>
                  <textarea
                    id="designDetails"
                    name="designDetails"
                    rows={4}
                    value={formData.designDetails}
                    onChange={handleInputChange}
                    placeholder="Please describe your vision: colors, theme, specific design elements, decorations, text/message, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    rows={3}
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    placeholder="Dietary restrictions, allergies, delivery needs, rush order, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Submit Order & Contact via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">hello@alkascakewalk.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Location</p>
                    <p className="text-gray-600">123 Baker Street<br />Sweet City, SC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Business Hours</p>
                    <p className="text-gray-600">Mon-Sat: 9AM-7PM<br />Sunday: 10AM-5PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Quick Contact</h4>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+12345678900"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Process Info */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Order Process</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-medium text-gray-800">Submit Form</p>
                    <p className="text-sm text-gray-600">Fill out your order details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-medium text-gray-800">Consultation</p>
                    <p className="text-sm text-gray-600">We'll contact you within 2-4 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p className="font-medium text-gray-800">Quote & Confirmation</p>
                    <p className="text-sm text-gray-600">Receive detailed quote and timeline</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <p className="font-medium text-gray-800">Creation & Delivery</p>
                    <p className="text-sm text-gray-600">We craft your perfect treat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;