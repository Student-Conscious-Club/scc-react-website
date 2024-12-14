'use client';
import { motion } from 'framer-motion';

const PersonCard = ({ person }) => (
  <div className="sm:max-w-full sm:w-full flex flex-col text-center sm:text-start sm:flex-row items-center gap-4 rounded-xl">
    <img
      src={person.image}
      alt={person.name}
      className="rounded-xl aspect-square max-w-40 object-cover"
    />
    <div>
      <p className="text-body-large text-secondary-800 font-bold">
        {person.name}
      </p>
      <p className="text-body text-secondary-600 whitespace-pre-line">
        {person.post}
      </p>
      {person.links && person.links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {person.links.map((link, linkIdx) => (
            <a
              key={linkIdx}
              href={link.href}
              className="text-primary-600 hover:underline"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default function AlternatingSection({ sections = [] }) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => (
        <section 
          key={section.title}
          className={`py-20 ${index % 2 === 0 ? 'bg-warm-50' : 'bg-primary-100'}`}
        >
          <div className="container mx-auto px-6">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`space-y-6 ${
                  index % 2 === 0 ? 'order-1' : 'order-2 md:order-2'
                }`}
              >
                <h2 className="text-heading-2 font-heading font-bold">
                  {section.title}
                </h2>
                {section.type === 'list' ? (
                  <ul className="space-y-4">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="text-primary-500 text-xl">•</span>
                        <p className="text-secondary-800 text-body-large">{item}</p>
                      </li>
                    ))}
                  </ul>
                ) : section.type === 'person' ? (
                  <div className="flex flex-col gap-8">
                    {section.content.map((person, idx) => (
                      <PersonCard key={idx} person={person} />
                    ))}
                  </div>
                ) : (
                  <p className="text-body-large text-secondary-600">
                    {section.content}
                  </p>
                )}
                
                {/* Links Section */}
                {section.links && section.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-6">
                    {section.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative ${
                  index % 2 === 0 ? 'order-2' : 'order-1 md:order-1'
                }`}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}