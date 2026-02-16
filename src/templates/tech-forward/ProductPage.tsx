"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AgentConfig, ProductInfo } from "@/lib/types";
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

export default function TechForwardProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqSearch, setFaqSearch] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const otherProducts = products.filter((p) => p.slug !== product.slug);

  const filteredFAQs = product.faqs.filter((faq) =>
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
              href={`/${agent.slug}#faq`}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              FAQ
            </Link>
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
                  href={`/${agent.slug}#faq`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-gray-900 font-medium py-2"
                >
                  FAQ
                </Link>
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

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <Link
                href={`/${agent.slug}#services`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6 hover:bg-blue-100 transition-colors"
              >
                <span>&larr;</span>
                All Services
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <ProductIcon
                  icon={product.icon}
                  className="w-7 h-7 text-white"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {product.name}
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl"
            >
              {product.heroDescription}
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
                href={`mailto:${agent.email}`}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors text-sm"
              >
                <EmailIcon className="w-4 h-4" />
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section with Checklists */}
      <section className="py-20 bg-gray-50 relative">
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
              Key Benefits
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Why choose our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {product.name.toLowerCase()}
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
            {product.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 border border-gray-200/60 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-500/10 flex items-center justify-center shrink-0 group-hover:from-blue-600/20 group-hover:to-cyan-500/20 transition-colors">
                    <CheckIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed pt-2">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coverage Details */}
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
              Coverage Options
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                coverage details
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
            {product.coverageDetails.map((detail, i) => {
              const [title, ...desc] = detail.split(" — ");
              const description = desc.join(" — ");

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200/60 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 shadow-md shadow-blue-500/15">
                    <ProductIcon
                      icon={product.icon}
                      className="w-5 h-5 text-white"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>
                  {description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {description}
                    </p>
                  )}
                </motion.div>
              );
            })}
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
              Common{" "}
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

      {/* Other Products Section */}
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
              Explore More
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Other{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                coverage options
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
            {otherProducts.map((p) => (
              <motion.div
                key={p.slug}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={`/${agent.slug}/${p.slug}`}
                  className="block bg-gray-50 rounded-xl p-6 border border-gray-200/60 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all group h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 flex items-center justify-center mb-4 group-hover:from-blue-600/20 group-hover:to-cyan-500/20 transition-colors">
                    <ProductIcon
                      icon={p.icon}
                      className="w-6 h-6 text-blue-600"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {p.shortDescription}
                  </p>
                  <span className="text-sm font-semibold text-blue-600 group-hover:text-cyan-600 transition-colors">
                    Learn more &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
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
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <ProductIcon
                  icon={product.icon}
                  className="w-8 h-8 text-white"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Ready for {product.name.toLowerCase()}?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
                Get a free, personalized quote from {agent.name}. Compare
                options from top carriers and find the perfect coverage for your
                needs.
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
                {products.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${agent.slug}/${p.slug}`}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {p.name}
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
