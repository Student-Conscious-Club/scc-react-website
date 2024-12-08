"use client";
import { motion } from "framer-motion";
import { InstagramEmbed } from "react-social-media-embed";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const socialConfig = {
  instagram: "studentconsciousclub",
  facebook: "studentconsciousclub",
  youtube: "@studentconsciousclub",
  linkedin: "student-conscious-club",
};

const SocialCard = ({ platform, icon: Icon, delay, href, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden w-full h-full">
      <div className="absolute inset-0 bg-gradient-radial from-primary-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-white rounded-2xl shadow-lg shadow-secondary-200/20 backdrop-blur-sm border border-secondary-100 p-6 hover:shadow-xl transition-all duration-300 h-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-heading-4 font-heading font-semibold">{platform}</h3>
        </div>
        {children}
      </div>
    </motion.div>
  );
};

const SocialFeedSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dotted-pattern bg-[length:20px_20px] opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-wave-pattern bg-bottom bg-repeat-x" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Stay Connected
          </span>
          <h2 className="text-heading-2 font-heading font-bold text-secondary-900 mb-4">Join Our Social Community</h2>
          <p className="text-body-large text-secondary-600 max-w-2xl mx-auto">
            Follow us on social media to stay updated with our latest events, workshops, and community highlights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SocialCard platform="Instagram" icon={FaInstagram} delay={0}>

            <InstagramEmbed url={`https://www.instagram.com/${socialConfig.instagram}`} width="100%" className="w-full h-full" />
          </SocialCard>

          <SocialCard
            platform="LinkedIn"
            icon={FaLinkedinIn}
            delay={0.4}
            href={`https://www.linkedin.com/company/${socialConfig.linkedin}`}>
            <a
              href={`https://www.linkedin.com/company/${socialConfig.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-lg hover:from-[#0A66C2]/20 transition-all duration-300 w-full h-full">
              <div className="flex flex-col h-full items-center justify-center gap-4 text-center">
                {/* <FaLinkedinIn className="w-16 h-16 text-[#0A66C2]" /> */}
                <div>
                  <img src="logo.png" alt="Logo" className="mx-auto mb-8 w-32 h-32" />
                  <p className="text-secondary-900 font-medium mb-2">Connect with us on LinkedIn</p>
                  <p className="text-secondary-600 text-sm">Stay updated with our professional network</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-[#0A66C2] text-white rounded-full hover:bg-[#084e95] transition-colors duration-300">
                  Follow Us
                </button>
              </div>
            </a>
          </SocialCard>
        </div>
      </div>
    </section>
  );
};

export default SocialFeedSection;
