"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AgentConfig, ProductInfo } from "@/lib/types";
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

export default function PremiumMinimalProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const otherProducts = products.filter((p) => p.slug !== product.slug);

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
            <Link
              href={`/${agent.slug}#services`}
              className="hover:text-gray-900 transition-colors tracking-wide"
            >
              All Services
            </Link>
            <a
              href="#benefits"
              className="hover:text-gray-900 transition-colors tracking-wide"
            >
              Benefits
            </a>
            <a
              href="#coverage"
              className="hover:text-gray-900 transition-colors tracking-wide"
            >
              Coverage
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
            <Link
              href={`/${agent.slug}#services`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 font-light tracking-wide hover:text-gray-900 transition-colors"
            >
              All Services
            </Link>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 font-light tracking-wide hover:text-gray-900 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 font-light tracking-wide hover:text-gray-900 transition-colors"
            >
              Coverage
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

      {/* Hero - Sparse */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <ProductIcon icon={product.icon} className="w-5 h-5" />
              </div>
              <Link
                href={`/${agent.slug}#services`}
                className="text-sm font-light text-gray-400 tracking-wide hover:text-emerald-600 transition-colors"
              >
                All Services
              </Link>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-gray-900"
            >
              {product.name}
            </motion.h1>
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl font-light text-gray-500 tracking-wide leading-relaxed max-w-2xl"
            >
              {product.heroDescription}
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
                Get a Free Quote
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits - Clean List */}
      <section id="benefits" className="py-32 px-6 bg-gray-50">
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
              Benefits
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900"
            >
              Why {product.name.toLowerCase()}?
            </motion.h2>

            <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-8">
              {product.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 mt-0.5">
                    <CheckIcon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Details */}
      <section id="coverage" className="py-32 px-6">
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
              Coverage
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900"
            >
              Coverage options
            </motion.h2>

            <div className="mt-16 border-t border-gray-200">
              {product.coverageDetails.map((detail, index) => {
                const [title, ...desc] = detail.split(" — ");
                const description = desc.join(" — ");

                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="py-8 border-b border-gray-200 grid md:grid-cols-3 gap-4 md:gap-8"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                      {title}
                    </h3>
                    <p className="md:col-span-2 text-gray-500 font-light leading-relaxed">
                      {description}
                    </p>
                  </motion.div>
                );
              })}
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
              {product.name} questions
            </motion.h2>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <FAQ items={product.faqs} theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Products */}
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
              Explore More
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900"
            >
              Other coverage options
            </motion.h2>

            <div className="mt-16 border-t border-gray-200">
              {otherProducts.map((p) => (
                <motion.div
                  key={p.slug}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${p.slug}`}
                    className="group flex items-center gap-6 py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors -mx-4 px-4 rounded-sm"
                  >
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      <ProductIcon icon={p.icon} className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 font-light hidden sm:block">
                        {p.shortDescription}
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

      {/* CTA */}
      <section className="py-32 px-6 bg-gray-50">
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
              Protect what matters most
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 text-lg text-gray-500 font-light tracking-wide max-w-xl mx-auto"
            >
              Get a personalized {product.name.toLowerCase()} quote today. No
              obligation, no pressure.
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
              <Link
                href={`/${agent.slug}`}
                className="font-semibold text-gray-900 tracking-tight hover:text-emerald-600 transition-colors"
              >
                {agent.name}
              </Link>
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
                  href={`/${agent.slug}`}
                  className="block text-sm text-gray-500 font-light hover:text-emerald-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href={`/${agent.slug}#services`}
                  className="block text-sm text-gray-500 font-light hover:text-emerald-600 transition-colors"
                >
                  All Services
                </Link>
                <Link
                  href={`/${agent.slug}#about`}
                  className="block text-sm text-gray-500 font-light hover:text-emerald-600 transition-colors"
                >
                  About
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
