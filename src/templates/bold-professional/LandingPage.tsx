"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AgentConfig } from "@/lib/types";
import { products } from "@/lib/products";
import { FAQ } from "@/components/FAQ";
import { ProductIcon, PhoneIcon, EmailIcon, MapPinIcon } from "@/components/icons";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
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

export default function BoldProfessionalLanding({ agent }: { agent: AgentConfig }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {agent.name}
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition-colors duration-300">
              Services
            </a>
            <a href="#about" className="hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#faq" className="hover:text-white transition-colors duration-300">
              FAQ
            </a>
            <a
              href={`tel:${agent.phone}`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              {agent.phone}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950/50 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Licensed Insurance Agent — {agent.location.city}, {agent.location.state}
            </motion.div>
            <motion.h1
              variants={slideFromLeft}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8"
            >
              Protect What
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Matters Most.
              </span>
            </motion.h1>
            <motion.p
              variants={slideFromLeft}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl"
            >
              {agent.bio}
            </motion.p>
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-5"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl text-base font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                <PhoneIcon className="w-5 h-5" />
                Get Your Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-3 border-2 border-white/20 text-white px-10 py-5 rounded-xl text-base font-bold hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                <EmailIcon className="w-5 h-5" />
                Send a Message
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="relative py-20 px-6 border-y border-white/10 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
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
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div
              variants={slideFromLeft}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Insurance{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl">
                Comprehensive coverage options tailored to your unique needs. Explore our full range of insurance products.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, i) => (
                <motion.div
                  key={product.slug}
                  variants={scaleIn}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${product.slug}`}
                    className="group relative block rounded-2xl p-8 bg-gray-900 border border-white/10 hover:border-transparent transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-[1px] rounded-2xl bg-gray-900 group-hover:bg-gray-900/95 transition-colors duration-500" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-500 group-hover:scale-110">
                        <ProductIcon
                          icon={product.icon}
                          className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                        />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-white group-hover:text-white transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                        {product.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                        Explore Coverage
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-5 gap-16 items-center"
          >
            <motion.div
              variants={slideFromLeft}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Your Insurance.{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  My Priority.
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {agent.bio}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>{agent.location.address}, {agent.location.city}, {agent.location.state}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                    <EmailIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>{agent.email}</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                License #{agent.licenseNumber}
              </p>
            </motion.div>
            <motion.div
              variants={slideFromRight}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl opacity-50 blur-xl" />
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl aspect-square flex items-center justify-center border border-white/10 overflow-hidden">
                  {agent.photo ? (
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-full h-full object-cover object-top rounded-3xl"
                    />
                  ) : (
                    <span className="text-8xl font-extrabold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {agent.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-lg text-gray-400">
                Everything you need to know about working with me.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <FAQ items={generalFAQs} theme="dark" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={scaleIn}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              Ready to Get
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Protected?
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-xl mx-auto"
            >
              Take the first step toward peace of mind. Get a free, no-obligation quote today.
            </motion.p>
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-5"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-xl text-base font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                <PhoneIcon className="w-5 h-5" />
                {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-10 py-5 rounded-xl text-base font-bold hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                <EmailIcon className="w-5 h-5" />
                {agent.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gray-950 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {agent.name}
              </span>
              <p className="text-sm text-gray-500 mt-2">
                Licensed Insurance Agent — {agent.location.city}, {agent.location.state}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-3">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${agent.slug}/${p.slug}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
            <p>License #{agent.licenseNumber}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
