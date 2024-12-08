import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const TestimonialCard = ({ name, role, quote, image }) => {
  const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366F1&color=fff`;

  return (
    <motion.div 
      className="w-[400px] h-[200px] mx-4 bg-white rounded-xl p-6 shadow-feature-card flex flex-col justify-between"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex-1">
        <p className="text-secondary-600 italic line-clamp-3">{quote}</p>
      </div>
      
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-neutral-100">
        <img 
          src={fallbackImage}
          alt={name} 
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
        <div className="min-w-0">
          <h4 className="font-heading font-semibold text-secondary-900 truncate">{name}</h4>
          <p className="text-sm text-secondary-600 truncate">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialSection({ testimonials }) {
  return (
    <section className="py-20 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-2 font-heading font-bold text-secondary-900 mb-4">
            What Our Members Say
          </h2>
          <p className="text-body-large text-secondary-600 max-w-2xl mx-auto">
            Hear from our amazing community members
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-neutral-50 via-neutral-50/10 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-neutral-50 via-neutral-50/10 to-transparent z-10 pointer-events-none" />

          {/* First Track */}
          <div className="mb-12">
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover={true}
              className="py-4"
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
              ))}
            </Marquee>
          </div>

          {/* Second Track */}
          <div>
            <Marquee
              gradient={false}
              speed={30}
              pauseOnHover={true}
              direction="right"
              className="py-4"
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.name}-reverse-${index}`} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}