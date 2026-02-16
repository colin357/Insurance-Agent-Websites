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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function BoldEditorialProduct({
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
    .join("");

  return (
    <div className="min-h-screen bg-white text-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href={`/${agent.slug}`}
            className="flex items-center gap-3"
          >
            <span className="text-xl font-serif font-bold text-gray-950 tracking-tight hover:text-rose-600 transition-colors">
              {agent.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href={`/${agent.slug}#services`}
              className="text-gray-600 hover:text-rose-600 transition-colors font-medium"
            >
              All Services
            </Link>
            <Link
              href={`/${agent.slug}#about`}
              className="text-gray-600 hover:text-rose-600 transition-colors font-medium"
            >
              About
            </Link>
            <a
              href={`tel:${agent.phone}`}
              className="bg-gray-950 text-white px-5 py-2.5 text-sm font-medium hover:bg-rose-600 transition-colors"
            >
              {agent.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-950"
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
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-gray-200 px-6 pb-6"
          >
            <div className="flex flex-col gap-4 pt-2">
              <Link
                href={`/${agent.slug}#services`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-rose-600 font-medium py-2"
              >
                All Services
              </Link>
              <Link
                href={`/${agent.slug}#about`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-rose-600 font-medium py-2"
              >
                About
              </Link>
              <a
                href={`tel:${agent.phone}`}
                className="bg-gray-950 text-white px-5 py-3 text-sm font-medium text-center hover:bg-rose-600 transition-colors"
              >
                {agent.phone}
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-16 min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden bg-white">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(gray 1px, transparent 1px), linear-gradient(90deg, gray 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Rose accent vertical line */}
        <div className="absolute left-8 md:left-16 top-32 bottom-32 w-px bg-rose-600/20" />

        {/* Large decorative product number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none">
          <span className="font-serif text-[16rem] xl:text-[20rem] font-bold text-gray-50 leading-none">
            {product.name.split(" ")[0]?.substring(0, 2).toUpperCase()}
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Breadcrumb */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-sm text-gray-400 mb-8 md:mb-10"
            >
              <Link
                href={`/${agent.slug}`}
                className="hover:text-rose-600 transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-rose-600">{product.name}</span>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-14 h-14 bg-stone-100 flex items-center justify-center">
                <ProductIcon
                  icon={product.icon}
                  className="w-7 h-7 text-rose-600"
                />
              </div>
              <div className="h-px flex-1 max-w-24 bg-rose-600/30" />
            </motion.div>

            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-950 leading-[0.9] tracking-tight mb-8 max-w-4xl"
            >
              {product.name}
              <span className="text-rose-600">.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10 md:mb-12"
            >
              {product.heroDescription}
            </motion.p>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-3 bg-gray-950 text-white px-8 py-4 font-medium text-sm hover:bg-rose-600 transition-all duration-300 tracking-wide"
              >
                <PhoneIcon className="w-4 h-4" />
                Get a Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-3 border-2 border-gray-950 text-gray-950 px-8 py-4 font-medium text-sm hover:bg-gray-950 hover:text-white transition-all duration-300 tracking-wide"
              >
                <EmailIcon className="w-4 h-4" />
                Send a Message
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div
        className="relative h-24 md:h-32 bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
        }}
      />
      <div
        className="-mt-24 md:-mt-32 relative h-24 md:h-32 bg-stone-50"
        style={{
          clipPath: "polygon(0 70%, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Benefits */}
      <section className="py-16 md:py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-20"
            >
              <p className="text-rose-600 font-medium text-sm tracking-[0.2em] uppercase mb-4">
                Key Benefits
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-gray-950 leading-tight tracking-tight max-w-3xl">
                Why You Need<br />
                <span className="italic">{product.name}</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-5 p-6 md:p-8 bg-white border border-gray-100 hover:shadow-lg hover:border-rose-100 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gray-950 flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors duration-300">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg pt-1.5">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div
        className="relative h-24 md:h-32 bg-stone-50"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 30%)",
        }}
      />
      <div
        className="-mt-24 md:-mt-32 relative h-24 md:h-32 bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
        }}
      />

      {/* Coverage Details */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-20"
            >
              <p className="text-rose-600 font-medium text-sm tracking-[0.2em] uppercase mb-4">
                Coverage Options
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-gray-950 leading-tight tracking-tight">
                What We Cover
              </h2>
            </motion.div>

            <div className="space-y-0">
              {product.coverageDetails.map((detail, i) => {
                const [title, ...desc] = detail.split(" — ");
                return (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                    className="group border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex items-start gap-6 md:gap-10 py-8 md:py-10 hover:pl-4 transition-all duration-300">
                      <span className="font-serif text-4xl md:text-5xl font-bold text-gray-100 group-hover:text-rose-200 transition-colors duration-300 leading-none shrink-0 w-16 md:w-20 text-right">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 pt-1">
                        <h3 className="font-serif font-bold text-xl md:text-2xl text-gray-950 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                          {title}
                        </h3>
                        {desc.length > 0 && (
                          <p className="text-gray-500 leading-relaxed text-lg">
                            {desc.join(" — ")}
                          </p>
                        )}
                      </div>
                      <div className="hidden md:flex items-center shrink-0 pt-2">
                        <div className="w-8 h-8 border border-gray-200 flex items-center justify-center group-hover:border-rose-600 group-hover:bg-rose-600 transition-all duration-300">
                          <CheckIcon className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div
        className="relative h-24 md:h-32 bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
        }}
      />
      <div
        className="-mt-24 md:-mt-32 relative h-24 md:h-32 bg-stone-50"
        style={{
          clipPath: "polygon(0 70%, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p className="text-rose-600 font-medium text-sm tracking-[0.2em] uppercase mb-4">
                Common Questions
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-950 tracking-tight">
                {product.name} FAQ
              </h2>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
              <FAQ items={product.faqs} theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-20"
            >
              <p className="text-rose-600 font-medium text-sm tracking-[0.2em] uppercase mb-4">
                Explore More
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-950 tracking-tight">
                Other Coverage Options
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.map((p, i) => (
                <motion.div
                  key={p.slug}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link
                    href={`/${agent.slug}/${p.slug}`}
                    className="group block bg-stone-50 hover:bg-white border border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-500 overflow-hidden"
                  >
                    <div className="h-1 bg-transparent group-hover:bg-rose-600 transition-colors duration-500" />
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-white group-hover:bg-rose-50 flex items-center justify-center transition-colors duration-300">
                          <ProductIcon
                            icon={p.icon}
                            className="w-6 h-6 text-gray-400 group-hover:text-rose-600 transition-colors duration-300"
                          />
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-300 group-hover:text-rose-600 group-hover:translate-x-1 transition-all duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </div>
                      <h3 className="font-serif font-bold text-xl text-gray-950 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                        {p.name}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {p.shortDescription}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 px-6 bg-gray-950 overflow-hidden">
        {/* Diagonal top edge */}
        <div
          className="absolute top-0 left-0 right-0 h-24 md:h-32 bg-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
          }}
        />

        {/* Large decorative typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-serif text-[10rem] md:text-[16rem] lg:text-[22rem] font-bold text-white/[0.02] leading-none">
            {product.name.split(" ")[0]?.substring(0, 4).toUpperCase()}
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto text-center pt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center">
                <ProductIcon
                  icon={product.icon}
                  className="w-8 h-8 text-rose-500"
                />
              </div>
            </motion.div>

            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-rose-500 font-medium text-sm tracking-[0.2em] uppercase mb-6"
            >
              Get Started
            </motion.p>
            <motion.h2
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight mb-8"
            >
              Get Your Free<br />
              <span className="italic text-rose-400">{product.name} Quote</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              No obligation, no pressure. Receive a comprehensive coverage
              analysis and competitive quote from {agent.name}.
            </motion.p>
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-3 bg-rose-600 text-white px-10 py-4 font-medium text-sm hover:bg-rose-500 transition-all duration-300 tracking-wide"
              >
                <PhoneIcon className="w-4 h-4" />
                Call {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-10 py-4 font-medium text-sm hover:border-rose-500 hover:text-rose-400 transition-all duration-300 tracking-wide"
              >
                <EmailIcon className="w-4 h-4" />
                Email {agent.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-white/10 text-gray-400 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 pb-12">
            {/* Column 1 - Brand */}
            <div>
              <Link
                href={`/${agent.slug}`}
                className="text-xl font-serif font-bold text-white hover:text-rose-400 transition-colors"
              >
                {agent.name}
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed mt-4 mb-4">
                Independent insurance solutions in {agent.location.city},{" "}
                {agent.location.state} and surrounding areas.
              </p>
              <p className="text-xs text-gray-600">
                License #{agent.licenseNumber}
              </p>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h4 className="text-white font-serif font-bold text-sm tracking-wider uppercase mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${agent.slug}/${p.slug}`}
                      className={`text-sm transition-colors ${
                        p.slug === product.slug
                          ? "text-rose-400 font-medium"
                          : "text-gray-500 hover:text-rose-400"
                      }`}
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h4 className="text-white font-serif font-bold text-sm tracking-wider uppercase mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <MapPinIcon className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span className="text-gray-500">
                    {agent.location.address}, {agent.location.city},{" "}
                    {agent.location.state}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <PhoneIcon className="w-4 h-4 text-rose-600 shrink-0" />
                  <a
                    href={`tel:${agent.phone}`}
                    className="text-gray-500 hover:text-rose-400 transition-colors"
                  >
                    {agent.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <EmailIcon className="w-4 h-4 text-rose-600 shrink-0" />
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-gray-500 hover:text-rose-400 transition-colors"
                  >
                    {agent.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} {agent.name}. All rights
              reserved. Licensed in the State of {agent.location.state}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
