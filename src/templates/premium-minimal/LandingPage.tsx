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
  MenuIcon,
  XIcon,
} from "@/components/icons";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
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

const processSteps = [
  {
    number: "1",
    title: "Consultation",
    description:
      "We start with a conversation about your unique needs, goals, and budget to understand exactly what coverage is right for you.",
  },
  {
    number: "2",
    title: "Compare Options",
    description:
      "I shop multiple top-rated carriers to find policies that offer the best coverage at the most competitive rates.",
  },
  {
    number: "3",
    title: "Get Covered",
    description:
      "Once you choose the right plan, I handle the paperwork and ensure a seamless setup so you're protected from day one.",
  },
];

const testimonials = [
  {
    quote:
      "Working with this agency transformed my understanding of insurance. They took the time to explain every detail and found coverage I didn't even know I needed — all while saving me money.",
    name: "Sarah Mitchell",
    role: "Homeowner",
  },
  {
    quote:
      "Exceptional service from start to finish. The process was effortless and the savings were significant.",
    name: "James Cooper",
    role: "Business Owner",
  },
  {
    quote:
      "I finally feel confident that my family is truly protected. The personalized approach made all the difference.",
    name: "Maria Rodriguez",
    role: "Life Insurance Client",
  },
  {
    quote:
      "Professional, knowledgeable, and genuinely caring. I recommend them to everyone I know.",
    name: "David Chen",
    role: "Auto & Home Client",
  },
];

export default function PremiumMinimalLanding({
  agent,
}: {
  agent: AgentConfig;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const initials = agent.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href={`/${agent.slug}`}
            className="text-lg font-semibold tracking-tight text-gray-900"
          >
            {agent.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm font-light text-gray-500">
            <a
              href="#process"
              className="hover:text-gray-900 transition-colors tracking-wide"
            >
              Process
            </a>
            <a
              href="#services"
              className="hover:text-gray-900 transition-colors tracking-wide"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-gray-900 transition-colors tracking-wide"
            >
              About
            </a>
            <a
              href="#faq"
              className="hover:text-gray-900 transition-colors tracking-wide"
            >
              FAQ
            </a>
            <a
              href={`tel:${agent.phone}`}
              className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-normal hover:bg-emerald-700 transition-colors"
            >
              {agent.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-900"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4"
          >
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 font-light tracking-wide hover:text-gray-900 transition-colors"
            >
              Process
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 font-light tracking-wide hover:text-gray-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 font-light tracking-wide hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 font-light tracking-wide hover:text-gray-900 transition-colors"
            >
              FAQ
            </a>
            <a
              href={`tel:${agent.phone}`}
              className="block bg-emerald-600 text-white px-5 py-3 rounded-full text-center text-sm font-normal hover:bg-emerald-700 transition-colors"
            >
              {agent.phone}
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero - Sparse & Minimal */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-gray-900"
            >
              Insurance,
              <br />
              simplified.
            </motion.h1>
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl font-light text-gray-500 tracking-wide"
            >
              Personalized coverage tailored to your life, your goals, and your
              peace of mind.
            </motion.p>
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full text-sm font-normal tracking-wide hover:bg-emerald-700 transition-colors"
              >
                Schedule a Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-sm font-normal text-emerald-600 tracking-widest uppercase mb-4"
            >
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900"
            >
              Three simple steps
            </motion.h2>

            <div className="mt-20 grid md:grid-cols-3 gap-16">
              {processSteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-5xl font-semibold text-emerald-600 tracking-tight">
                    {step.number}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-gray-500 font-light leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Clean List Format */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-sm font-normal text-emerald-600 tracking-widest uppercase mb-4"
            >
              Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900"
            >
              Coverage for every chapter of life
            </motion.h2>

            <div className="mt-16 border-t border-gray-200">
              {products.map((product) => (
                <motion.div
                  key={product.slug}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${product.slug}`}
                    className="group flex items-center gap-6 py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors -mx-4 px-4 rounded-sm"
                  >
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      <ProductIcon
                        icon={product.icon}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 font-light leading-relaxed hidden sm:block">
                        {product.shortDescription}
                      </p>
                    </div>
                    <div className="shrink-0 text-gray-300 group-hover:text-emerald-600 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="text-sm font-normal text-emerald-600 tracking-widest uppercase mb-4"
              >
                About
              </motion.p>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900"
              >
                {agent.name}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-6 text-gray-500 font-light leading-relaxed text-lg"
              >
                {agent.bio}
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-10 space-y-4"
              >
                <div className="flex items-center gap-3 text-gray-600 font-light">
                  <PhoneIcon className="w-4 h-4 text-emerald-600" />
                  <a
                    href={`tel:${agent.phone}`}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    {agent.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-light">
                  <EmailIcon className="w-4 h-4 text-emerald-600" />
                  <a
                    href={`mailto:${agent.email}`}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    {agent.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-light">
                  <MapPinIcon className="w-4 h-4 text-emerald-600" />
                  <span>
                    {agent.location.city}, {agent.location.state}
                  </span>
                </div>
              </motion.div>

              {agent.licenseNumber && (
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  className="mt-8 text-xs text-gray-400 font-light tracking-wide"
                >
                  License #{agent.licenseNumber}
                </motion.p>
              )}
            </div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              {agent.photo ? (
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-72 h-72 md:w-80 md:h-80 object-cover object-top rounded-2xl shadow-sm"
                />
              ) : (
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <span className="text-6xl font-semibold text-gray-300 tracking-tight">
                    {initials}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Featured Quote + List */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-sm font-normal text-emerald-600 tracking-widest uppercase mb-4"
            >
              Testimonials
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900"
            >
              What clients say
            </motion.h2>

            {/* Featured Quote */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-16 py-12 border-t border-b border-gray-200"
            >
              <blockquote className="text-2xl md:text-3xl italic font-light text-gray-700 leading-relaxed tracking-wide max-w-4xl">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-900">
                  {testimonials[0].name}
                </p>
                <p className="text-sm text-gray-400 font-light">
                  {testimonials[0].role}
                </p>
              </div>
            </motion.div>

            {/* Additional Quotes */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {testimonials.slice(1).map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="py-6"
                >
                  <p className="text-gray-500 font-light leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-400 font-light">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-sm font-normal text-emerald-600 tracking-widest uppercase mb-4"
            >
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12"
            >
              Common questions
            </motion.h2>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <FAQ items={generalFAQs} theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900"
            >
              Ready to get started?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 text-lg text-gray-500 font-light tracking-wide max-w-xl mx-auto"
            >
              Let&apos;s find the right coverage for you. No pressure, no
              obligation — just honest guidance.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full text-sm font-normal tracking-wide hover:bg-emerald-700 transition-colors"
              >
                Call {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-block border border-gray-200 text-gray-700 px-8 py-4 rounded-full text-sm font-light tracking-wide hover:border-gray-400 transition-colors"
              >
                Send an Email
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Agent Info */}
            <div>
              <p className="font-semibold text-gray-900 tracking-tight">
                {agent.name}
              </p>
              <p className="mt-2 text-sm text-gray-400 font-light">
                Licensed Insurance Agent
              </p>
              {agent.licenseNumber && (
                <p className="mt-1 text-xs text-gray-400 font-light">
                  License #{agent.licenseNumber}
                </p>
              )}
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs text-gray-400 font-normal tracking-widest uppercase mb-4">
                Quick Links
              </p>
              <div className="space-y-3">
                <Link
                  href={`/${agent.slug}#services`}
                  className="block text-sm text-gray-500 font-light hover:text-emerald-600 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href={`/${agent.slug}#about`}
                  className="block text-sm text-gray-500 font-light hover:text-emerald-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href={`/${agent.slug}#faq`}
                  className="block text-sm text-gray-500 font-light hover:text-emerald-600 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs text-gray-400 font-normal tracking-widest uppercase mb-4">
                Contact
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center gap-2 text-sm text-gray-500 font-light hover:text-emerald-600 transition-colors"
                >
                  <PhoneIcon className="w-3.5 h-3.5" />
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-2 text-sm text-gray-500 font-light hover:text-emerald-600 transition-colors"
                >
                  <EmailIcon className="w-3.5 h-3.5" />
                  {agent.email}
                </a>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  {agent.location.address}, {agent.location.city},{" "}
                  {agent.location.state}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400 font-light tracking-wide">
              &copy; {new Date().getFullYear()} {agent.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
