"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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

export default function CleanCorporateGridLanding({
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
            <a
              href="#services"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQ
            </a>
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
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                About
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                FAQ
              </a>
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

      {/* Hero - Split Layout */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy + CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
                Licensed Independent Agent
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
                Insurance coverage you can count on.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                {agent.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Request a Free Quote
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 text-sm font-semibold rounded-md hover:border-gray-400 hover:text-gray-900 transition-colors"
                >
                  <EmailIcon className="w-4 h-4" />
                  Send a Message
                </a>
              </div>
            </motion.div>

            {/* Right: Agent Photo or Initials */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md aspect-[4/3] bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                {agent.photo ? (
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <span className="text-6xl font-semibold text-gray-300">
                    {initials}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - 3-Column Grid */}
      <section id="services" className="bg-gray-50 border-b border-gray-200">
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
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Insurance Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/${agent.slug}/${product.slug}`}
                  className="group bg-white border border-gray-200 rounded-md p-6 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-md flex items-center justify-center mb-4">
                    <ProductIcon
                      icon={product.icon}
                      className="w-5 h-5 text-blue-600"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {product.shortDescription}
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

      {/* Stats Strip */}
      <section className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "1,200+", label: "Clients Served" },
              { value: "20+", label: "Insurance Carriers" },
              { value: "98%", label: "Client Retention" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-semibold text-blue-600 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-3">
                  About Your Agent
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                  {agent.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {agent.bio}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        Office
                      </p>
                      <p className="text-sm text-gray-700">
                        {agent.location.address}
                        <br />
                        {agent.location.city}, {agent.location.state}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        Phone
                      </p>
                      <p className="text-sm text-gray-700">{agent.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <EmailIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        Email
                      </p>
                      <p className="text-sm text-gray-700">{agent.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-md p-8">
                <h3 className="font-semibold text-gray-900 text-lg mb-6">
                  Why Work With Me
                </h3>
                <ul className="space-y-4">
                  {[
                    "Licensed independent agent",
                    `Serving ${agent.location.city}, ${agent.location.state}`,
                    "Multiple carrier options for best rates",
                    "Personalized coverage recommendations",
                    "Free, no-obligation consultations",
                    `License #${agent.licenseNumber}`,
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials / Trust Section */}
      <section
        id="testimonials"
        className="bg-gray-50 border-b border-gray-200"
      >
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
                Client Trust
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Built on Trust &amp; Integrity
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "Outstanding service and attention to detail. Found me better coverage at a lower rate than I was paying before.",
                  name: "Satisfied Client",
                  detail: "Home & Auto Insurance",
                },
                {
                  quote:
                    "Made the Medicare enrollment process so much easier. Explained everything clearly and helped me choose the right plan.",
                  name: "Happy Policyholder",
                  detail: "Medicare",
                },
                {
                  quote:
                    "When I had a claim, they handled everything for me. True advocates who go above and beyond for their clients.",
                  name: "Loyal Customer",
                  detail: "Commercial Insurance",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-md p-6"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-400">{testimonial.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white border-b border-gray-200">
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
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <FAQ items={generalFAQs} theme="light" />
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
              <ShieldIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation insurance quote today. I&apos;ll compare
              options from multiple carriers to find the best coverage at the
              most competitive price.
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
                Email Us
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
              <p className="text-lg font-semibold text-white tracking-tight mb-3">
                {agent.name}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
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
                      className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
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
