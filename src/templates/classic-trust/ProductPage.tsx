"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AgentConfig, ProductInfo } from "@/lib/types";
import { products } from "@/lib/products";
import { FAQ } from "@/components/FAQ";
import {
  ProductIcon,
  PhoneIcon,
  EmailIcon,
  CheckIcon,
  ShieldIcon,
} from "@/components/icons";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ClassicTrustProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b-2 border-amber-500/60">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-amber-500 rounded-sm flex items-center justify-center">
              <ShieldIcon className="w-4 h-4 text-amber-500" />
            </div>
            <Link
              href={`/${agent.slug}`}
              className="text-lg font-serif font-bold text-white tracking-wide hover:text-amber-400 transition-colors"
            >
              {agent.name}
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href={`/${agent.slug}#services`}
              className="text-slate-300 hover:text-amber-400 transition-colors font-medium"
            >
              All Services
            </Link>
            <Link
              href={`/${agent.slug}#about`}
              className="text-slate-300 hover:text-amber-400 transition-colors font-medium"
            >
              About
            </Link>
            <a
              href={`tel:${agent.phone}`}
              className="bg-amber-500 text-slate-900 px-5 py-2.5 text-sm font-semibold hover:bg-amber-400 transition-colors"
            >
              {agent.phone}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        {/* Gold accent line at top */}
        <div className="absolute top-[72px] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

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

        <div className="relative max-w-7xl mx-auto px-6 pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm text-slate-400 mb-8"
            >
              <Link
                href={`/${agent.slug}`}
                className="hover:text-amber-400 transition-colors"
              >
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-amber-400">{product.name}</span>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-blue-950 border-2 border-amber-500/50 flex items-center justify-center mb-8"
            >
              <ProductIcon
                icon={product.icon}
                className="w-8 h-8 text-amber-500"
              />
            </motion.div>

            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
            >
              {product.name}
              <span className="text-amber-500">.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
            >
              {product.heroDescription}
            </motion.p>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 font-semibold text-sm hover:bg-amber-400 transition-all tracking-wide uppercase"
              >
                <PhoneIcon className="w-4 h-4" />
                Get a Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 border-2 border-slate-400 text-white px-8 py-4 font-semibold text-sm hover:border-amber-500 hover:text-amber-400 transition-all tracking-wide uppercase"
              >
                <EmailIcon className="w-4 h-4" />
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-stone-50">
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
                <div className="h-px w-16 bg-amber-500" />
                <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
                  Key Benefits
                </p>
                <div className="h-px w-16 bg-amber-500" />
              </motion.div>
              <motion.h2
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-bold text-slate-900"
              >
                Why You Need {product.name}
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 bg-blue-950 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-slate-700 leading-relaxed">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="mb-16">
              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-px w-12 bg-amber-500" />
                <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
                  Coverage Options
                </p>
              </motion.div>
              <motion.h2
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-bold text-slate-900"
              >
                What We Cover
              </motion.h2>
            </div>

            <div className="space-y-0">
              {product.coverageDetails.map((detail, i) => {
                const [title, ...desc] = detail.split(" — ");
                return (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                    className="flex items-start gap-6 p-6 border-b border-slate-200 last:border-b-0 hover:bg-stone-50 transition-colors"
                  >
                    <div className="flex items-center justify-center shrink-0 mt-1">
                      <span className="font-serif font-bold text-2xl text-amber-500 w-10 text-center">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-lg text-slate-900 mb-1">
                        {title}
                      </h3>
                      {desc.length > 0 && (
                        <p className="text-slate-500 leading-relaxed">
                          {desc.join(" — ")}
                        </p>
                      )}
                    </div>
                    <div className="hidden md:block shrink-0 mt-1">
                      <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">
                        <CheckIcon className="w-4 h-4 text-amber-500" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product FAQ */}
      <section className="py-24 px-6 bg-stone-50">
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
                <div className="h-px w-16 bg-amber-500" />
                <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
                  Common Questions
                </p>
                <div className="h-px w-16 bg-amber-500" />
              </motion.div>
              <motion.h2
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-bold text-slate-900"
              >
                {product.name} FAQ
              </motion.h2>
            </div>
            <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
              <FAQ items={product.faqs} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-24 px-6 bg-white">
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
                <div className="h-px w-16 bg-amber-500" />
                <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
                  Explore More
                </p>
                <div className="h-px w-16 bg-amber-500" />
              </motion.div>
              <motion.h2
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-bold text-slate-900"
              >
                Other Insurance Services
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherProducts.map((p) => (
                <motion.div
                  key={p.slug}
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${p.slug}`}
                    className="group block bg-stone-50 border border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="h-1 bg-transparent group-hover:bg-amber-500 transition-colors duration-300" />
                    <div className="p-6">
                      <div className="w-10 h-10 bg-blue-950 flex items-center justify-center mb-4">
                        <ProductIcon
                          icon={p.icon}
                          className="w-5 h-5 text-amber-500"
                        />
                      </div>
                      <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
                        {p.name}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {p.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-950 group-hover:text-amber-600 transition-colors uppercase tracking-wider">
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
                    <div className="h-1 bg-transparent group-hover:bg-amber-500 transition-colors duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-blue-950 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

        {/* Subtle pattern */}
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

        <div className="relative max-w-4xl mx-auto text-center">
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
              <div className="w-14 h-14 border-2 border-amber-500 flex items-center justify-center">
                <ProductIcon
                  icon={product.icon}
                  className="w-7 h-7 text-amber-500"
                />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
            >
              Get Your Free {product.name} Quote
            </motion.h2>
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
            >
              No obligation, no pressure. Receive a comprehensive coverage
              analysis and competitive quote from {agent.name}.
            </motion.p>
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-10 py-4 font-semibold text-sm hover:bg-amber-400 transition-all tracking-wide uppercase"
              >
                <PhoneIcon className="w-4 h-4" />
                Call {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 border-2 border-slate-400 text-white px-10 py-4 font-semibold text-sm hover:border-amber-500 hover:text-amber-400 transition-all tracking-wide uppercase"
              >
                <EmailIcon className="w-4 h-4" />
                Email {agent.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 pb-12">
            {/* Column 1 - Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border-2 border-amber-500 rounded-sm flex items-center justify-center">
                  <ShieldIcon className="w-4 h-4 text-amber-500" />
                </div>
                <Link
                  href={`/${agent.slug}`}
                  className="text-lg font-serif font-bold text-white hover:text-amber-400 transition-colors"
                >
                  {agent.name}
                </Link>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
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
              <div className="h-px w-8 bg-amber-500/40 mb-4" />
              <ul className="space-y-2.5">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${agent.slug}/${p.slug}`}
                      className={`text-sm transition-colors ${
                        p.slug === product.slug
                          ? "text-amber-400 font-medium"
                          : "text-slate-400 hover:text-amber-400"
                      }`}
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
              <div className="h-px w-8 bg-amber-500/40 mb-4" />
              <ul className="space-y-3">
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
          <div className="border-t border-amber-500/20 pt-8 text-center">
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
