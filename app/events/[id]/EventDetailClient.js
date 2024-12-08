'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BiTime, BiLocationPlus, BiCalendar, BiX } from 'react-icons/bi';
import Gallery from '../../components/Gallery';

export default function EventDetailClient({ event, galleryImages }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Event Poster */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="sticky top-8"
                        >
                            <div className="rounded-xl overflow-hidden shadow-xl">
                                {event.image ? (
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-auto"
                                        onClick={() => setSelectedImage(event.image)}
                                    />
                                ) : (
                                    <div className="aspect-[3/4] bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-600 flex items-center justify-center">
                                        <span className="text-8xl text-white/90 font-heading">
                                            {event.title
                                                .split(' ')
                                                .map(word => word[0])
                                                .join('')}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Event Details */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-secondary-50 rounded-xl">
                            <div className="flex items-center gap-3">
                                <BiCalendar className="text-2xl text-primary-500" />
                                <div>
                                    <p className="text-sm text-secondary-600">Date</p>
                                    <p className="font-medium">
                                        {new Date(event.date).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <BiTime className="text-2xl text-primary-500" />
                                <div>
                                    <p className="text-sm text-secondary-600">Time</p>
                                    <p className="font-medium">{event.time}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <BiLocationPlus className="text-2xl text-primary-500" />
                                <div>
                                    <p className="text-sm text-secondary-600">Venue</p>
                                    <p className="font-medium">{event.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2>About this Event</h2>
                            <p>{event.description}</p>
                            <h2>Participation</h2>
                            <p>This event had {event.participants}.</p>
                        </div>

                        {/* Image Gallery - only show if there are images */}
                        {galleryImages && galleryImages.length > 0 && (
                            <div className="space-y-4">
                                <h2 className="text-heading-3 font-heading font-bold text-secondary-900">
                                    Event Gallery
                                </h2>
                                <Gallery images={galleryImages} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Image Viewer Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/80 hover:text-white"
                        onClick={() => setSelectedImage(null)}
                    >
                        <BiX className="text-4xl" />
                    </button>
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={selectedImage}
                        alt="Enlarged view"
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                    />
                </motion.div>
            )}
        </section>
    );
}