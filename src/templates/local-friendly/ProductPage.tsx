"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AgentConfig, ProductInfo } from "@/lib/types";
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function LocalFriendlyProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  const initials = agent.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="min-h-screen bg-orange-50/40 text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-50/90 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between py-3">
          <Link
            href={`/${agent.slug}`}
            className="text-xl font-bold text-stone-800 tracking-tight hover:text-emerald-700 transition-colors duration-300"
          >
            {agent.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href={`/${agent.slug}#services`}
              className="px-4 py-2 rounded-full text-sm font-medium text-stone-600 hover:bg-amber-100 hover:text-amber-800 transition-all duration-300"
            >
              All Services
            </Link>
            <a
              href={`sms:${agent.phone}`}
              className="inline-flex items-center gap-1.5 border-2 border-emerald-600 text-emerald-700 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-50 transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
              Text Us
            </a>
            <a
              href={`tel:${agent.phone}`}
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-all duration-300 shadow-md shadow-emerald-200"
            >
              <PhoneIcon className="w-4 h-4" />
              {agent.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${agent.phone}`}
              className="inline-flex items-center gap-1.5 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-emerald-200"
            >
              <PhoneIcon className="w-4 h-4" />
              Call
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-amber-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <XIcon className="w-6 h-6 text-stone-700" />
              ) : (
                <MenuIcon className="w-6 h-6 text-stone-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-orange-50/95 backdrop-blur-md border-t border-amber-100 px-6 py-4 space-y-2"
          >
            <Link
              href={`/${agent.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-2xl text-sm font-medium text-stone-600 hover:bg-amber-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href={`/${agent.slug}#services`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-2xl text-sm font-medium text-stone-600 hover:bg-amber-100 transition-colors"
            >
              All Services
            </Link>
            <div className="flex gap-2 pt-2">
              <a
                href={`sms:${agent.phone}`}
                className="flex-1 text-center border-2 border-emerald-600 text-emerald-700 px-4 py-3 rounded-full text-sm font-medium"
              >
                Text Us
              </a>
              <a
                href={`tel:${agent.phone}`}
                className="flex-1 text-center bg-emerald-600 text-white px-4 py-3 rounded-full text-sm font-medium"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-orange-50 via-amber-50/60 to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Link
                href={`/${agent.slug}`}
                className="text-sm text-emerald-600 hover:text-emerald-800 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <span className="text-stone-300 mx-2">/</span>
              <span className="text-sm text-stone-400 font-medium">
                {product.name}
              </span>
            </motion.div>

            <motion.div
              variants={bounceIn}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 150,
                damping: 15,
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-6 shadow-md shadow-emerald-100"
            >
              <ProductIcon
                icon={product.icon}
                className="w-8 h-8 text-emerald-600"
              />
            </motion.div>
            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-stone-800"
            >
              {product.name}
            </motion.h1>
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-stone-500 leading-relaxed mb-10 max-w-2xl font-medium"
            >
              {product.heroDescription}
            </motion.p>
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-200/50 hover:shadow-orange-300/50 hover:scale-[1.02]"
              >
                <PhoneIcon className="w-5 h-5" />
                Get a Free Quote
              </a>
              <a
                href={`sms:${agent.phone}`}
                className="inline-flex items-center gap-2 bg-white border-2 border-emerald-200 text-emerald-700 px-8 py-4 rounded-full font-medium hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
                Text Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-sm font-semibold text-emerald-700 tracking-wide uppercase mb-3">
                Benefits
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                Why {product.name} Matters
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={bounceIn}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="flex items-start gap-4 bg-orange-50/50 rounded-2xl p-6 border border-amber-100 hover:border-emerald-300 hover:bg-white hover:shadow-lg hover:shadow-emerald-50 transition-all duration-500"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-stone-600 leading-relaxed font-medium">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-20 px-6 bg-amber-50/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-sm font-semibold text-emerald-700 tracking-wide uppercase mb-3">
                What&apos;s Covered
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                Coverage Options
              </h2>
            </motion.div>
            <div className="space-y-4">
              {product.coverageDetails.map((detail, i) => {
                const [title, ...desc] = detail.split(" — ");
                return (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-6 md:p-8 border border-amber-100 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-emerald-600">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-stone-800 group-hover:text-emerald-700 transition-colors duration-300">
                          {title}
                        </h3>
                        {desc.length > 0 && (
                          <p className="text-stone-500 mt-1 leading-relaxed font-medium">
                            {desc.join(" — ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-sm font-semibold text-emerald-700 tracking-wide uppercase mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                {product.name} FAQ
              </h2>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.6 }}>
              <FAQ items={product.faqs} theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-20 px-6 bg-amber-50/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-sm font-semibold text-emerald-700 tracking-wide uppercase mb-3">
                More Ways I Can Help
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                Explore Other Coverage
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.map((p) => (
                <motion.div
                  key={p.slug}
                  variants={bounceIn}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                >
                  <Link
                    href={`/${agent.slug}/${p.slug}`}
                    className="group block bg-white rounded-2xl p-6 border border-amber-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-500 h-full"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-4 group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-500">
                      <ProductIcon
                        icon={p.icon}
                        className="w-6 h-6 text-emerald-600"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-stone-800 group-hover:text-emerald-700 transition-colors duration-300">
                      {p.name}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed font-medium mb-3">
                      {p.shortDescription}
                    </p>
                    <span className="inline-flex items-center text-sm text-emerald-600 font-semibold group-hover:text-teal-600 transition-colors duration-300">
                      Learn more
                      <svg
                        className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
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

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={bounceIn}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              className="bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-600 rounded-2xl p-10 md:p-16 text-center text-white shadow-2xl shadow-emerald-200/50 relative overflow-hidden"
            >
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3" />
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full" />

              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  Get Your Free
                  <br />
                  {product.name} Quote
                </h2>
                <p className="text-xl text-emerald-100 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                  No obligation, no pressure -- just friendly, honest advice
                  from your neighbor {agent.name}.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={`tel:${agent.phone}`}
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 shadow-lg hover:scale-[1.02]"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    {agent.phone}
                  </a>
                  <a
                    href={`sms:${agent.phone}`}
                    className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:border-white/70 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                      />
                    </svg>
                    Text Us
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:border-white/70 transition-all duration-300"
                  >
                    <EmailIcon className="w-5 h-5" />
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-16 px-6 rounded-t-2xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link
                href={`/${agent.slug}`}
                className="text-xl font-bold hover:text-emerald-300 transition-colors duration-300"
              >
                {agent.name}
              </Link>
              <p className="text-stone-400 text-sm mt-3 leading-relaxed font-medium">
                Your friendly neighborhood insurance agent serving{" "}
                {agent.location.city}, {agent.location.state} and the
                surrounding communities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-400 mb-4">
                Insurance Products
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${agent.slug}/${p.slug}`}
                    className="text-sm text-stone-400 hover:text-emerald-300 transition-colors duration-300"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-400 mb-4">
                Get in Touch
              </h4>
              <div className="space-y-3 text-sm text-stone-400">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex items-center gap-2 hover:text-emerald-300 transition-colors duration-300"
                >
                  <PhoneIcon className="w-4 h-4" />
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-2 hover:text-emerald-300 transition-colors duration-300"
                >
                  <EmailIcon className="w-4 h-4" />
                  {agent.email}
                </a>
                <span className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  {agent.location.address}, {agent.location.city},{" "}
                  {agent.location.state}
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700 pt-8 text-center text-xs text-stone-500">
            <p>License #{agent.licenseNumber}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
