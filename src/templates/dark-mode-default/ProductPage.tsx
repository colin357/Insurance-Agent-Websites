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

export default function DarkModeDefaultProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="max-w-6xl mx-auto bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800/50 px-6 py-3">
          <div className="flex items-center justify-between">
            <Link
              href={`/${agent.slug}`}
              className="text-lg font-bold tracking-tight text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              {agent.name}
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <Link
                href={`/${agent.slug}#services`}
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                All Services
              </Link>
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
                <Link
                  href={`/${agent.slug}#services`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors duration-300 py-2"
                >
                  All Services
                </Link>
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
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
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
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-zinc-800">
                <ProductIcon
                  icon={product.icon}
                  className="w-6 h-6 text-cyan-400"
                />
              </div>
              <Link
                href={`/${agent.slug}#services`}
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
              >
                &larr; Back to All Services
              </Link>
            </motion.div>
            <motion.h1
              variants={slideLeft}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
            >
              <span className="text-white">{product.name}</span>
            </motion.h1>
            <motion.p
              variants={slideLeft}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-10 max-w-2xl"
            >
              {product.heroDescription}
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
                Get a Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-3 border border-zinc-700 text-white px-8 py-4 rounded-xl text-base font-bold hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300"
              >
                <EmailIcon className="w-5 h-5" />
                Email Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={slideLeft}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Why You Need{" "}
              <span className="text-cyan-400">{product.name}</span>
            </motion.h2>
            <motion.p
              variants={slideLeft}
              transition={{ duration: 0.6 }}
              className="text-lg text-zinc-300 mb-12 max-w-2xl"
            >
              Discover the key advantages that make this coverage essential for
              your protection.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={i % 2 === 0 ? slideLeft : slideRight}
                  transition={{ duration: 0.5 }}
                  className="group flex items-start gap-4 rounded-xl p-5 bg-zinc-900 border border-zinc-800 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <CheckIcon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={scaleUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center"
            >
              Coverage{" "}
              <span className="text-cyan-400">Options</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-lg text-zinc-300 mb-12 text-center max-w-2xl mx-auto"
            >
              Explore the coverage types available to build the protection plan
              that fits your needs.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.coverageDetails.map((detail, i) => {
                const [title, ...desc] = detail.split(" — ");
                return (
                  <motion.div
                    key={i}
                    variants={scaleUp}
                    transition={{ duration: 0.5 }}
                    className="group rounded-2xl p-7 bg-zinc-900 border border-zinc-800 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/5"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center mb-5 text-zinc-950 font-bold text-sm group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-shadow duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2">
                      {title}
                    </h3>
                    {desc.length > 0 && (
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {desc.join(" — ")}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-zinc-900/40">
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
                {product.name}{" "}
                <span className="text-cyan-400">FAQ</span>
              </h2>
              <p className="text-lg text-zinc-300">
                Answers to common questions about{" "}
                {product.name.toLowerCase()} coverage.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <FAQ items={product.faqs} theme="dark" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={slideLeft}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              Explore More{" "}
              <span className="text-cyan-400">Coverage</span>
            </motion.h2>
            <motion.p
              variants={slideLeft}
              transition={{ duration: 0.6 }}
              className="text-lg text-zinc-300 mb-10"
            >
              Protect every aspect of your life with our full range of services.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherProducts.map((p) => (
                <motion.div
                  key={p.slug}
                  variants={scaleUp}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${p.slug}`}
                    className="group block rounded-2xl p-6 bg-zinc-900 border border-zinc-800 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/10">
                        <ProductIcon
                          icon={p.icon}
                          className="w-5 h-5 text-cyan-400"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{p.name}</h3>
                        <span className="text-sm text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300 font-medium">
                          Learn more &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
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
              Get Your Free
              <br />
              {product.name} Quote
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-lg text-zinc-800 mb-10 max-w-xl mx-auto"
            >
              No obligation, no pressure. Just honest advice and competitive
              rates from {agent.name}.
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link
              href={`/${agent.slug}`}
              className="text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              {agent.name}
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              Licensed Insurance Agent — {agent.location.city},{" "}
              {agent.location.state}
            </p>
          </div>
          <p className="text-xs text-zinc-600">
            License #{agent.licenseNumber}
          </p>
        </div>
      </footer>
    </div>
  );
}
