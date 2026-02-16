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

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
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

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function SplitScreenHeroLanding({
  agent,
}: {
  agent: AgentConfig;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href={`/${agent.slug}`} className="text-xl font-bold text-indigo-600">
            {agent.name}
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#services"
              className="hover:text-indigo-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
            <a
              href={`tel:${agent.phone}`}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              {agent.phone}
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
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
            className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3"
          >
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium hover:text-indigo-600"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium hover:text-indigo-600"
            >
              About
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium hover:text-indigo-600"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium hover:text-indigo-600"
            >
              Contact
            </a>
            <a
              href={`tel:${agent.phone}`}
              className="block text-center bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-medium"
            >
              Call {agent.phone}
            </a>
          </motion.div>
        )}
      </nav>

      {/* Split-Screen Hero */}
      <section className="pt-16 min-h-[90vh] flex items-stretch">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Panel - Image / Gradient */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 flex items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[40vh] lg:min-h-0"
          >
            <div className="text-center">
              {agent.photo ? (
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover mx-auto shadow-xl ring-4 ring-white/60"
                />
              ) : (
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-indigo-600 flex items-center justify-center mx-auto shadow-xl ring-4 ring-white/60">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                    {getInitials(agent.name)}
                  </span>
                </div>
              )}
              <div className="mt-6 flex items-center justify-center gap-2 text-indigo-700">
                <MapPinIcon className="w-5 h-5" />
                <span className="font-medium">
                  {agent.location.city}, {agent.location.state}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Copy + CTA */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 flex items-center p-8 sm:p-12 lg:p-16 xl:p-20"
          >
            <div className="max-w-lg">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3"
              >
                Licensed Insurance Agent
              </motion.p>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-4"
              >
                Protecting What Matters Most to You
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                {agent.bio}
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Get a Free Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors"
                >
                  Our Services
                </a>
              </motion.div>
              {agent.licenseNumber && (
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.7 }}
                  className="mt-6 text-sm text-slate-400"
                >
                  License #{agent.licenseNumber}
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Sidebar Layout */}
      <section id="services" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                What We Offer
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                Insurance Services
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Comprehensive coverage options tailored to your unique needs.
                Explore our services and find the protection that is right for
                you.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {products.map((product) => (
                <motion.div key={product.slug} variants={fadeUp}>
                  <Link
                    href={`/${agent.slug}/${product.slug}`}
                    className="group block bg-white border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-100 transition-colors">
                      <ProductIcon icon={product.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      {product.shortDescription}
                    </p>
                    <span className="text-indigo-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Sidebar - Get a Quote */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  Get a Free Quote
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  No obligation. Compare rates from top carriers.
                </p>

                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center gap-3 w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-3 justify-center"
                >
                  <PhoneIcon className="w-5 h-5" />
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-3 w-full border-2 border-indigo-600 text-indigo-600 px-4 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors justify-center"
                >
                  <EmailIcon className="w-5 h-5" />
                  Email Us
                </a>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    {agent.photo ? (
                      <img
                        src={agent.photo}
                        alt={agent.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {getInitials(agent.name)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">
                        {agent.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        Licensed Insurance Agent
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400" />
                    <span>
                      {agent.location.address}, {agent.location.city},{" "}
                      {agent.location.state}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-5/12"
            >
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 sm:p-12">
                <div className="text-center">
                  {agent.photo ? (
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-40 h-40 rounded-2xl object-cover mx-auto shadow-lg"
                    />
                  ) : (
                    <div className="w-40 h-40 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-4xl font-bold text-white">
                        {getInitials(agent.name)}
                      </span>
                    </div>
                  )}
                  <h3 className="mt-4 text-xl font-bold text-slate-800">
                    {agent.name}
                  </h3>
                  <p className="text-indigo-600 font-medium text-sm">
                    Your Local Insurance Expert
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <PhoneIcon className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    {agent.phone}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <EmailIcon className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    {agent.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <MapPinIcon className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    {agent.location.city}, {agent.location.state}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-7/12"
            >
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                About Your Agent
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Your Trusted Insurance Partner
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {agent.bio}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Multi-carrier access for best rates",
                  "Personalized coverage recommendations",
                  "Claims support and advocacy",
                  "Annual policy reviews included",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 max-w-4xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                Common Questions
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Get answers to the most common insurance questions. Do not see
                your question? Reach out directly.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FAQ items={generalFAQs} theme="light" />
            </motion.div>
          </div>

          {/* Sidebar placeholder on FAQ section too */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  Still Have Questions?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  I am here to help you understand your coverage options and find
                  the right plan.
                </p>
                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center gap-2 w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors justify-center mb-3"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-2 w-full bg-white text-indigo-600 px-4 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors justify-center border border-indigo-200"
                >
                  <EmailIcon className="w-5 h-5" />
                  Send Email
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 lg:py-28 bg-gradient-to-br from-indigo-600 to-indigo-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Protect What Matters?
            </h2>
            <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation insurance quote today. I will compare
              rates from top carriers to find you the best coverage at the best
              price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
              >
                <PhoneIcon className="w-5 h-5" />
                {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                <EmailIcon className="w-5 h-5" />
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">{agent.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Your trusted local insurance agent providing personalized
                coverage solutions for individuals, families, and businesses.
              </p>
              {agent.licenseNumber && (
                <p className="text-slate-500 text-xs">
                  License #{agent.licenseNumber}
                </p>
              )}
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
                Services
              </h4>
              <ul className="space-y-2">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/${agent.slug}/${product.slug}`}
                      className="text-slate-400 text-sm hover:text-indigo-400 transition-colors"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center gap-3 text-slate-400 text-sm hover:text-indigo-400 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-3 text-slate-400 text-sm hover:text-indigo-400 transition-colors"
                >
                  <EmailIcon className="w-4 h-4 flex-shrink-0" />
                  {agent.email}
                </a>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPinIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    {agent.location.address}
                    <br />
                    {agent.location.city}, {agent.location.state}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {agent.name}. All rights
            reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3">
        <div className="flex gap-3">
          <a
            href={`tel:${agent.phone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            Call Now
          </a>
          <a
            href={`mailto:${agent.email}`}
            className="flex-1 flex items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-600 py-3 rounded-lg font-semibold text-sm hover:bg-indigo-50 transition-colors"
          >
            <EmailIcon className="w-4 h-4" />
            Email
          </a>
        </div>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="lg:hidden h-20" />
    </div>
  );
}
