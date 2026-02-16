"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AgentConfig } from "@/lib/types";
import { products } from "@/lib/products";
import { FAQ } from "@/components/FAQ";
import { ProductIcon, PhoneIcon, EmailIcon, MapPinIcon } from "@/components/icons";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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

export default function WarmFriendlyLanding({ agent }: { agent: AgentConfig }) {
  // Split products into featured (first 2) and rest for bento grid
  const featuredProducts = products.slice(0, 2);
  const remainingProducts = products.slice(2);

  return (
    <div className="min-h-screen bg-amber-50/30 text-stone-800" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/90 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between py-3">
          <Link href={`/${agent.slug}`} className="text-xl font-bold text-stone-800 tracking-tight">
            {agent.name}
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#services"
              className="px-4 py-2 rounded-full text-sm text-stone-600 hover:bg-amber-100 hover:text-amber-800 transition-all duration-300"
            >
              Services
            </a>
            <a
              href="#about"
              className="px-4 py-2 rounded-full text-sm text-stone-600 hover:bg-amber-100 hover:text-amber-800 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#faq"
              className="px-4 py-2 rounded-full text-sm text-stone-600 hover:bg-amber-100 hover:text-amber-800 transition-all duration-300"
            >
              FAQ
            </a>
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
      <section className="pt-28 pb-24 px-6 bg-gradient-to-b from-amber-50 via-orange-50/50 to-amber-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p
                variants={fadeIn}
                transition={{ duration: 0.7 }}
                className="text-sm font-semibold text-amber-700 tracking-wide uppercase mb-4"
              >
                Your Neighborhood Insurance Agent
              </motion.p>
              <motion.h1
                variants={fadeIn}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-stone-800"
              >
                Protecting What
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Matters Most
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                transition={{ duration: 0.7 }}
                className="text-lg text-stone-500 leading-relaxed mb-8 max-w-lg"
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

            {/* Agent Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-200 shadow-2xl shadow-amber-100">
                  {agent.photo ? (
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                      <span className="text-6xl md:text-7xl font-bold text-amber-400">
                        {agent.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-full border-2 border-dashed border-amber-200/60 animate-[spin_30s_linear_infinite]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-10 px-6 bg-white/60 border-y border-amber-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { label: "Licensed Agent", value: `#${agent.licenseNumber}` },
              { label: "Located In", value: `${agent.location.city}, ${agent.location.state}` },
              { label: "Multiple Carriers", value: "Best Rates" },
              { label: "Consultations", value: "Always Free" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                transition={{ duration: 0.7 }}
                className="py-2"
              >
                <p className="text-xl font-bold text-amber-700">{item.value}</p>
                <p className="text-sm text-stone-400 mt-1">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services - Bento Grid */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }} className="text-center mb-16">
              <p className="text-sm font-semibold text-amber-700 tracking-wide uppercase mb-3">
                How I Can Help
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
                Insurance Solutions for Every Need
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto text-lg">
                From protecting your family to safeguarding your business, I offer personalized coverage that fits your life.
              </p>
            </motion.div>

            {/* Featured products - large cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {featuredProducts.map((product) => (
                <motion.div
                  key={product.slug}
                  variants={fadeIn}
                  transition={{ duration: 0.7 }}
                >
                  <Link
                    href={`/${agent.slug}/${product.slug}`}
                    className="group block bg-white rounded-3xl p-8 border-2 border-amber-100 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-500 h-full"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mb-5 group-hover:from-amber-100 group-hover:to-orange-100 transition-all duration-500">
                      <ProductIcon icon={product.icon} className="w-7 h-7 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-stone-800">{product.name}</h3>
                    <p className="text-stone-400 leading-relaxed mb-4">
                      {product.shortDescription}
                    </p>
                    <span className="inline-flex items-center text-amber-600 font-medium group-hover:text-orange-600 transition-colors duration-300">
                      Learn more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Remaining products - smaller cards in row */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingProducts.map((product) => (
                <motion.div
                  key={product.slug}
                  variants={fadeIn}
                  transition={{ duration: 0.7 }}
                >
                  <Link
                    href={`/${agent.slug}/${product.slug}`}
                    className="group block bg-white rounded-3xl p-6 border-2 border-amber-100 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-500 h-full"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mb-4 group-hover:from-amber-100 group-hover:to-orange-100 transition-all duration-500">
                      <ProductIcon icon={product.icon} className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-stone-800">{product.name}</h3>
                    <p className="text-sm text-stone-400 leading-relaxed mb-3">
                      {product.shortDescription}
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

      {/* Why Choose Me - Testimonial Style */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-amber-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }} className="text-center mb-16">
              <p className="text-sm font-semibold text-amber-700 tracking-wide uppercase mb-3">
                Why Choose Me
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800">
                A Personal Touch Makes the Difference
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Personalized Service",
                  description: "I take the time to understand your unique situation and find coverage tailored specifically to your needs. No cookie-cutter solutions here.",
                },
                {
                  title: "Trusted Guidance",
                  description: "Insurance can be confusing. I break down complex policies into plain language so you can make informed decisions with confidence.",
                },
                {
                  title: "Always Here for You",
                  description: "When you need to file a claim or have a question, you'll reach a real person who knows you and your policies -- not a call center.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  transition={{ duration: 0.7 }}
                  className="bg-white rounded-3xl p-8 border-2 border-amber-100 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-5">
                    <span className="text-amber-600 font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-stone-800">{item.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Agent spotlight card */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 md:p-12 border-2 border-amber-100 shadow-lg shadow-amber-50"
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                <div className="flex justify-center">
                  <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-amber-200 shadow-lg shadow-amber-100">
                    {agent.photo ? (
                      <img
                        src={agent.photo}
                        alt={agent.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                        <span className="text-4xl font-bold text-amber-400">
                          {agent.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <blockquote className="text-xl md:text-2xl text-stone-600 leading-relaxed italic mb-6">
                    &ldquo;{agent.bio}&rdquo;
                  </blockquote>
                  <p className="font-bold text-stone-800 text-lg">{agent.name}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-stone-400">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPinIcon className="w-4 h-4 text-amber-500" />
                      {agent.location.address}, {agent.location.city}, {agent.location.state}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <PhoneIcon className="w-4 h-4 text-amber-500" />
                      {agent.phone}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <EmailIcon className="w-4 h-4 text-amber-500" />
                      {agent.email}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-amber-50/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }} className="text-center mb-12">
              <p className="text-sm font-semibold text-amber-700 tracking-wide uppercase mb-3">
                Questions? I Have Answers
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800">
                Frequently Asked Questions
              </h2>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.7 }}>
              <FAQ items={generalFAQs} />
            </motion.div>
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
                  Let&apos;s Find the Right
                  <br />
                  Coverage for You
                </h2>
                <p className="text-xl text-amber-100 mb-10 max-w-xl mx-auto">
                  Get a free, no-obligation quote. I&apos;ll take the time to understand your needs and find the perfect policy.
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
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">{agent.name}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Licensed Insurance Agent serving {agent.location.city}, {agent.location.state} and surrounding areas. Here to help you find the coverage you need.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-400 mb-4">Insurance Products</h4>
              <div className="grid grid-cols-2 gap-2">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${agent.slug}/${p.slug}`}
                    className="text-sm text-stone-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-amber-400 mb-4">Get in Touch</h4>
              <div className="space-y-3 text-sm text-stone-400">
                <a href={`tel:${agent.phone}`} className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-300">
                  <PhoneIcon className="w-4 h-4" />
                  {agent.phone}
                </a>
                <a href={`mailto:${agent.email}`} className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-300">
                  <EmailIcon className="w-4 h-4" />
                  {agent.email}
                </a>
                <span className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  {agent.location.address}, {agent.location.city}, {agent.location.state}
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
