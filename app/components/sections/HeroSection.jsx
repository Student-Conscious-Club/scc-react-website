'use client';
import { MotionDiv } from '../MotionDiv';

export default function HeroSection({ title, highlightedText, description }) {
return (
    <section className="pt-40 relative bg-gradient-to-br from-warm-50 to-warm-100 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-full h-1/2 bg-primary-500/5 rounded-bl-[100px]" />
            <div className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-secondary-500/5 rounded-tr-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative">
            <MotionDiv
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl mx-auto text-center"
            >
                <h1 className="text-display font-heading font-bold text-secondary-900 mb-6">
                    {title} <span className="text-primary-500">{highlightedText}</span>
                </h1>
                <p className="text-body-large text-secondary-600">
                    {description}
                </p>
            </MotionDiv>
        </div>
    </section>
);
}