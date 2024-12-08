'use client'
import { motion } from "framer-motion";

export default function FeatureSection({ title, subtitle, features }) {
    return (
        <section className="py-20 bg-neutral-50 relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            >
                <div className="absolute top-3 left-0 w-1/3 h-1/3 bg-primary-500 rounded-full filter blur-3xl opacity-30" />
                <div className="absolute bottom-3 right-0 w-1/4 h-1/4 bg-primary-400 rounded-full filter blur-3xl opacity-30" />
            </motion.div>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-heading-2 font-heading font-bold text-secondary-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-body-large text-secondary-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative bg-white p-6 rounded-xl shadow-feature-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="absolute inset-0">
                                <div className="absolute top-0 right-0 w-full h-1/2 bg-primary-500/5 rounded-bl-[100px]" />
                                <div className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-secondary-500/5 rounded-tr-[100px]" />
                            </div>
                            <div className="relative z-10">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-heading-4 font-heading font-semibold text-secondary-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-secondary-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
