"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AgentConfig } from "@/lib/types";
import { ProductInfo } from "@/lib/types";
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

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function SplitScreenHeroProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("benefits");

  const otherProducts = products.filter((p) => p.slug !== product.slug);

  const anchorLinks = [
    { id: "benefits", label: "Benefits" },
    { id: "coverage", label: "Coverage Details" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href={`/${agent.slug}`}
              className="text-xl font-bold text-indigo-600"
            >
              {agent.name}
            </Link>
            <span className="hidden sm:inline text-slate-300">/</span>
            <span className="hidden sm:inline text-sm font-medium text-slate-500">
              {product.name}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link
              href={`/${agent.slug}`}
              className="hover:text-indigo-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href={`/${agent.slug}#services`}
              className="hover:text-indigo-600 transition-colors"
            >
              Services
            </Link>
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
            <Link
              href={`/${agent.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium hover:text-indigo-600"
            >
              Home
            </Link>
            <Link
              href={`/${agent.slug}#services`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium hover:text-indigo-600"
            >
              All Services
            </Link>
            {anchorLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 font-medium hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${agent.phone}`}
              className="block text-center bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-medium"
            >
              Call {agent.phone}
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Split Screen */}
      <section className="pt-16 min-h-[60vh] flex items-stretch">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Panel */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            className="lg:w-5/12 bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 flex items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[30vh] lg:min-h-0"
          >
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <ProductIcon
                  icon={product.icon}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                />
              </div>
              <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-slate-800">
                {product.name}
              </h2>
              <p className="mt-2 text-indigo-700 font-medium text-sm">
                Personalized Coverage Solutions
              </p>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            className="lg:w-7/12 flex items-center p-8 sm:p-12 lg:p-16 xl:p-20"
          >
            <div className="max-w-xl">
              <Link
                href={`/${agent.slug}#services`}
                className="inline-flex items-center gap-1 text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors mb-4"
              >
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
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                All Services
              </Link>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight mb-4"
              >
                {product.name}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-600 leading-relaxed mb-8"
              >
                {product.heroDescription}
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Get a Quote
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors"
                >
                  <EmailIcon className="w-5 h-5" />
                  Email {agent.name.split(" ")[0]}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Left Anchor Nav + Right Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Anchor Navigation */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                On This Page
              </h4>
              <nav className="space-y-1">
                {anchorLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setActiveSection(link.id)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? "bg-indigo-50 text-indigo-600 border-l-2 border-indigo-600"
                        : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Agent Mini Card */}
              <div className="mt-8 p-4 bg-indigo-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  {agent.photo ? (
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {getInitials(agent.name)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">
                      {agent.name}
                    </p>
                    <p className="text-xs text-slate-500">Licensed Agent</p>
                  </div>
                </div>
                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center gap-2 w-full bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors justify-center"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </aside>

          {/* Right Content Area */}
          <div className="flex-1 max-w-4xl">
            {/* Benefits Section */}
            <section id="benefits" className="mb-16 scroll-mt-24">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  Why Choose This Coverage
                </p>
                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                  Key Benefits
                </h2>
              </motion.div>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {product.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className="text-slate-700 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Coverage Details Section */}
            <section id="coverage" className="mb-16 scroll-mt-24">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  What Is Covered
                </p>
                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                  Coverage Details
                </h2>
              </motion.div>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {product.coverageDetails.map((detail, i) => {
                  const [title, ...desc] = detail.split(" — ");
                  const description = desc.join(" — ");
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <ProductIcon
                            icon={product.icon}
                            className="w-5 h-5 text-indigo-600"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 mb-1">
                            {title}
                          </h3>
                          {description && (
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-24">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  Common Questions
                </p>
                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                  Frequently Asked Questions
                </h2>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FAQ items={product.faqs} theme="light" />
              </motion.div>
            </section>
          </div>
        </div>
      </section>

      {/* Other Products Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Explore More
            </p>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Other Insurance Products
            </h2>
            <p className="text-lg text-slate-600">
              Discover additional coverage options to protect every aspect of
              your life.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProducts.map((p) => (
              <motion.div key={p.slug} variants={fadeUp}>
                <Link
                  href={`/${agent.slug}/${p.slug}`}
                  className="group block bg-white border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-100 transition-colors">
                    <ProductIcon icon={p.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {p.shortDescription}
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
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-600 to-indigo-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your {product.name} Quote Today
            </h2>
            <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
              Let me help you find the right {product.name.toLowerCase()}{" "}
              coverage at the best price. Free quotes, no obligation.
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
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${agent.slug}/${p.slug}`}
                      className={`text-sm transition-colors ${
                        p.slug === product.slug
                          ? "text-indigo-400 font-medium"
                          : "text-slate-400 hover:text-indigo-400"
                      }`}
                    >
                      {p.name}
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
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} {agent.name}. All rights
              reserved.
            </p>
            <Link
              href={`/${agent.slug}`}
              className="text-slate-500 text-sm hover:text-indigo-400 transition-colors"
            >
              Back to Home
            </Link>
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
            Get Quote
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
