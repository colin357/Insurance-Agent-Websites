"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "./icons";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  theme?: "light" | "dark";
}

export function FAQ({ items, theme = "light" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isDark = theme === "dark";

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl border overflow-hidden ${
            isDark
              ? "border-white/10 bg-white/5"
              : "border-gray-200 bg-white"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
              isDark
                ? "hover:bg-white/5 text-white"
                : "hover:bg-gray-50 text-gray-900"
            }`}
          >
            <span className="font-medium pr-4">{item.question}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <ChevronDownIcon
                className={`w-5 h-5 ${isDark ? "text-white/60" : "text-gray-400"}`}
              />
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`px-5 pb-5 ${
                    isDark ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
