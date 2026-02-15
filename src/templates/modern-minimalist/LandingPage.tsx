"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AgentConfig } from "@/lib/types";
import { products } from "@/lib/products";
import { FAQ } from "@/components/FAQ";
import { ProductIcon, PhoneIcon, EmailIcon, MapPinIcon } from "@/components/icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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

export default function ModernMinimalistLanding({ agent }: { agent: AgentConfig }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">{agent.name}</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
            <a
              href={`tel:${agent.phone}`}
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors"
            >
              {agent.phone}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-4"
            >
              Licensed Insurance Agent — {agent.location.city}, {agent.location.state}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Insurance that
              <br />
              <span className="text-gray-400">works for you.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl"
            >
              {agent.bio}
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105"
              >
                <PhoneIcon className="w-4 h-4" />
                Call for Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 border border-gray-300 px-8 py-4 rounded-full text-sm font-medium hover:border-gray-900 transition-all"
              >
                <EmailIcon className="w-4 h-4" />
                Email Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-50">
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
              className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-3"
            >
              What I Offer
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
            >
              Insurance Solutions
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <motion.div
                  key={product.slug}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${product.slug}`}
                    className="group block bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                      <ProductIcon icon={product.icon} className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {product.shortDescription}
                    </p>
                    <span className="inline-block mt-4 text-sm text-gray-400 group-hover:text-blue-600 transition-colors">
                      Learn more →
                    </span>
                  </Link>
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
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-3"
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
                className="text-gray-500 leading-relaxed mb-6"
              >
                {agent.bio}
              </motion.p>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPinIcon className="w-4 h-4 text-gray-400" />
                  {agent.location.address}, {agent.location.city}, {agent.location.state}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <PhoneIcon className="w-4 h-4 text-gray-400" />
                  {agent.phone}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <EmailIcon className="w-4 h-4 text-gray-400" />
                  {agent.email}
                </div>
              </motion.div>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="mt-4 text-xs text-gray-400"
              >
                License #{agent.licenseNumber}
              </motion.p>
            </div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl aspect-square flex items-center justify-center"
            >
              {agent.photo ? (
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
              ) : (
                <span className="text-8xl text-gray-400 font-bold">
                  {agent.name.split(" ").map((n) => n[0]).join("")}
                </span>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-gray-50">
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
              className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-3 text-center"
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
              <FAQ items={generalFAQs} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Ready to get started?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-xl text-gray-500 mb-10"
            >
              Get a free, no-obligation quote today.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105"
              >
                <PhoneIcon className="w-4 h-4" />
                {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 border border-gray-300 px-8 py-4 rounded-full text-sm font-medium hover:border-gray-900 transition-all"
              >
                <EmailIcon className="w-4 h-4" />
                {agent.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-semibold">{agent.name}</p>
            <p className="text-sm text-gray-500">
              Licensed Insurance Agent — {agent.location.city}, {agent.location.state}
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/${agent.slug}/${p.slug}`}
                className="hover:text-gray-900 transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          <p>License #{agent.licenseNumber}</p>
        </div>
      </footer>
    </div>
  );
}
