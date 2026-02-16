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

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ModernGlassmorphismProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href={`/${agent.slug}`}
            className="text-lg font-bold tracking-tight text-white hover:text-white/80 transition-colors"
          >
            {agent.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href={`/${agent.slug}#services`}
              className="text-white/80 hover:text-white transition-colors"
            >
              All Services
            </Link>
            <Link
              href={`/${agent.slug}`}
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </Link>
            <a
              href={`tel:${agent.phone}`}
              className="bg-white/15 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white/25 transition-colors border border-white/20"
            >
              {agent.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
            className="md:hidden bg-indigo-950/95 backdrop-blur-xl border-b border-white/10 px-6 pb-6 pt-2"
          >
            <div className="flex flex-col gap-4">
              <Link
                href={`/${agent.slug}#services`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                All Services
              </Link>
              <Link
                href={`/${agent.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Home
              </Link>
              <a
                href={`tel:${agent.phone}`}
                className="bg-white/15 backdrop-blur-sm text-white px-5 py-3 rounded-full text-sm font-medium text-center hover:bg-white/25 transition-colors border border-white/20"
              >
                {agent.phone}
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/15 mb-6"
            >
              <ProductIcon
                icon={product.icon}
                className="w-5 h-5 text-purple-400"
              />
              <span className="text-sm font-medium text-white/90">
                {product.name}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
            >
              {product.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
            >
              {product.heroDescription}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-sm font-medium hover:from-purple-400 hover:to-blue-400 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <PhoneIcon className="w-4 h-4" />
                Get a Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/20 transition-all"
              >
                <EmailIcon className="w-4 h-4" />
                Email Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
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
              className="text-sm font-medium text-purple-400 tracking-wide uppercase mb-3"
            >
              Benefits
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
            >
              Why You Need {product.name}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/15"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-white/90 leading-relaxed">{benefit}</p>
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
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-purple-400 tracking-wide uppercase mb-3"
            >
              Coverage
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
            >
              Coverage Options
            </motion.h2>
            <div className="space-y-4">
              {product.coverageDetails.map((detail, i) => {
                const [title, ...desc] = detail.split(" — ");
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldIcon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white">
                          {title}
                        </h3>
                        {desc.length > 0 && (
                          <p className="text-white/70 mt-1 leading-relaxed">
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
      <section className="py-24 px-6">
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
              className="text-sm font-medium text-purple-400 tracking-wide uppercase mb-3 text-center"
            >
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center"
            >
              {product.name} FAQ
            </motion.h2>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
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
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-purple-400 tracking-wide uppercase mb-3"
            >
              Explore More
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight mb-8"
            >
              Other Services
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherProducts.map((p) => (
                <motion.div
                  key={p.slug}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${p.slug}`}
                    className="group block bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition-colors">
                      <ProductIcon
                        icon={p.icon}
                        className="w-5 h-5 text-white/70 group-hover:text-purple-400 transition-colors"
                      />
                    </div>
                    <h3 className="font-bold text-white mb-1">{p.name}</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-3">
                      {p.shortDescription}
                    </p>
                    <span className="text-sm text-purple-400 group-hover:text-purple-300 transition-colors font-medium">
                      Learn more &rarr;
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 md:p-14 text-center"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <ProductIcon
                  icon={product.icon}
                  className="w-7 h-7 text-purple-400"
                />
              </div>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Get Your Free {product.name} Quote
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-lg text-white/80 mb-10 max-w-lg mx-auto"
            >
              No obligation, no pressure. Just honest advice from {agent.name}.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-sm font-medium hover:from-purple-400 hover:to-blue-400 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <PhoneIcon className="w-4 h-4" />
                {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/20 transition-all"
              >
                <EmailIcon className="w-4 h-4" />
                {agent.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link
              href={`/${agent.slug}`}
              className="font-bold text-lg hover:text-white/80 transition-colors"
            >
              {agent.name}
            </Link>
            <p className="text-sm text-white/70 mt-1">
              Licensed Insurance Agent &mdash; {agent.location.city},{" "}
              {agent.location.state}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/${agent.slug}/${p.slug}`}
                className="text-white/70 hover:text-white transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>License #{agent.licenseNumber}</p>
        </div>
      </footer>
    </div>
  );
}
