"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function GallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      alt: "Focaccia",
      className: "col-span-2 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d",
      alt: "Pastry",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94",
      alt: "Dessert",
      className: "col-span-1 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
      alt: "Bread",
      className: "col-span-2 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1504400739660-22ebeb14f00a",
      alt: "Coffee",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94",
      alt: "Pastries",
      className: "col-span-1 row-span-1",
    },
    
  ];

  return (
    <section ref={ref} className="py-6 lg:pl-8" id="gallery"> 
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#39426A] mb-12">GALLERY</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-lg ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}