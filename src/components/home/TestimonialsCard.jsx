import { cn } from "@/utils/tailwind-merge.until";

export const TestimonialsCard = ({
  testimonial = {
    image: 'img/default.png',
    text: 'Vestibulum dictum, nulla id facilisis dictum, ligula nisi tristique dui, eget tristique dui, egettristique dui, egettristique dui, eget',
    name: 'John Doe',
  },
  className = '',
}) => {
  return (
    <div className={cn('p-6 rounded-[20px] shadow-lg gradient', className)}>
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt="User"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <div className="ml-4">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-white ${
                  index < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
        </div>
      </div>
      <p className="text-white">{testimonial.text}</p>
    </div>
  );
};
