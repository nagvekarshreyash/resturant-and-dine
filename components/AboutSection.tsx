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
    <section ref={ref} className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-5xl font-serif text-[#39426A] mb-12">ABOUT</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Located in a residential neighbourhood in Miramar, Padaria Prazeres is a bakery-café that
              serves up a slice of Europe on the sandy shores of Goa.
            </p>
            <p className="text-lg text-gray-700">
              Padaria Prazeres was established in April 2021 by husband-wife duo Ralph Prazeres and
              Stacy Gracias.
            </p>
            <p className="text-lg text-gray-700">
              Ralph is an alumnus of Le Cordon Bleu, London, and has worked at award-winning
              restaurants such as St John's, Clos Maggiore, The Rosewood London and Bao. He has even
              done a stint at the world-famous Noma in Copenhagen, besides working in a few kitchens
              in Lisbon and around Europe.
            </p>
            <p className="text-lg text-gray-700">
              Stacy, meanwhile, brings with her a strong background in finance, having worked with the
              likes of Rothschild & Co, RBS and HSBC in London. Despite this being her first brush with
              hospitality, she does a stellar job managing the accounts and running front-of-house
              operations at the café.
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/about-image.jpg"
              alt="Ralph and Stacy"
              width={600}
              height={800}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}