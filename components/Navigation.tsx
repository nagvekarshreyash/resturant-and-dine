"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems: string[] = [
    "Home",
    "About",
    "Products",
    "Events",
    "Gallery",
    "Featured",
    "Contact",
    "Careers",
  ];

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      x: "100%",
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 50 },
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Padaria Prazeres"
          width={150}
          height={50}
          className="h-12 w-auto"
        />
        <div className="flex items-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-6 w-6 text-[#39426A]" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-6 w-6 text-[#39426A]" />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-[#39426A] text-white p-2 rounded-full"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Gradient overlay */}
              <motion.div
                key="overlay"
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                className="fixed inset-0 bg-gradient-to-l from-[#39426A]/30 to-transparent z-40"
              />
              {/* Menu panel */}
              <motion.div
                key="menu"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-lg z-50 p-8 shadow-xl"
              >
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6 text-[#39426A]" />
                </button>
                <div className="h-full flex flex-col justify-center">
                  <motion.ul
                    className="space-y-6 text-2xl font-medium text-[#39426A]"
                    variants={{ open: { transition: { staggerChildren: 0.1 } } }}
                  >
                    {menuItems.map((item) => (
                      <motion.li
                        key={item}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a
                          href={`#${item.toLowerCase()}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2"
                        >
                          {item}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    className="mt-12 flex gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-8 w-8 text-[#39426A]" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-8 w-8 text-[#39426A]" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}