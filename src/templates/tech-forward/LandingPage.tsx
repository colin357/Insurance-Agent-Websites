"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AgentConfig } from "@/lib/types";
import { products } from "@/lib/products";
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
      "Independent agents represent multiple insurance companies, giving you access to more options and better rates. We work for you, not the insurance company, ensuring you get the best coverage for your needs.",
  },
  {
    question: "How much does it cost to get a quote?",
    answer:
      "Getting a quote is always free with no obligation. We compare options from multiple carriers to find you the best coverage at the most competitive price.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "Simply contact us directly and we will guide you through the entire claims process. We advocate on your behalf to ensure your claim is handled quickly and fairly.",
  },
  {
    question: "Can you help me bundle my insurance policies?",
    answer:
      "Absolutely! Bundling multiple policies (like home and auto) often results in significant discounts. We review all your insurance needs to find the best bundle savings.",
  },
  {
    question: "How often should I review my insurance coverage?",
    answer:
      "We recommend an annual review, or whenever you experience a major life change like buying a home, getting married, or having a child. We proactively reach out to schedule reviews.",
  },
];

const features = [
  {
    title: "Multiple Carriers",
    description:
      "Access to top-rated insurance companies so you get the best rate possible.",
    icon: "🏢",
  },
  {
    title: "Instant Comparisons",
    description:
      "Side-by-side policy comparisons to help you make informed decisions quickly.",
    icon: "⚡",
  },
  {
    title: "Digital-First Service",
    description:
      "Manage your policies online, get quotes digitally, and reach us anytime.",
    icon: "💻",
  },
  {
    title: "Expert Guidance",
    description:
      "Licensed professionals who simplify complex insurance decisions for you.",
    icon: "🎯",
  },
  {
    title: "Claims Support",
    description:
      "We advocate on your behalf for fast, fair claim resolutions every time.",
    icon: "🛡️",
  },
  {
    title: "Annual Reviews",
    description:
      "Proactive policy reviews to ensure you always have the best coverage.",
    icon: "📊",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us Your Needs",
    description:
      "Share your coverage requirements and we will analyze your unique situation.",
  },
  {
    number: "02",
    title: "Compare Options",
    description:
      "Review personalized quotes from multiple top-rated insurance carriers.",
  },
  {
    number: "03",
    title: "Get Covered",
    description:
      "Choose your plan and get protected. We handle all the paperwork for you.",
  },
];

export default function TechForwardLanding({
  agent,
}: {
  agent: AgentConfig;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqSearch, setFaqSearch] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredFAQs = generalFAQs.filter((faq) =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const initials = agent.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href={`/${agent.slug}`}
            className="flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <ShieldIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              {agent.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              FAQ
            </a>
            <a
              href={`tel:${agent.phone}`}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {mobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3">
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-gray-900 font-medium py-2"
                >
                  Features
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-gray-900 font-medium py-2"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-gray-900 font-medium py-2"
                >
                  About
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-gray-900 font-medium py-2"
                >
                  FAQ
                </a>
                <a
                  href={`tel:${agent.phone}`}
                  className="block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - SaaS Style */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Gradient orb accents */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Licensed Insurance Professional
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
              >
                Insurance,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  simplified
                </span>{" "}
                for modern life
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg"
              >
                Compare quotes from top carriers, get personalized
                recommendations, and secure your coverage — all with expert
                guidance from {agent.name}.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Get Your Free Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors text-sm"
                >
                  Explore Services
                </a>
              </motion.div>
            </motion.div>

            {/* Dashboard Mockup Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 shadow-2xl shadow-blue-500/10">
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  {/* Mock browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/60 border-b border-gray-700/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 bg-gray-700/50 rounded-md max-w-xs mx-auto" />
                    </div>
                  </div>
                  {/* Mock dashboard content */}
                  <div className="p-6 space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-lg p-4 border border-blue-500/20">
                        <div className="w-16 h-2 bg-blue-400/40 rounded mb-2" />
                        <div className="w-24 h-4 bg-blue-400/60 rounded" />
                      </div>
                      <div className="flex-1 bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                        <div className="w-16 h-2 bg-gray-600/40 rounded mb-2" />
                        <div className="w-20 h-4 bg-gray-600/60 rounded" />
                      </div>
                      <div className="hidden sm:block flex-1 bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                        <div className="w-16 h-2 bg-gray-600/40 rounded mb-2" />
                        <div className="w-20 h-4 bg-gray-600/60 rounded" />
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex justify-between items-center mb-3">
                        <div className="w-32 h-3 bg-gray-600/40 rounded" />
                        <div className="w-16 h-3 bg-blue-400/40 rounded" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-8 bg-gradient-to-r from-blue-600/15 to-transparent rounded" />
                        <div className="h-8 bg-gradient-to-r from-cyan-500/10 to-transparent rounded" />
                        <div className="h-8 bg-gradient-to-r from-blue-500/8 to-transparent rounded" />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1 h-24 bg-gray-800/50 rounded-lg border border-gray-700/50 p-3">
                        <div className="w-full h-full bg-gradient-to-t from-blue-500/20 to-transparent rounded" />
                      </div>
                      <div className="flex-1 h-24 bg-gray-800/50 rounded-lg border border-gray-700/50 p-3">
                        <div className="w-full h-full bg-gradient-to-t from-cyan-500/20 to-transparent rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-gray-200/50 px-4 py-3 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Carriers compared</div>
                  <div className="text-sm font-bold">20+ options</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-20 bg-gray-50 relative">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0891b2 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Everything you need,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                nothing you don&apos;t
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 border border-gray-200/60 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3"
            >
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Get covered in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                3 simple steps
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 relative"
          >
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20" />
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-blue-300/40" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-lg font-bold mb-6 relative z-10 shadow-lg shadow-blue-500/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section with Checklists */}
      <section id="services" className="py-20 bg-gray-50 relative">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3"
            >
              Our Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Coverage for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                every need
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product) => (
              <motion.div
                key={product.slug}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={`/${agent.slug}/${product.slug}`}
                  className="block bg-white rounded-xl p-6 border border-gray-200/60 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 flex items-center justify-center mb-4 group-hover:from-blue-600/20 group-hover:to-cyan-500/20 transition-colors">
                    <ProductIcon
                      icon={product.icon}
                      className="w-6 h-6 text-blue-600"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.shortDescription}
                  </p>
                  <ul className="space-y-2">
                    {product.benefits.slice(0, 3).map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckIcon className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-blue-600 group-hover:text-cyan-600 transition-colors">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="relative">
                {agent.photo ? (
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full max-w-md rounded-2xl object-cover aspect-[4/5] shadow-xl"
                  />
                ) : (
                  <div className="w-full max-w-md rounded-2xl aspect-[4/5] bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl">
                    <span className="text-8xl font-bold text-white/90">
                      {initials}
                    </span>
                  </div>
                )}
                {/* Decorative card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg shadow-gray-200/50 px-5 py-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                      <ShieldIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">License</div>
                      <div className="text-sm font-bold">
                        #{agent.licenseNumber}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                About Your Agent
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Meet{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {agent.name}
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {agent.bio}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Phone</div>
                    <a
                      href={`tel:${agent.phone}`}
                      className="font-medium hover:text-blue-600 transition-colors"
                    >
                      {agent.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <EmailIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <a
                      href={`mailto:${agent.email}`}
                      className="font-medium hover:text-blue-600 transition-colors"
                    >
                      {agent.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Location</div>
                    <span className="font-medium">
                      {agent.location.city}, {agent.location.state}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Searchable FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3"
            >
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
            >
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                questions
              </span>
            </motion.h2>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={faqSearch}
                  onChange={(e) => {
                    setFaqSearch(e.target.value);
                    setOpenFAQ(null);
                  }}
                  className="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-3"
          >
            {filteredFAQs.length === 0 ? (
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-center text-gray-500 py-8"
              >
                No questions match your search. Try a different term.
              </motion.p>
            ) : (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border border-gray-200/60 bg-white overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{
                        rotate: openFAQ === index ? 45 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 px-8 py-16 md:px-16 md:py-20 text-center"
          >
            {/* Dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to get started?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
                Get a free, no-obligation quote in minutes. Compare options from
                top carriers and find the perfect coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3.5 rounded-full font-semibold hover:bg-blue-50 transition-colors text-sm shadow-lg"
                >
                  <PhoneIcon className="w-4 h-4" />
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/15 text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold hover:bg-white/25 transition-colors text-sm"
                >
                  <EmailIcon className="w-4 h-4" />
                  Send an Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <ShieldIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">{agent.name}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-4">
                Licensed insurance professional dedicated to finding you the
                best coverage at the best price. Serving {agent.location.city},{" "}
                {agent.location.state} and surrounding areas.
              </p>
              <p className="text-gray-500 text-xs">
                License #{agent.licenseNumber}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-gray-400">
                Services
              </h4>
              <ul className="space-y-2.5">
                {products.slice(0, 5).map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/${agent.slug}/${product.slug}`}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-gray-400">
                Contact
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    {agent.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <EmailIcon className="w-4 h-4" />
                    {agent.email}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <MapPinIcon className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    {agent.location.address}
                    <br />
                    {agent.location.city}, {agent.location.state}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} {agent.name}. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors text-xs"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors text-xs"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
