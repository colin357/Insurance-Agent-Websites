"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AgentConfig, ProductInfo } from "@/lib/types";
import { products } from "@/lib/products";
import { FAQ } from "@/components/FAQ";
import { ProductIcon, PhoneIcon, EmailIcon, CheckIcon } from "@/components/icons";

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

export default function BoldProfessionalProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <Link
            href={`/${agent.slug}`}
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
          >
            {agent.name}
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <Link
              href={`/${agent.slug}#services`}
              className="hover:text-white transition-colors duration-300"
            >
              All Services
            </Link>
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
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
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
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center border border-white/10">
                <ProductIcon icon={product.icon} className="w-7 h-7 text-blue-400" />
              </div>
              <Link
                href={`/${agent.slug}#services`}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
              >
                ← Back to All Services
              </Link>
            </motion.div>
            <motion.h1
              variants={slideFromLeft}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                {product.name}
              </span>
            </motion.h1>
            <motion.p
              variants={slideFromLeft}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl"
            >
              {product.heroDescription}
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
                Get a Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-3 border-2 border-white/20 text-white px-10 py-5 rounded-xl text-base font-bold hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                <EmailIcon className="w-5 h-5" />
                Email Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={slideFromLeft}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            >
              Why You Need{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {product.name}
              </span>
            </motion.h2>
            <motion.p
              variants={slideFromLeft}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-400 mb-14 max-w-2xl"
            >
              Discover the key advantages that make this coverage essential for your protection.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-5">
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={i % 2 === 0 ? slideFromLeft : slideFromRight}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-start gap-5 rounded-xl p-6 bg-gray-900 border-l-4 border-l-blue-500 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <div className="relative w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="relative text-gray-300 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={scaleIn}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-center"
            >
              Coverage{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Options
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-400 mb-14 text-center max-w-2xl mx-auto"
            >
              Explore the coverage types available to build the protection plan that fits your needs.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.coverageDetails.map((detail, i) => {
                const [title, ...desc] = detail.split(" — ");
                return (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    transition={{ duration: 0.5 }}
                    className="group relative rounded-2xl p-8 bg-gray-900 border border-white/10 hover:border-transparent transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-[1px] rounded-2xl bg-gray-900 group-hover:bg-gray-900/95 transition-colors duration-500" />
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-5 text-white font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
                      {desc.length > 0 && (
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {desc.join(" — ")}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 bg-gray-900/50">
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
                {product.name}{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FAQ
                </span>
              </h2>
              <p className="text-lg text-gray-400">
                Answers to common questions about {product.name.toLowerCase()} coverage.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <FAQ items={product.faqs} theme="dark" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={slideFromLeft}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            >
              Explore More{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Coverage
              </span>
            </motion.h2>
            <motion.p
              variants={slideFromLeft}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-400 mb-12"
            >
              Protect every aspect of your life with our full range of services.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.map((p) => (
                <motion.div
                  key={p.slug}
                  variants={scaleIn}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/${agent.slug}/${p.slug}`}
                    className="group relative block rounded-2xl p-7 bg-gray-900 border border-white/10 hover:border-transparent overflow-hidden transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-[1px] rounded-2xl bg-gray-900 group-hover:bg-gray-900/95 transition-colors duration-500" />
                    <div className="relative flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center shrink-0 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-500 group-hover:scale-110">
                        <ProductIcon
                          icon={p.icon}
                          className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{p.name}</h3>
                        <span className="text-sm text-blue-400 group-hover:text-purple-400 transition-colors duration-300 font-medium">
                          Learn more →
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
              Get Your Free
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {product.name} Quote
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-xl mx-auto"
            >
              No obligation, no pressure. Just honest advice and competitive rates from {agent.name}.
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link
              href={`/${agent.slug}`}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
            >
              {agent.name}
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Licensed Insurance Agent — {agent.location.city}, {agent.location.state}
            </p>
          </div>
          <p className="text-xs text-gray-600">License #{agent.licenseNumber}</p>
        </div>
      </footer>
    </div>
  );
}
