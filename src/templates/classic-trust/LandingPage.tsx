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
  ShieldIcon,
  MenuIcon,
  XIcon,
} from "@/components/icons";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
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

export default function ClassicTrustLanding({
  agent,
}: {
  agent: AgentConfig;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900 border-b-2 border-amber-600/60">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo / Agent Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border-2 border-amber-600 rounded-sm flex items-center justify-center">
              <ShieldIcon className="w-4 h-4 text-amber-500" />
            </div>
            <span className="text-lg font-serif font-extrabold text-white tracking-wide">
              {agent.name}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              FAQ
            </a>
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
              <PhoneIcon className="w-4 h-4" />
              <a href={`tel:${agent.phone}`} className="hover:text-amber-300 transition-colors">
                {agent.phone}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div className="md:hidden bg-blue-900 border-t border-blue-800 px-6 pb-6 pt-4 space-y-4">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              FAQ
            </a>
            <div className="pt-2 border-t border-blue-800">
              <a
                href={`tel:${agent.phone}`}
                className="flex items-center gap-2 text-amber-400 font-semibold text-sm"
              >
                <PhoneIcon className="w-4 h-4" />
                {agent.phone}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative pt-[72px] bg-gradient-to-b from-slate-800 via-blue-900 to-slate-800 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-amber-600" />
              <p className="text-amber-400 font-medium text-sm tracking-widest uppercase">
                Licensed Insurance Professional
              </p>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white leading-tight mb-8"
            >
              Protecting What
              <br />
              Matters Most
              <span className="text-amber-600">.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-sans"
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
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 font-semibold text-sm hover:bg-amber-500 transition-all tracking-wide uppercase"
              >
                <PhoneIcon className="w-4 h-4" />
                Request a Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 border-2 border-slate-400 text-white px-8 py-4 font-semibold text-sm hover:border-amber-500 hover:text-amber-400 transition-all tracking-wide uppercase"
              >
                <EmailIcon className="w-4 h-4" />
                Send a Message
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700" />
      </section>

      {/* ─── Trust Badges Row ─── */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              {
                label: "Licensed & Insured",
                icon: (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                ),
              },
              {
                label: "A+ Rated",
                icon: (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                ),
              },
              {
                label: "Trusted Advisor",
                icon: (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ),
              },
              {
                label: "Independent Agent",
                icon: (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                ),
              },
            ].map((badge, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-amber-600">
                  {badge.icon}
                </div>
                <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-20 px-6 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="text-center mb-14">
              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-4 mb-4"
              >
                <div className="h-px w-16 bg-amber-500" />
                <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
                  Why Choose Us
                </p>
                <div className="h-px w-16 bg-amber-500" />
              </motion.div>
              <motion.h2
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-extrabold text-white"
              >
                A Record of Trust &amp; Reliability
              </motion.h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {[
                { value: "20+", label: "Years of Experience" },
                { value: "2,500+", label: "Clients Served" },
                { value: "30+", label: "Insurance Carriers" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mb-3">
                    <span className="text-4xl md:text-5xl font-serif font-extrabold text-amber-500">
                      {stat.value}
                    </span>
                  </div>
                  <div className="h-px w-10 bg-amber-600/40 mx-auto mb-3" />
                  <p className="text-sm text-slate-300 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section id="services" className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="text-center mb-16">
              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-4 mb-4"
              >
                <div className="h-px w-16 bg-amber-600" />
                <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
                  Our Services
                </p>
                <div className="h-px w-16 bg-amber-600" />
              </motion.div>
              <motion.h2
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-extrabold text-slate-800"
              >
                Comprehensive Insurance Solutions
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <motion.div
                  key={product.slug}
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${product.slug}`}
                    className="group block bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="h-1 bg-transparent group-hover:bg-amber-600 transition-colors duration-300" />
                    <div className="p-8">
                      <div className="w-12 h-12 bg-blue-900 flex items-center justify-center mb-5">
                        <ProductIcon
                          icon={product.icon}
                          className="w-6 h-6 text-amber-500"
                        />
                      </div>
                      <h3 className="font-serif font-bold text-xl text-slate-800 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5 font-sans">
                        {product.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 group-hover:text-amber-600 transition-colors uppercase tracking-wider">
                        Learn More
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                    </div>
                    <div className="h-1 bg-transparent group-hover:bg-amber-600 transition-colors duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-5 gap-12 items-start"
          >
            {/* Photo Column */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 -right-3 -bottom-3 border-2 border-amber-600/40" />
                <div className="relative bg-gradient-to-br from-slate-200 to-slate-300 aspect-[4/5] flex items-center justify-center overflow-hidden">
                  {agent.photo ? (
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-7xl font-serif font-extrabold text-slate-400">
                      {agent.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Info Column */}
            <div className="lg:col-span-3">
              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-px w-12 bg-amber-600" />
                <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
                  About Your Agent
                </p>
              </motion.div>

              <motion.h2
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-extrabold text-slate-800 mb-6"
              >
                A Tradition of Trust &amp; Excellence
              </motion.h2>

              <motion.p
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-slate-600 leading-relaxed mb-8 text-lg font-sans"
              >
                {agent.bio}
              </motion.p>

              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="grid sm:grid-cols-2 gap-6 mb-8"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Office
                      </p>
                      <p className="text-sm text-slate-700">
                        {agent.location.address}
                        <br />
                        {agent.location.city}, {agent.location.state}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${agent.phone}`}
                        className="text-sm text-slate-700 hover:text-amber-600 transition-colors"
                      >
                        {agent.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <EmailIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${agent.email}`}
                        className="text-sm text-slate-700 hover:text-amber-600 transition-colors"
                      >
                        {agent.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Credentials sidebar */}
                <div className="bg-blue-900 p-6 text-white">
                  <h4 className="font-serif font-bold text-lg mb-4 text-amber-400">
                    Credentials
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                      <span className="text-slate-300">
                        License #{agent.licenseNumber}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                      <span className="text-slate-300">
                        State of {agent.location.state}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                      <span className="text-slate-300">
                        Independent Agent
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                      <span className="text-slate-300">
                        Multiple Carrier Access
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                      <span className="text-slate-300">
                        Continuing Education
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section
        id="testimonials"
        className="py-24 px-6 bg-gradient-to-b from-slate-800 via-blue-900 to-slate-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="text-center mb-14">
              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-4 mb-4"
              >
                <div className="h-px w-16 bg-amber-500" />
                <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
                  Testimonials
                </p>
                <div className="h-px w-16 bg-amber-500" />
              </motion.div>
              <motion.h2
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-extrabold text-white"
              >
                What Our Clients Say
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Working with this agency was the best decision I made for my family. They found us comprehensive coverage at a rate we could actually afford.",
                  name: "Robert M.",
                  title: "Homeowner",
                },
                {
                  quote:
                    "After 15 years with the same carrier, I was shocked at how much I could save. The whole process was handled professionally and with genuine care.",
                  name: "Patricia L.",
                  title: "Business Owner",
                },
                {
                  quote:
                    "When we had a claim, they handled everything. Having a dedicated agent who actually answers the phone makes all the difference in the world.",
                  name: "James K.",
                  title: "Auto & Home Client",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 border border-white/10 p-8"
                >
                  <svg
                    className="w-10 h-10 text-amber-500/50 mb-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <blockquote className="text-slate-200 leading-relaxed mb-6 font-sans">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-amber-400 font-serif font-bold">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-400 text-sm">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="text-center mb-14">
              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-4 mb-4"
              >
                <div className="h-px w-16 bg-amber-600" />
                <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
                  FAQ
                </p>
                <div className="h-px w-16 bg-amber-600" />
              </motion.div>
              <motion.h2
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-extrabold text-slate-800"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>
            <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
              <FAQ items={generalFAQs} theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-800 to-blue-900 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="w-14 h-14 border-2 border-amber-600 flex items-center justify-center">
                <ShieldIcon className="w-7 h-7 text-amber-500" />
              </div>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-serif font-extrabold text-white mb-6"
            >
              Secure Your Future Today
            </motion.h2>
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-sans"
            >
              Schedule a complimentary, no-obligation consultation. Let us help
              you build a comprehensive protection plan tailored to your unique
              needs.
            </motion.p>
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-10 py-4 font-semibold text-sm hover:bg-amber-500 transition-all tracking-wide uppercase"
              >
                <PhoneIcon className="w-4 h-4" />
                Call {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 border-2 border-slate-400 text-white px-10 py-4 font-semibold text-sm hover:border-amber-500 hover:text-amber-400 transition-all tracking-wide uppercase"
              >
                <EmailIcon className="w-4 h-4" />
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-slate-800 text-slate-300 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 pb-12">
            {/* Column 1 - Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border-2 border-amber-600 rounded-sm flex items-center justify-center">
                  <ShieldIcon className="w-4 h-4 text-amber-500" />
                </div>
                <span className="text-lg font-serif font-extrabold text-white">
                  {agent.name}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 font-sans">
                Providing trusted insurance solutions in {agent.location.city},{" "}
                {agent.location.state} and the surrounding areas.
              </p>
              <p className="text-xs text-slate-500">
                License #{agent.licenseNumber}
              </p>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h4 className="font-serif font-bold text-amber-400 mb-4 text-sm tracking-wider uppercase">
                Insurance Services
              </h4>
              <div className="h-px w-8 bg-amber-600/40 mb-4" />
              <ul className="space-y-2.5">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${agent.slug}/${p.slug}`}
                      className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h4 className="font-serif font-bold text-amber-400 mb-4 text-sm tracking-wider uppercase">
                Contact Information
              </h4>
              <div className="h-px w-8 bg-amber-600/40 mb-4" />
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <MapPinIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-slate-400">
                    {agent.location.address}, {agent.location.city},{" "}
                    {agent.location.state}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <PhoneIcon className="w-4 h-4 text-amber-500 shrink-0" />
                  <a
                    href={`tel:${agent.phone}`}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {agent.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <EmailIcon className="w-4 h-4 text-amber-500 shrink-0" />
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {agent.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-amber-600/20 pt-8 text-center">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {agent.name}. All rights
              reserved. Licensed in the State of {agent.location.state}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
