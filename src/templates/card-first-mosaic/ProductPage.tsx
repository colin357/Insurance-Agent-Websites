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

export default function CardFirstMosaicProduct({
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href={`/${agent.slug}`}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <ShieldIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900">{agent.name}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href={`/${agent.slug}#services`}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              All Services
            </Link>
            <Link
              href={`/${agent.slug}#about`}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href={`/${agent.slug}#reviews`}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Reviews
            </Link>
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
            <Link
              href={`/${agent.slug}#services`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-gray-900 font-medium py-2"
            >
              All Services
            </Link>
            <Link
              href={`/${agent.slug}#about`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-gray-900 font-medium py-2"
            >
              About
            </Link>
            <Link
              href={`/${agent.slug}#reviews`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-gray-900 font-medium py-2"
            >
              Reviews
            </Link>
            <a
              href={`tel:${agent.phone}`}
              className="block bg-gray-900 text-white text-center px-5 py-2.5 rounded-xl font-medium"
            >
              {agent.phone}
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg relative overflow-hidden"
          >
            {/* Decorative colored bar at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 to-amber-500" />

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-2 text-sm text-gray-400 mb-6"
            >
              <Link
                href={`/${agent.slug}`}
                className="hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0"
              >
                <ProductIcon
                  icon={product.icon}
                  className="w-8 h-8 text-gray-900"
                />
              </motion.div>
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4"
                >
                  {product.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl"
                >
                  {product.heroDescription}
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Card Grid */}
      <section className="py-16 px-6 bg-gray-50">
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
                Key Benefits
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Why {product.name} is essential for your financial security.
              </p>
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={cardVariant}
                  transition={{ duration: 0.5 }}
                  className="break-inside-avoid"
                >
                  <div
                    className={`bg-white rounded-xl shadow-md p-6 border-t-4 ${
                      accentColors[i % accentColors.length]
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                          [
                            "bg-blue-50",
                            "bg-purple-50",
                            "bg-emerald-50",
                            "bg-amber-50",
                            "bg-rose-50",
                            "bg-cyan-50",
                            "bg-indigo-50",
                          ][i % 7]
                        }`}
                      >
                        <CheckIcon
                          className={`w-4 h-4 ${
                            [
                              "text-blue-600",
                              "text-purple-600",
                              "text-emerald-600",
                              "text-amber-600",
                              "text-rose-600",
                              "text-cyan-600",
                              "text-indigo-600",
                            ][i % 7]
                          }`}
                        />
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {benefit}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Details Cards */}
      <section className="py-16 px-6 bg-white">
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
                Coverage Options
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Explore the different types of {product.name.toLowerCase()}{" "}
                coverage available to you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.coverageDetails.map((detail, i) => {
                const [title, ...desc] = detail.split(" — ");
                return (
                  <motion.div
                    key={i}
                    variants={cardVariant}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className={`bg-gray-50 rounded-xl shadow-md p-6 h-full border-l-4 ${
                        accentColors[i % accentColors.length]
                      } hover:shadow-lg transition-shadow`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            [
                              "text-blue-600",
                              "text-purple-600",
                              "text-emerald-600",
                              "text-amber-600",
                              "text-rose-600",
                              "text-cyan-600",
                              "text-indigo-600",
                            ][i % 7]
                          }`}
                        >
                          Option {i + 1}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {title}
                      </h3>
                      {desc.length > 0 && (
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {desc.join(" — ")}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
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
                {product.name} FAQ
              </h2>
              <p className="text-gray-500 text-lg">
                Common questions about {product.name.toLowerCase()} answered.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariant}
              transition={{ duration: 0.5 }}
            >
              <FAQ items={product.faqs} theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Products Mosaic */}
      <section className="py-16 px-6 bg-white">
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
                Explore More Coverage
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Discover our full range of insurance solutions tailored to your
                needs.
              </p>
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
              {otherProducts.map((p, i) => (
                <motion.div
                  key={p.slug}
                  variants={cardVariant}
                  transition={{ duration: 0.5 }}
                  className="break-inside-avoid"
                >
                  <Link
                    href={`/${agent.slug}/${p.slug}`}
                    className={`group block bg-gray-50 rounded-xl shadow-md p-6 border-t-4 ${
                      accentColors[i % accentColors.length]
                    } hover:shadow-lg transition-all`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                        [
                          "bg-blue-50",
                          "bg-purple-50",
                          "bg-emerald-50",
                          "bg-amber-50",
                          "bg-rose-50",
                          "bg-cyan-50",
                          "bg-indigo-50",
                        ][i % 7]
                      }`}
                    >
                      <ProductIcon
                        icon={p.icon}
                        className={`w-5 h-5 ${
                          [
                            "text-blue-600",
                            "text-purple-600",
                            "text-emerald-600",
                            "text-amber-600",
                            "text-rose-600",
                            "text-cyan-600",
                            "text-indigo-600",
                          ][i % 7]
                        }`}
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {p.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      {p.shortDescription}
                    </p>
                    <span
                      className={`text-sm font-medium transition-colors ${
                        [
                          "text-blue-600 group-hover:text-blue-700",
                          "text-purple-600 group-hover:text-purple-700",
                          "text-emerald-600 group-hover:text-emerald-700",
                          "text-amber-600 group-hover:text-amber-700",
                          "text-rose-600 group-hover:text-rose-700",
                          "text-cyan-600 group-hover:text-cyan-700",
                          "text-indigo-600 group-hover:text-indigo-700",
                        ][i % 7]
                      }`}
                    >
                      Learn more &rarr;
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-20 px-6 bg-gray-50">
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
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <ProductIcon
                  icon={product.icon}
                  className="w-7 h-7 text-white"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Get Your Free {product.name} Quote
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                No obligation, no pressure. Let {agent.name} help you find the
                perfect {product.name.toLowerCase()} coverage at the best rates.
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
                <Link
                  href={`/${agent.slug}`}
                  className="font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                >
                  {agent.name}
                </Link>
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
                      className={`text-sm transition-colors ${
                        p.slug === product.slug
                          ? "text-gray-900 font-medium"
                          : "text-gray-500 hover:text-gray-900"
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
