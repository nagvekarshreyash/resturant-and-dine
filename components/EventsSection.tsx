"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Phone } from "lucide-react";

export function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "CATERING",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033",
      description: "If you're interested in having us cater our fare on a special occasion, get in touch with our team and we will work with you on coming up with the perfect menu for the event.",
    },
    {
      title: "POP-UPS",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      description: "We love taking our food to folks outside Goa. If you're planning a pop-up and would like to have Padaria Prazeres there, we can work on a way to make it happen.",
    },
    {
      title: "PADARIA AFTER DARK",
      image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f",
      description: "From transforming our café into a Christmas wonderland to staying open through Easter night, at Padaria Prazeres, we like to shake things up once in a while.",
    },
  ];

  return (
    <section ref={ref} className="py-10 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-5xl font-serif text-[#39426A] mb-6">EVENTS</h2>
        <p className="text-lg text-gray-700 mb-12">
          Whether it's a party, a pop-up, or a picnic, we love being a part of all your special days. Bring us your requirements, and we'll bring you the flavours. Our team is available on{" "}
          <span className="inline-flex items-center text-[#39426A] font-semibold">
            <Phone className="h-4 w-4 mr-1" />
            (+91) 93228 06130
          </span>
          .
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#39426A] mb-4">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}