"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AgentConfig, ProductInfo } from "@/lib/types";
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function CleanCorporateGridProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <PhoneIcon className="w-3.5 h-3.5 text-blue-400" />
              <a
                href={`tel:${agent.phone}`}
                className="hover:text-blue-400 transition-colors"
              >
                {agent.phone}
              </a>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <EmailIcon className="w-3.5 h-3.5 text-blue-400" />
              <a
                href={`mailto:${agent.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {agent.email}
              </a>
            </span>
          </div>
          <span className="text-gray-400 hidden sm:block">
            Mon&ndash;Fri: 9AM&ndash;5PM
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href={`/${agent.slug}`}
            className="text-xl font-semibold tracking-tight text-gray-900 hover:text-blue-600 transition-colors"
          >
            {agent.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href={`/${agent.slug}#services`}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              All Services
            </Link>
            <Link
              href={`/${agent.slug}`}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <a
              href={`tel:${agent.phone}`}
              className="bg-blue-600 text-white px-5 py-2.5 text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
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
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 space-y-3">
              <Link
                href={`/${agent.slug}#services`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                All Services
              </Link>
              <Link
                href={`/${agent.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                About
              </Link>
              <a
                href={`tel:${agent.phone}`}
                className="block bg-blue-600 text-white text-center px-5 py-2.5 text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link
                href={`/${agent.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </div>

            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-center shrink-0">
                <ProductIcon
                  icon={product.icon}
                  className="w-7 h-7 text-blue-600"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                  {product.name}
                </h1>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
              {product.heroDescription}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                Get a Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 text-sm font-semibold rounded-md hover:border-gray-400 hover:text-gray-900 transition-colors"
              >
                <EmailIcon className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-3">
                Key Benefits
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Why You Need {product.name}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-md p-5 flex items-start gap-4 hover:border-blue-200 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-center shrink-0">
                    <CheckIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed pt-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Details - Table-Style Comparison Block */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-3">
                Coverage Options
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                What&apos;s Covered
              </h2>
            </div>

            <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
              {product.coverageDetails.map((detail, i) => {
                const [title, ...desc] = detail.split(" — ");
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-4 px-6 py-5 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } ${
                      i < product.coverageDetails.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <div className="w-8 h-8 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {title}
                      </h3>
                      {desc.length > 0 && (
                        <p className="text-gray-500 text-sm mt-1">
                          {desc.join(" — ")}
                        </p>
                      )}
                    </div>
                    <div className="hidden md:flex shrink-0 items-center justify-center w-8 h-8 mt-0.5">
                      <CheckIcon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-14">
              <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                {product.name} FAQ
              </h2>
            </div>

            <FAQ items={product.faqs} theme="light" />
          </motion.div>
        </div>
      </section>

      {/* Other Products */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-14">
              <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-3">
                Explore More
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Other Insurance Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${agent.slug}/${p.slug}`}
                  className="group bg-white border border-gray-200 rounded-md p-6 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-center mb-4">
                    <ProductIcon
                      icon={p.icon}
                      className="w-5 h-5 text-blue-600"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {p.shortDescription}
                  </p>
                  <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                    Learn more
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center mx-auto mb-6">
              <ProductIcon
                icon={product.icon}
                className="w-6 h-6 text-white"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Get Your Free {product.name} Quote
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              No obligation, no pressure. Receive a comprehensive coverage
              analysis and competitive quote from {agent.name}.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                Call {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 px-8 py-3 text-sm font-semibold rounded-md hover:border-gray-400 hover:text-white transition-colors"
              >
                <EmailIcon className="w-4 h-4" />
                Email {agent.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-gray-800">
            {/* Column 1 - Brand */}
            <div>
              <Link
                href={`/${agent.slug}`}
                className="text-lg font-semibold text-white tracking-tight hover:text-blue-400 transition-colors"
              >
                {agent.name}
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed mt-3 mb-4">
                Providing trusted insurance solutions in {agent.location.city},{" "}
                {agent.location.state} and the surrounding areas.
              </p>
              <p className="text-xs text-gray-600">
                License #{agent.licenseNumber}
              </p>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Insurance Services
              </h4>
              <ul className="space-y-2.5">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${agent.slug}/${p.slug}`}
                      className={`text-sm transition-colors ${
                        p.slug === product.slug
                          ? "text-blue-400 font-medium"
                          : "text-gray-500 hover:text-blue-400"
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
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <MapPinIcon className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-gray-500">
                    {agent.location.address}, {agent.location.city},{" "}
                    {agent.location.state}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <PhoneIcon className="w-4 h-4 text-blue-500 shrink-0" />
                  <a
                    href={`tel:${agent.phone}`}
                    className="text-gray-500 hover:text-blue-400 transition-colors"
                  >
                    {agent.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <EmailIcon className="w-4 h-4 text-blue-500 shrink-0" />
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-gray-500 hover:text-blue-400 transition-colors"
                  >
                    {agent.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 text-center">
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
