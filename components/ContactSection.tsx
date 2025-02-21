"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Clock, Facebook, Instagram } from "lucide-react";

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-6 bg-white" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#39426A] mb-6">CONTACT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-start gap-4"
          >
            <Phone className="h-6 w-6 text-[#39426A] mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Mobile</h3>
              <p className="text-gray-700">(+91) 93228 06130</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-start gap-4"
          >
            <Clock className="h-6 w-6 text-[#39426A] mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Open on</h3>
              <p className="text-gray-700">Tuesday – Sunday</p>
              <p className="text-gray-700">9.00AM – 6.30PM</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-1">Address</h3>
            <p className="text-gray-700">
              Models Celeste, Opp. Celebrity, Caranzalem,<br />
              Panjim, Goa – 403002
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://facebook.com/padaria_prazeres"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#39426A] hover:text-[#2a2f4c] transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/padaria_prazeres"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#39426A] hover:text-[#2a2f4c] transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <span className="text-gray-700">padaria_prazeres</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}