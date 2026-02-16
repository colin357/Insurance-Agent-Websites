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
  ShieldIcon,
  MenuIcon,
  XIcon,
} from "@/components/icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
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

const trustStats = [
  { value: "15+", label: "Years of Experience" },
  { value: "1,000+", label: "Clients Protected" },
  { value: "20+", label: "Insurance Carriers" },
  { value: "98%", label: "Client Retention" },
];

export default function ModernGlassmorphismLanding({
  agent,
}: {
  agent: AgentConfig;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href={`/${agent.slug}`}
            className="text-lg font-bold tracking-tight text-white"
          >
            {agent.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#services"
              className="text-white/80 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-white/80 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a
              href={`tel:${agent.phone}`}
              className="bg-white/15 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white/25 transition-colors border border-white/20"
            >
              {agent.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
            className="md:hidden bg-indigo-950/95 backdrop-blur-xl border-b border-white/10 px-6 pb-6 pt-2"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                About
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                FAQ
              </a>
              <a
                href={`tel:${agent.phone}`}
                className="bg-white/15 backdrop-blur-sm text-white px-5 py-3 rounded-full text-sm font-medium text-center hover:bg-white/25 transition-colors border border-white/20"
              >
                {agent.phone}
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl w-full"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 md:p-12 text-center"
            >
              {/* Agent Photo or Initials */}
              <div className="flex justify-center mb-6">
                {agent.photo ? (
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-white/30"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {agent.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium text-purple-300 tracking-wide uppercase mb-4"
              >
                Licensed Insurance Agent &mdash; {agent.location.city},{" "}
                {agent.location.state}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
              >
                Protecting What{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Matters Most
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto"
              >
                {agent.bio}
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-sm font-medium hover:from-purple-400 hover:to-blue-400 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call for Free Quote
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/20 transition-all"
                >
                  <EmailIcon className="w-4 h-4" />
                  Email Me
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-purple-400 tracking-wide uppercase mb-3 text-center"
            >
              What I Offer
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center"
            >
              Insurance Solutions
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => (
                <motion.div
                  key={product.slug}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${product.slug}`}
                    className="group block bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                      <ProductIcon
                        icon={product.icon}
                        className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {product.shortDescription}
                    </p>
                    <span className="inline-block mt-4 text-sm text-purple-400 group-hover:text-purple-300 transition-colors font-medium">
                      Learn more &rarr;
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustStats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/70 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 aspect-square flex items-center justify-center overflow-hidden"
            >
              {agent.photo ? (
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-8xl text-white/30 font-bold">
                  {agent.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              )}
            </motion.div>

            <div>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium text-purple-400 tracking-wide uppercase mb-3"
              >
                About Me
              </motion.p>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              >
                Your Trusted Insurance Partner
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-white/80 leading-relaxed mb-8"
              >
                {agent.bio}
              </motion.p>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/15 p-6 space-y-4"
              >
                <div className="flex items-center gap-3 text-white/90">
                  <MapPinIcon className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-sm">
                    {agent.location.address}, {agent.location.city},{" "}
                    {agent.location.state}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <PhoneIcon className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-sm">{agent.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <EmailIcon className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-sm">{agent.email}</span>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs text-white/50">
                    License #{agent.licenseNumber}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-purple-400 tracking-wide uppercase mb-3 text-center"
            >
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center"
            >
              Common Questions
            </motion.h2>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <FAQ items={generalFAQs} theme="dark" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 md:p-14 text-center"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <ShieldIcon className="w-7 h-7 text-purple-400" />
              </div>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-lg text-white/80 mb-10 max-w-lg mx-auto"
            >
              Get a free, no-obligation quote today. Let me find you the best
              coverage at the best price.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-sm font-medium hover:from-purple-400 hover:to-blue-400 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <PhoneIcon className="w-4 h-4" />
                {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/20 transition-all"
              >
                <EmailIcon className="w-4 h-4" />
                {agent.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">{agent.name}</p>
            <p className="text-sm text-white/70 mt-1">
              Licensed Insurance Agent &mdash; {agent.location.city},{" "}
              {agent.location.state}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/${agent.slug}/${p.slug}`}
                className="text-white/70 hover:text-white transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>License #{agent.licenseNumber}</p>
        </div>
      </footer>
    </div>
  );
}
