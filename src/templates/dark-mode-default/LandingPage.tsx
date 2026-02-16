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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
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

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "1000+", label: "Clients Served" },
  { value: "50+", label: "Carriers Available" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function DarkModeDefaultLanding({
  agent,
}: {
  agent: AgentConfig;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="max-w-6xl mx-auto bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800/50 px-6 py-3">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold tracking-tight text-cyan-400">
              {agent.name}
            </span>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a
                href="#services"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#faq"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                FAQ
              </a>
              <a
                href={`tel:${agent.phone}`}
                className="bg-cyan-400 text-zinc-950 px-5 py-2 rounded-xl text-sm font-semibold hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-400/20"
              >
                {agent.phone}
              </a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-400 hover:text-white transition-colors"
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pt-4 pb-2 border-t border-zinc-800/50 mt-3"
            >
              <div className="flex flex-col gap-3">
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors duration-300 py-2"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors duration-300 py-2"
                >
                  About
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors duration-300 py-2"
                >
                  FAQ
                </a>
                <a
                  href={`tel:${agent.phone}`}
                  className="bg-cyan-400 text-zinc-950 px-5 py-2.5 rounded-xl text-sm font-semibold text-center hover:bg-cyan-300 transition-all duration-300 mt-1"
                >
                  {agent.phone}
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(52,211,153,0.06),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-sm text-cyan-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Licensed Agent — {agent.location.city}, {agent.location.state}
            </motion.div>
            <motion.h1
              variants={slideLeft}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
            >
              Insurance That
              <br />
              <span className="text-cyan-400">Works for You.</span>
            </motion.h1>
            <motion.p
              variants={slideLeft}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-10 max-w-2xl"
            >
              {agent.bio}
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-3 bg-cyan-400 text-zinc-950 px-8 py-4 rounded-xl text-base font-bold hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 hover:scale-105"
              >
                <PhoneIcon className="w-5 h-5" />
                Get Your Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-3 border border-zinc-700 text-white px-8 py-4 rounded-xl text-base font-bold hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300"
              >
                <EmailIcon className="w-5 h-5" />
                Send a Message
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative py-16 px-6 border-y border-zinc-800 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-400 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
            <motion.div
              variants={slideLeft}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Our{" "}
                <span className="text-cyan-400">Services</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl">
                Comprehensive coverage options tailored to your unique needs.
                Explore our full range of insurance products.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => (
                <motion.div
                  key={product.slug}
                  variants={scaleUp}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${product.slug}`}
                    className="group block rounded-2xl p-7 bg-zinc-900 border border-zinc-800 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5 group-hover:bg-cyan-400/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/10">
                      <ProductIcon
                        icon={product.icon}
                        className="w-6 h-6 text-cyan-400"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">
                      {product.name}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                      {product.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300">
                      Explore Coverage
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-5 gap-14 items-center"
          >
            <motion.div
              variants={slideLeft}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Your Trusted{" "}
                <span className="text-cyan-400">Insurance Partner</span>
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                {agent.bio}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>
                    {agent.location.address}, {agent.location.city},{" "}
                    {agent.location.state}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <EmailIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>{agent.email}</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-zinc-500">
                License #{agent.licenseNumber}
              </p>
            </motion.div>
            <motion.div
              variants={slideRight}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 rounded-3xl blur-xl" />
                <div className="relative bg-zinc-900 rounded-3xl aspect-square flex items-center justify-center border border-zinc-800 overflow-hidden">
                  {agent.photo ? (
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-full h-full object-cover object-top rounded-3xl"
                    />
                  ) : (
                    <span className="text-8xl font-bold text-cyan-400">
                      {agent.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
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
            <motion.div
              variants={scaleUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Frequently Asked{" "}
                <span className="text-cyan-400">Questions</span>
              </h2>
              <p className="text-lg text-zinc-300">
                Everything you need to know about working with me.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <FAQ items={generalFAQs} theme="dark" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bright CTA Block */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-emerald-500" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={scaleUp}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-zinc-950"
            >
              Ready to Get
              <br />
              Protected?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-lg text-zinc-800 mb-10 max-w-xl mx-auto"
            >
              Take the first step toward peace of mind. Get a free,
              no-obligation quote today.
            </motion.p>
            <motion.div
              variants={scaleUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-3 bg-zinc-950 text-cyan-400 px-8 py-4 rounded-xl text-base font-bold hover:bg-zinc-900 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                <PhoneIcon className="w-5 h-5" />
                {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-3 border-2 border-zinc-950/30 text-zinc-950 px-8 py-4 rounded-xl text-base font-bold hover:border-zinc-950/60 hover:bg-zinc-950/10 transition-all duration-300"
              >
                <EmailIcon className="w-5 h-5" />
                {agent.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div>
              <span className="text-lg font-bold text-cyan-400">
                {agent.name}
              </span>
              <p className="text-sm text-zinc-500 mt-2">
                Licensed Insurance Agent — {agent.location.city},{" "}
                {agent.location.state}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${agent.slug}/${p.slug}`}
                  className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-zinc-800/50 text-center text-xs text-zinc-600">
            <p>License #{agent.licenseNumber}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
