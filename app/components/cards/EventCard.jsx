
'use client';
import { motion } from 'framer-motion';
import { BiTime, BiLocationPlus } from 'react-icons/bi';
import Link from 'next/link';

export default function EventCard({ event, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Link href={`/events/${event.id}`}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 h-full block cursor-pointer hover:-translate-y-1 border border-secondary-100/20"
            >
                <div className="relative h-[380px] overflow-hidden">
                    {event.image ? (
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-400/90 via-primary-500/90 to-secondary-600/90 flex items-center justify-center p-8">
                            <span className="text-7xl text-white/90 font-heading text-center leading-tight">
                                {event.title.split(' ').map(word => word[0]).join('')}
                            </span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:transform md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white/90 font-medium text-sm tracking-wider uppercase mb-2">
                            {event.participants}
                        </p>
                        <div className="text-white/90 font-medium tracking-wide text-lg">
                            {new Date(event.date).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-secondary-50/50">
                    <h3 className="text-heading-4 font-heading font-semibold text-secondary-900 mb-4 line-clamp-2 group-hover:text-primary-500 transition-colors">
                        {event.title}
                    </h3>
                    <div className="space-y-2.5 text-secondary-700 text-sm">
                        <p className="flex items-center gap-2.5 group-hover:text-primary-500 transition-colors">
                            <BiTime className="text-xl opacity-75" />
                            {event.time}
                        </p>
                        <p className="flex items-center gap-2.5 group-hover:text-primary-500 transition-colors">
                            <BiLocationPlus className="text-xl opacity-75" />
                            {event.location}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}