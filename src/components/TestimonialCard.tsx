import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  image?: string;
  occasion?: string;
}

const TestimonialCard = ({ name, rating, comment, image, occasion }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
      <div className="flex items-center mb-6">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-purple-200"
          />
        )}
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
          {occasion && (
            <p className="text-sm text-purple-600 font-medium">{occasion}</p>
          )}
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic leading-relaxed">"{comment}"</p>
    </div>
  );
};

export default TestimonialCard;