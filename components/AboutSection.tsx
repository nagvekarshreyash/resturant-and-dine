"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="about" className="py-6 bg-gray-50 lg:pl-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#39426A] mb-4">Miri | Global Fusion Dining</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-700">
              A unique innovative culinary experience in your neighborhood, Miri offers a blend of global flavors and local ingredients.
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Established with a passion for food, Miri aims to create memorable dining experiences for all guests.
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Our chefs bring expertise from around the world, crafting dishes that celebrate diverse culinary traditions.
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Join us for a delightful journey through flavors, where every meal is a celebration of creativity and taste.
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative md:ml-6"
          >
            <Image
              src="/images/dining.jpeg"
              alt="Dining Experience"
              width={400}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}