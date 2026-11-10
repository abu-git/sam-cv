'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Whatsapp() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Delay appearance slightly so it doesn't compete with initial page load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded message card */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-amber-50 dark:bg-stone-800 rounded-2xl shadow-xl border border-stone-200 dark:border-stone-700 p-4 w-72"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="font-semibold text-black dark:text-white text-lg">
                  Chat with Sam
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Typically replies within a few hours
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-3 mb-4">
              Hi there! 👋🏼 How can I help? Drop me a message and let&apos;s chat.
            </p>

            <a
              href="https://wa.me/27832459000?text=Hi%20Sam%2C%20I%27d%20like%20to%20make%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg transition flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <FaWhatsapp className="w-4 h-4" />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg 
          transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/50
          ${isExpanded ? 'rotate-90' : 'rotate-0'}
        `}
        aria-label="Chat on WhatsApp"
      >
        {isExpanded ? (
          <X className="w-7 h-7" />
        ) : (
          <FaWhatsapp className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}