"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function FeaturedSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      logo: "/gq-logo.png",
      alt: "GQ Logo",
    },
    {
      logo: "/traveldine-logo.png",
      alt: "Traveldine Logo",
    },
    {
      logo: "/vogue-logo.png",
      alt: "Vogue Logo",
    },
    {
      logo: "/traveller-logo.png",
      alt: "Condé Nast Traveller Logo",
    },
  ];

  return (
    <section ref={ref} className="py-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#39426A] mb-12">FEATURED</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative h-12"
            >
              <Image
                src={feature.logo}
                alt={feature.alt}
                fill
                className="object-contain filter grayscale"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}