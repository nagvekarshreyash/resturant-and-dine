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
    <section ref={ref} className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-5xl font-serif text-[#39426A] mb-12">CONTACT</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full h-[400px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.3465463998897!2d73.8079!3d15.4847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI5JzA1LjAiTiA3M8KwNDgnMjguNCJF!5e0!3m2!1sen!2sin!4v1635167563576!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}