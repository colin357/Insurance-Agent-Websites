"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AgentConfig } from "@/lib/types";
import { products } from "@/lib/products";
import { FAQ } from "@/components/FAQ";
import {
  ProductIcon,
  PhoneIcon,
  EmailIcon,
  MapPinIcon,
  CheckIcon,
  ShieldIcon,
  MenuIcon,
  XIcon,
} from "@/components/icons";

const accentColors = [
  "border-blue-500",
  "border-purple-500",
  "border-emerald-500",
  "border-amber-500",
  "border-rose-500",
  "border-cyan-500",
  "border-indigo-500",
];

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const generalFAQs = [
  {
    question: "Why should I work with an independent insurance agent?",
    answer:
      "Independent agents represent multiple insurance companies, giving you access to more options and better rates. I work for you, not the insurance company, ensuring you get the best coverage for your needs.",
  },
  {
    question: "How much does it cost to get a quote?",
    answer:
      "Getting a quote is always free with no obligation. I'll compare options from multiple carriers to find you the best coverage at the most competitive price.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "Simply contact me directly and I'll guide you through the entire claims process. I'll advocate on your behalf to ensure your claim is handled quickly and fairly.",
  },
  {
    question: "Can you help me bundle my insurance policies?",
    answer:
      "Absolutely! Bundling multiple policies (like home and auto) often results in significant discounts. I'll review all your insurance needs to find the best bundle savings.",
  },
  {
    question: "How often should I review my insurance coverage?",
    answer:
      "I recommend an annual review, or whenever you experience a major life change like buying a home, getting married, or having a child. I'll proactively reach out to schedule reviews.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "Finding the right insurance felt overwhelming until I started working with this agency. They made everything simple and saved me money too.",
    rating: 5,
  },
  {
    name: "James R.",
    text: "Excellent service from start to finish. They took the time to explain every detail of my policy and found coverage I didn't even know I needed.",
    rating: 5,
  },
  {
    name: "Linda K.",
    text: "When I had to file a claim, they handled everything. I couldn't have asked for a better experience during a stressful time.",
    rating: 5,
  },
  {
    name: "Michael D.",
    text: "Professional, knowledgeable, and genuinely caring. They treat you like family, not just another policy number.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Families Protected" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Insurance Carriers" },
  { value: "98%", label: "Client Retention" },
];

const timelineItems = [
  {
    title: "Initial Consultation",
    description:
      "We start with a thorough review of your current coverage, financial goals, and risk exposure to understand exactly what you need.",
  },
  {
    title: "Personalized Analysis",
    description:
      "Using your information, I compare plans from multiple top-rated carriers to find the perfect balance of coverage and value.",
  },
  {
    title: "Custom Recommendation",
    description:
      "I present clear, jargon-free options tailored to your situation, explaining the pros and cons of each so you can make an informed decision.",
  },
  {
    title: "Ongoing Support",
    description:
      "Your coverage needs evolve over time. I conduct annual reviews and am always just a phone call away when you need help.",
  },
];

export default function CardFirstMosaicLanding({
  agent,
}: {
  agent: AgentConfig;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const initials = agent.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={`/${agent.slug}`} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <ShieldIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900">{agent.name}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#reviews"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Reviews
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              FAQ
            </a>
            <a
              href={`tel:${agent.phone}`}
              className="bg-gray-900 text-white px-5 py-2 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              {agent.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-3"
          >
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-gray-900 font-medium py-2"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-gray-900 font-medium py-2"
            >
              About
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-gray-900 font-medium py-2"
            >
              Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-gray-900 font-medium py-2"
            >
              FAQ
            </a>
            <a
              href={`tel:${agent.phone}`}
              className="block bg-gray-900 text-white text-center px-5 py-2.5 rounded-xl font-medium"
            >
              {agent.phone}
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Card */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 lg:p-16 border border-gray-100 shadow-lg relative overflow-hidden"
          >
            {/* Decorative colored dots */}
            <div className="absolute top-6 right-6 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
            </div>

            <div className="grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4"
                >
                  Licensed Insurance Agent &bull; {agent.location.city},{" "}
                  {agent.location.state}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6"
                >
                  Insurance That
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                    Fits Your Life
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
                >
                  {agent.bio}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap gap-3"
                >
                  <a
                    href={`tel:${agent.phone}`}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    Get a Free Quote
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-colors"
                  >
                    <EmailIcon className="w-4 h-4" />
                    Send a Message
                  </a>
                </motion.div>
              </div>

              {/* Agent Photo / Initials */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="lg:col-span-2 flex justify-center"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-emerald-100 flex items-center justify-center overflow-hidden shadow-md">
                  {agent.photo ? (
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-6xl md:text-7xl font-semibold text-gray-400">
                      {initials}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mosaic Grid Section - Services + Stats + Reviews Mixed */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3"
            >
              Everything You Need
            </motion.h2>
            <motion.p
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="text-gray-500 text-lg max-w-2xl mx-auto"
            >
              Comprehensive insurance solutions, trusted reviews, and the
              numbers that back up our commitment to protecting you.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {/* Service Cards + Stat Cards + Review Cards interleaved */}

            {/* Service Card 1 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <Link
                href={`/${agent.slug}/${products[0].slug}`}
                className="group block bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <ProductIcon
                    icon={products[0].icon}
                    className="w-6 h-6 text-blue-600"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {products[0].name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {products[0].shortDescription}
                </p>
                <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            </motion.div>

            {/* Stat Card 1 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-emerald-500">
                <p className="text-4xl font-semibold text-gray-900 mb-1">
                  {stats[0].value}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {stats[0].label}
                </p>
              </div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <Link
                href={`/${agent.slug}/${products[1].slug}`}
                className="group block bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-purple-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <ProductIcon
                    icon={products[1].icon}
                    className="w-6 h-6 text-purple-600"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {products[1].name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {products[1].shortDescription}
                </p>
                <span className="text-sm font-medium text-purple-600 group-hover:text-purple-700 transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            </motion.div>

            {/* Review Card 1 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-amber-500">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">
                  &ldquo;{testimonials[0].text}&rdquo;
                </p>
                <p className="text-xs font-semibold text-gray-900">
                  {testimonials[0].name}
                </p>
              </div>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <Link
                href={`/${agent.slug}/${products[2].slug}`}
                className="group block bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-emerald-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                  <ProductIcon
                    icon={products[2].icon}
                    className="w-6 h-6 text-emerald-600"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {products[2].name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {products[2].shortDescription}
                </p>
                <span className="text-sm font-medium text-emerald-600 group-hover:text-emerald-700 transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-purple-500">
                <p className="text-4xl font-semibold text-gray-900 mb-1">
                  {stats[1].value}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {stats[1].label}
                </p>
              </div>
            </motion.div>

            {/* Review Card 2 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-blue-500">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonials[1].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">
                  &ldquo;{testimonials[1].text}&rdquo;
                </p>
                <p className="text-xs font-semibold text-gray-900">
                  {testimonials[1].name}
                </p>
              </div>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <Link
                href={`/${agent.slug}/${products[3].slug}`}
                className="group block bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-amber-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                  <ProductIcon
                    icon={products[3].icon}
                    className="w-6 h-6 text-amber-600"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {products[3].name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {products[3].shortDescription}
                </p>
                <span className="text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-cyan-500">
                <p className="text-4xl font-semibold text-gray-900 mb-1">
                  {stats[2].value}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {stats[2].label}
                </p>
              </div>
            </motion.div>

            {/* Service Card 5 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <Link
                href={`/${agent.slug}/${products[4].slug}`}
                className="group block bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-rose-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center mb-4">
                  <ProductIcon
                    icon={products[4].icon}
                    className="w-6 h-6 text-rose-600"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {products[4].name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {products[4].shortDescription}
                </p>
                <span className="text-sm font-medium text-rose-600 group-hover:text-rose-700 transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            </motion.div>

            {/* Review Card 3 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-emerald-500">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonials[2].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">
                  &ldquo;{testimonials[2].text}&rdquo;
                </p>
                <p className="text-xs font-semibold text-gray-900">
                  {testimonials[2].name}
                </p>
              </div>
            </motion.div>

            {/* Service Card 6 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <Link
                href={`/${agent.slug}/${products[5].slug}`}
                className="group block bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-cyan-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-4">
                  <ProductIcon
                    icon={products[5].icon}
                    className="w-6 h-6 text-cyan-600"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {products[5].name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {products[5].shortDescription}
                </p>
                <span className="text-sm font-medium text-cyan-600 group-hover:text-cyan-700 transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            </motion.div>

            {/* Stat Card 4 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-indigo-500">
                <p className="text-4xl font-semibold text-gray-900 mb-1">
                  {stats[3].value}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {stats[3].label}
                </p>
              </div>
            </motion.div>

            {/* Service Card 7 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <Link
                href={`/${agent.slug}/${products[6].slug}`}
                className="group block bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-indigo-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                  <ProductIcon
                    icon={products[6].icon}
                    className="w-6 h-6 text-indigo-600"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {products[6].name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {products[6].shortDescription}
                </p>
                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            </motion.div>

            {/* Review Card 4 */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-rose-500">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonials[3].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">
                  &ldquo;{testimonials[3].text}&rdquo;
                </p>
                <p className="text-xs font-semibold text-gray-900">
                  {testimonials[3].name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Timeline Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                How We Work Together
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                A simple, transparent process from your first call to ongoing
                protection.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 to-amber-500" />

              <div className="space-y-12">
                {timelineItems.map((item, i) => {
                  const colorClasses = [
                    { border: "border-blue-500", bg: "bg-blue-500", text: "text-blue-600" },
                    { border: "border-purple-500", bg: "bg-purple-500", text: "text-purple-600" },
                    { border: "border-emerald-500", bg: "bg-emerald-500", text: "text-emerald-600" },
                    { border: "border-amber-500", bg: "bg-amber-500", text: "text-amber-600" },
                  ][i];
                  const isLeft = i % 2 === 0;

                  return (
                    <motion.div
                      key={i}
                      variants={cardVariant}
                      transition={{ duration: 0.5 }}
                      className={`relative flex items-start gap-6 md:gap-0 ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-white z-10">
                        <div
                          className={`w-full h-full rounded-full ${colorClasses.bg}`}
                        />
                      </div>

                      {/* Card */}
                      <div
                        className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                          isLeft ? "md:pr-0" : "md:pl-0"
                        }`}
                      >
                        <div
                          className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${colorClasses.border}`}
                        >
                          <span
                            className={`text-xs font-semibold uppercase tracking-wider ${colorClasses.text}`}
                          >
                            Step {i + 1}
                          </span>
                          <h3 className="font-semibold text-lg text-gray-900 mt-1 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Agent Contact Card */}
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-white rounded-xl shadow-md p-8 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-100 via-purple-100 to-emerald-100 flex items-center justify-center overflow-hidden shrink-0">
                  {agent.photo ? (
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-2xl font-semibold text-gray-400">
                      {initials}
                    </span>
                  )}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-semibold text-xl text-gray-900 mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    License #{agent.licenseNumber}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <MapPinIcon className="w-4 h-4 text-gray-400" />
                      {agent.location.city}, {agent.location.state}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <PhoneIcon className="w-4 h-4 text-gray-400" />
                      {agent.phone}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <EmailIcon className="w-4 h-4 text-gray-400" />
                      {agent.email}
                    </span>
                  </div>
                </div>
                <a
                  href={`tel:${agent.phone}`}
                  className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors shrink-0"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                What Our Clients Say
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Real stories from real people who trust us with their insurance
                needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={cardVariant}
                  transition={{ duration: 0.5 }}
                  className={`bg-gray-50 rounded-xl shadow-md p-6 border-l-4 ${
                    accentColors[i % accentColors.length]
                  }`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-amber-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-500">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-lg">
                Quick answers to common insurance questions.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
            >
              <FAQ items={generalFAQs} theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Decorative gradient blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex justify-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Ready to Get Protected?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Get a free, no-obligation quote from {agent.name}. Compare rates
                from top carriers and find the perfect coverage for your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center gap-2 border-2 border-gray-600 text-white px-8 py-3 rounded-xl font-medium hover:border-white transition-colors"
                >
                  <EmailIcon className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 pb-12">
            {/* Column 1 - Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <ShieldIcon className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">
                  {agent.name}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                Providing trusted insurance solutions in {agent.location.city},{" "}
                {agent.location.state} and the surrounding areas.
              </p>
              <p className="text-xs text-gray-400">
                License #{agent.licenseNumber}
              </p>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">
                Insurance Services
              </h4>
              <ul className="space-y-2.5">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${agent.slug}/${p.slug}`}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">
                Contact Information
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <MapPinIcon className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-500">
                    {agent.location.address}, {agent.location.city},{" "}
                    {agent.location.state}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <PhoneIcon className="w-4 h-4 text-gray-400 shrink-0" />
                  <a
                    href={`tel:${agent.phone}`}
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {agent.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <EmailIcon className="w-4 h-4 text-gray-400 shrink-0" />
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {agent.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} {agent.name}. All rights
              reserved. Licensed in the State of {agent.location.state}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
