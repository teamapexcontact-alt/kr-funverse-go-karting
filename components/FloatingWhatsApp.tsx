"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="wa-float relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full pl-4 pr-5 py-3 shadow-lg shadow-[#25D366]/20 transition-colors">
        <FaWhatsapp size={22} />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">Chat with us</span>
      </div>
    </motion.a>
  );
}
