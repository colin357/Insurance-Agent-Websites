"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AgentConfig, ProductInfo } from "@/lib/types";
import { products } from "@/lib/products";
import { FAQ } from "@/components/FAQ";
import { ProductIcon, PhoneIcon, EmailIcon, CheckIcon } from "@/components/icons";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function WarmFriendlyProduct({
  agent,
  product,
}: {
  agent: AgentConfig;
  product: ProductInfo;
}) {
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-amber-50/30 text-stone-800" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/90 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between py-3">
          <Link
            href={`/${agent.slug}`}
            className="text-xl font-bold text-stone-800 tracking-tight hover:text-amber-700 transition-colors duration-300"
          >
            {agent.name}
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <Link
              href={`/${agent.slug}#services`}
              className="px-4 py-2 rounded-full text-sm text-stone-600 hover:bg-amber-100 hover:text-amber-800 transition-all duration-300"
            >
              All Services
            </Link>
            <a
              href={`tel:${agent.phone}`}
              className="ml-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md shadow-amber-200"
            >
              {agent.phone}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-amber-50 via-orange-50/50 to-amber-50/30">
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
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <Link
                href={`/${agent.slug}`}
                className="text-sm text-amber-600 hover:text-amber-800 transition-colors duration-300"
              >
                Home
              </Link>
              <span className="text-stone-300 mx-2">/</span>
              <span className="text-sm text-stone-400">{product.name}</span>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="w-16 h-16 rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mb-6 shadow-md shadow-amber-100"
            >
              <ProductIcon icon={product.icon} className="w-8 h-8 text-amber-600" />
            </motion.div>
            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-stone-800"
            >
              {product.name}
            </motion.h1>
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-stone-500 leading-relaxed mb-10 max-w-2xl"
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-200/50 hover:shadow-amber-300/50 hover:scale-[1.02]"
              >
                <PhoneIcon className="w-5 h-5" />
                Get a Free Quote
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="inline-flex items-center gap-2 bg-white border-2 border-amber-200 text-amber-800 px-8 py-4 rounded-full font-medium hover:border-amber-400 hover:bg-amber-50 transition-all duration-300"
              >
                <EmailIcon className="w-5 h-5" />
                Send a Message
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }} className="mb-12">
              <p className="text-sm font-semibold text-amber-700 tracking-wide uppercase mb-3">
                Benefits
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                Why You Need {product.name}
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  transition={{ duration: 0.7 }}
                  className="flex items-start gap-4 bg-white rounded-3xl p-6 border-2 border-amber-100 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-50 transition-all duration-500"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className="text-stone-600 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-24 px-6 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }} className="mb-12">
              <p className="text-sm font-semibold text-amber-700 tracking-wide uppercase mb-3">
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
                    transition={{ duration: 0.7 }}
                    className="bg-white rounded-3xl p-6 md:p-8 border-2 border-amber-100 hover:border-amber-300 transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-amber-600">{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition-colors duration-300">
                          {title}
                        </h3>
                        {desc.length > 0 && (
                          <p className="text-stone-400 mt-1 leading-relaxed">
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
      <section className="py-24 px-6 bg-amber-50/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }} className="text-center mb-12">
              <p className="text-sm font-semibold text-amber-700 tracking-wide uppercase mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                {product.name} FAQ
              </h2>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }}>
              <FAQ items={product.faqs} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-24 px-6 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }} className="text-center mb-12">
              <p className="text-sm font-semibold text-amber-700 tracking-wide uppercase mb-3">
                More Ways I Can Help
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                Explore Other Coverage Options
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.map((p) => (
                <motion.div key={p.slug} variants={fadeIn} transition={{ duration: 0.7 }}>
                  <Link
                    href={`/${agent.slug}/${p.slug}`}
                    className="group block bg-white rounded-3xl p-6 border-2 border-amber-100 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-500 h-full"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mb-4 group-hover:from-amber-100 group-hover:to-orange-100 transition-all duration-500">
                      <ProductIcon icon={p.icon} className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-stone-800">{p.name}</h3>
                    <p className="text-sm text-stone-400 leading-relaxed mb-3">
                      {p.shortDescription}
                    </p>
                    <span className="inline-flex items-center text-sm text-amber-600 font-medium group-hover:text-orange-600 transition-colors duration-300">
                      Learn more
                      <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-amber-500 via-amber-500 to-orange-500 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl shadow-amber-200/50 relative overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3" />

              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  Get Your Free
                  <br />
                  {product.name} Quote
                </h2>
                <p className="text-xl text-amber-100 mb-10 max-w-xl mx-auto">
                  No obligation, no pressure. Just honest, personalized advice from {agent.name}.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={`tel:${agent.phone}`}
                    className="inline-flex items-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-medium hover:bg-amber-50 transition-all duration-300 shadow-lg hover:scale-[1.02]"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    {agent.phone}
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:border-white/70 transition-all duration-300"
                  >
                    <EmailIcon className="w-5 h-5" />
                    {agent.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-16 px-6 rounded-t-3xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <Link
                href={`/${agent.slug}`}
                className="text-xl font-bold hover:text-amber-300 transition-colors duration-300"
              >
                {agent.name}
              </Link>
              <p className="text-sm text-stone-400 mt-2">
                Licensed Insurance Agent -- {agent.location.city}, {agent.location.state}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-stone-400">
              <a href={`tel:${agent.phone}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors duration-300">
                <PhoneIcon className="w-4 h-4" />
                {agent.phone}
              </a>
              <a href={`mailto:${agent.email}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors duration-300">
                <EmailIcon className="w-4 h-4" />
                {agent.email}
              </a>
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
