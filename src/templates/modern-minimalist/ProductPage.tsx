"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AgentConfig, ProductInfo } from "@/lib/types";
import { products } from "@/lib/products";
import { FAQ } from "@/components/FAQ";
import { ProductIcon, PhoneIcon, EmailIcon, CheckIcon } from "@/components/icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ModernMinimalistProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={`/${agent.slug}`} className="text-lg font-semibold tracking-tight hover:text-gray-600 transition-colors">
            {agent.name}
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <Link href={`/${agent.slug}#services`} className="hover:text-gray-900 transition-colors">All Services</Link>
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
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6"
            >
              <ProductIcon icon={product.icon} className="w-6 h-6 text-blue-600" />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              {product.name}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl"
            >
              {product.heroDescription}
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
                Get a Free Quote
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

      {/* Benefits */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
            >
              Why You Need {product.name}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
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
                    className="border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors"
                  >
                    <h3 className="font-semibold text-lg">{title}</h3>
                    {desc.length > 0 && (
                      <p className="text-gray-500 mt-1">{desc.join(" — ")}</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center"
            >
              {product.name} FAQ
            </motion.h2>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <FAQ items={product.faqs} />
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
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight mb-8"
            >
              Other Services
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-4">
              {otherProducts.map((p) => (
                <motion.div key={p.slug} variants={fadeUp} transition={{ duration: 0.5 }}>
                  <Link
                    href={`/${agent.slug}/${p.slug}`}
                    className="group block bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <ProductIcon icon={p.icon} className="w-5 h-5 text-gray-400 mb-3 group-hover:text-blue-600 transition-colors" />
                    <h3 className="font-semibold mb-1">{p.name}</h3>
                    <span className="text-sm text-gray-400 group-hover:text-blue-600 transition-colors">
                      Learn more →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-900 text-white">
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
              Get Your Free {product.name} Quote
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-xl text-gray-400 mb-10"
            >
              No obligation, no pressure. Just honest advice from {agent.name}.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={`tel:${agent.phone}`}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105"
              >
                <PhoneIcon className="w-4 h-4" />
                {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-sm font-medium hover:border-white transition-all"
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
            <Link href={`/${agent.slug}`} className="font-semibold hover:text-gray-600 transition-colors">
              {agent.name}
            </Link>
            <p className="text-sm text-gray-500">
              Licensed Insurance Agent — {agent.location.city}, {agent.location.state}
            </p>
          </div>
          <p className="text-xs text-gray-400">License #{agent.licenseNumber}</p>
        </div>
      </footer>
    </div>
  );
}
