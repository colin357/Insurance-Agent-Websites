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

const editorialInsights = [
  {
    number: "01",
    title: "Compare & Save",
    description:
      "Access multiple carriers through a single agent. We shop the market so you get the best coverage at competitive rates.",
  },
  {
    number: "02",
    title: "Personalized Coverage",
    description:
      "No cookie-cutter policies here. Every recommendation is tailored to your unique situation, risks, and budget.",
  },
  {
    number: "03",
    title: "Claims Advocacy",
    description:
      "When you need to file a claim, you have an advocate in your corner fighting for the settlement you deserve.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Life changes. Your insurance should too. We provide proactive annual reviews to keep your coverage current.",
  },
];

export default function BoldEditorialLanding({
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
    <div className="min-h-screen bg-white text-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={`/${agent.slug}`} className="flex items-center gap-3">
            <span className="text-xl font-serif font-bold text-gray-950 tracking-tight">
              {agent.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#services"
              className="text-gray-600 hover:text-rose-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#insights"
              className="text-gray-600 hover:text-rose-600 transition-colors font-medium"
            >
              Insights
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-rose-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-rose-600 transition-colors font-medium"
            >
              FAQ
            </a>
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
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-rose-600 font-medium py-2"
              >
                Services
              </a>
              <a
                href="#insights"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-rose-600 font-medium py-2"
              >
                Insights
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-rose-600 font-medium py-2"
              >
                About
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-rose-600 font-medium py-2"
              >
                FAQ
              </a>
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

      {/* Oversized Hero */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-white">
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

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-rose-600 font-medium text-sm tracking-[0.2em] uppercase mb-6 md:mb-8"
            >
              Independent Insurance Agent &mdash; {agent.location.city},{" "}
              {agent.location.state}
            </motion.p>

            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="font-serif font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-950 leading-[0.9] tracking-tight mb-8 md:mb-10 max-w-5xl"
            >
              Protection
              <br />
              <span className="italic text-rose-600">Reimagined</span>
              <span className="text-rose-600">.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10 md:mb-12"
            >
              {agent.bio}
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

        {/* Decorative large text watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none">
          <span className="font-serif text-[20rem] font-bold text-gray-50 leading-none">
            &amp;
          </span>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div
        className="relative h-24 md:h-32 bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
        }}
      />
      <div className="-mt-24 md:-mt-32 relative h-24 md:h-32 bg-stone-50" style={{
        clipPath: "polygon(0 70%, 100% 0, 100% 100%, 0 100%)",
      }} />

      {/* Services - Alternating L-R */}
      <section id="services" className="py-16 md:py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.6 }} className="mb-16 md:mb-20">
              <p className="text-rose-600 font-medium text-sm tracking-[0.2em] uppercase mb-4">
                What We Offer
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-gray-950 leading-tight tracking-tight max-w-3xl">
                Insurance Solutions<br />
                <span className="italic">Tailored to You</span>
              </h2>
            </motion.div>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                transition={{ duration: 0.7 }}
              >
                <Link
                  href={`/${agent.slug}/${product.slug}`}
                  className="group block"
                >
                  <div
                    className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                      i % 2 !== 0 ? "md:direction-rtl" : ""
                    }`}
                  >
                    {/* Image Placeholder Block */}
                    <div
                      className={`${i % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
                    >
                      <div
                        className={`aspect-[4/3] relative overflow-hidden ${
                          i % 3 === 0
                            ? "bg-rose-50"
                            : i % 3 === 1
                            ? "bg-stone-200"
                            : "bg-gray-100"
                        } group-hover:shadow-2xl transition-shadow duration-500`}
                      >
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <ProductIcon
                              icon={product.icon}
                              className="w-20 h-20 text-gray-300 group-hover:text-rose-400 transition-colors duration-500"
                            />
                          </div>
                        )}
                        {/* Corner accent */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-rose-600/0 group-hover:border-rose-600 transition-colors duration-500" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-rose-600/0 group-hover:border-rose-600 transition-colors duration-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`${i % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
                    >
                      <span className="font-serif text-6xl md:text-7xl font-bold text-gray-100 group-hover:text-rose-100 transition-colors duration-500 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif font-bold text-2xl md:text-3xl text-gray-950 mt-2 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 leading-relaxed mb-6 max-w-md">
                        {product.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-950 group-hover:text-rose-600 transition-colors uppercase tracking-[0.15em]">
                        Explore Coverage
                        <svg
                          className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
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
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div
        className="relative h-24 md:h-32 bg-stone-50"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 30%)",
        }}
      />
      <div className="-mt-24 md:-mt-32 relative h-24 md:h-32 bg-gray-950" style={{
        clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
      }} />

      {/* Editorial Insights Strip */}
      <section id="insights" className="py-16 md:py-24 px-6 bg-gray-950">
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
              <p className="text-rose-500 font-medium text-sm tracking-[0.2em] uppercase mb-4">
                The Editorial
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight max-w-4xl">
                Why an Independent Agent<br />
                <span className="italic text-rose-400">Makes the Difference</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-px bg-white/10">
              {editorialInsights.map((insight, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-950 p-8 md:p-12 group hover:bg-gray-900 transition-colors duration-500"
                >
                  <span className="font-serif text-5xl md:text-6xl font-bold text-white/5 group-hover:text-rose-500/20 transition-colors duration-500 leading-none block mb-4">
                    {insight.number}
                  </span>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-white mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {insight.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Pull Quote */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="mt-16 md:mt-20 border-l-4 border-rose-600 pl-8 md:pl-12"
            >
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-snug italic max-w-4xl">
                &ldquo;Great insurance is not about selling policies. It&rsquo;s about
                understanding people, anticipating risk, and building trust that
                lasts a lifetime.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px w-8 bg-rose-600" />
                <p className="text-rose-400 font-medium text-sm tracking-wide">
                  {agent.name}, Licensed Insurance Professional
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div
        className="relative h-24 md:h-32 bg-gray-950"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
        }}
      />
      <div className="-mt-24 md:-mt-32 relative h-24 md:h-32 bg-white" style={{
        clipPath: "polygon(0 70%, 100% 0, 100% 100%, 0 100%)",
      }} />

      {/* About */}
      <section id="about" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            {/* Photo / Initials */}
            <motion.div
              variants={fadeInLeft}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="aspect-[3/4] bg-stone-100 overflow-hidden relative">
                  {agent.photo ? (
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
                      <span className="font-serif text-8xl md:text-9xl font-bold text-stone-300">
                        {initials}
                      </span>
                    </div>
                  )}
                  {/* Decorative frame */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-rose-600/20 -z-10" />
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              variants={fadeInRight}
              transition={{ duration: 0.7 }}
            >
              <p className="text-rose-600 font-medium text-sm tracking-[0.2em] uppercase mb-4">
                Your Agent
              </p>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-950 leading-tight tracking-tight mb-8">
                Meet {agent.name}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                {agent.bio}
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4">
                  <MapPinIcon className="w-5 h-5 text-rose-600 shrink-0" />
                  <div>
                    <p className="text-gray-950 font-medium">
                      {agent.location.address}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {agent.location.city}, {agent.location.state}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="w-5 h-5 text-rose-600 shrink-0" />
                  <a
                    href={`tel:${agent.phone}`}
                    className="text-gray-950 font-medium hover:text-rose-600 transition-colors"
                  >
                    {agent.phone}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <EmailIcon className="w-5 h-5 text-rose-600 shrink-0" />
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-gray-950 font-medium hover:text-rose-600 transition-colors"
                  >
                    {agent.email}
                  </a>
                </div>
              </div>

              <p className="text-xs text-gray-400 tracking-wide uppercase">
                License #{agent.licenseNumber} &mdash; State of{" "}
                {agent.location.state}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div
        className="relative h-24 md:h-32 bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 30%)",
        }}
      />
      <div className="-mt-24 md:-mt-32 relative h-24 md:h-32 bg-stone-50" style={{
        clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
      }} />

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 px-6 bg-stone-50">
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
                Frequently Asked
              </h2>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
              <FAQ items={generalFAQs} theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 px-6 bg-gray-950 overflow-hidden">
        {/* Diagonal top edge */}
        <div
          className="absolute top-0 left-0 right-0 h-24 md:h-32 bg-stone-50"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
          }}
        />

        {/* Large decorative typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-serif text-[12rem] md:text-[20rem] lg:text-[28rem] font-bold text-white/[0.02] leading-none">
            GO
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto text-center pt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-rose-500 font-medium text-sm tracking-[0.2em] uppercase mb-6"
            >
              Start Today
            </motion.p>
            <motion.h2
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight mb-8"
            >
              Ready to Rethink<br />
              <span className="italic text-rose-400">Your Coverage?</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Get a free, no-obligation consultation. Let {agent.name} build a
              comprehensive protection plan tailored to your life.
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
                Email Us
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
                      className="text-sm text-gray-500 hover:text-rose-400 transition-colors"
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
