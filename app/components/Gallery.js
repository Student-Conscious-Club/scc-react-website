'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BiX } from 'react-icons/bi';
import { Dialog as HeadlessDialog } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { Pagination } from 'swiper/modules';

// Remove gallery.css import
import './gallery.css';

export default function Gallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [initialSlide, setInitialSlide] = useState(0);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedImage]);

    const handleImageClick = (imageSrc) => {
        const index = images.findIndex(img => img.src === imageSrc);
        setInitialSlide(index);
        setSelectedImage(imageSrc);
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer rounded-lg overflow-hidden"
                        onClick={() => handleImageClick(image.src)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-32 object-cover"
                        />
                    </motion.div>
                ))}
            </div>

            {selectedImage && (
                <HeadlessDialog
                    open={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    className="relative z-50"
                >
                    <div className="fixed inset-0 bg-black/95" aria-hidden="true" />
                    
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <HeadlessDialog.Panel className="relative w-full max-w-[90vw] h-[90vh] bg-black rounded-lg overflow-hidden">
                            <button
                                className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
                                onClick={() => setSelectedImage(null)}
                            >
                                <BiX className="text-4xl" />
                            </button>
                            <Swiper
                                modules={[Pagination]}
                                pagination={{
                                    clickable: true,
                                }}
                                initialSlide={initialSlide}
                                className="gallery-swiper !h-full !w-full [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:mx-1 [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:!bg-white [&_.swiper-pagination-bullet-active]:scale-125"
                            >
                                {images.map((image) => (
                                    <SwiperSlide key={image.id} className="!flex !items-center !justify-center !h-full">
                                        <div className="flex items-center justify-center w-full h-full p-4">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="max-h-[80vh] max-w-[80vw] w-auto h-auto object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </HeadlessDialog.Panel>
                    </div>
                </HeadlessDialog>
            )}
        </>
    );
}