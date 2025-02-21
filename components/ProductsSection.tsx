"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function ProductsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3",
      title: "Classic Pastries",
    },
    {
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3",
      title: "Artisan Breads",
    },
    {
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3",
      title: "Special Desserts",
    },
  ];

  return (
    <section ref={ref} className="py-6 lg:pl-8" id="products">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#39426A] mb-12">PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-serif">{product.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-[#39426A] text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-[#2a2f4c] transition-colors">
            MENU HERE
          </button>
        </div>
      </motion.div>
    </section>
  );
}