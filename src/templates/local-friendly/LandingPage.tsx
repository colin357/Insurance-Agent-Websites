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

const generalFAQs = [
  {
    question: "Why should I work with a local insurance agent?",
    answer:
      "A local agent understands the unique needs of your community. I live and work right here in your neighborhood, so I know the local risks, regulations, and opportunities to save. Plus, you get face-to-face service from someone who truly cares.",
  },
  {
    question: "How much does it cost to get a quote?",
    answer:
      "Getting a quote is completely free with no obligation whatsoever. I compare options from multiple trusted carriers to find you the best coverage at the most competitive price. Give me a call or send a text anytime!",
  },
  {
    question: "How do I file a claim?",
    answer:
      "Just reach out to me directly -- call, text, or email. I'll personally guide you through the entire claims process and advocate on your behalf to make sure everything is handled quickly and fairly.",
  },
  {
    question: "Can you help me bundle my insurance policies?",
    answer:
      "Absolutely! Bundling multiple policies like home and auto often leads to significant discounts. I'll review all your insurance needs together to find the best combination of coverage and savings.",
  },
  {
    question: "How often should I review my insurance coverage?",
    answer:
      "I recommend checking in at least once a year, or whenever you experience a big life change like buying a home, getting married, or welcoming a new family member. I'll reach out proactively to make sure your coverage stays up to date.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "Finally found an agent who feels like a neighbor, not a salesperson. They took the time to explain everything and found me better coverage for less money!",
    role: "Homeowner",
  },
  {
    name: "David R.",
    text: "When I had a fender bender, they handled everything for me. One phone call and it was taken care of. That's the kind of service you can't get from an 800 number.",
    role: "Auto Insurance Client",
  },
  {
    name: "Maria L.",
    text: "They helped our whole family get set up with the right coverage. Patient, kind, and genuinely looking out for us. I recommend them to all my friends.",
    role: "Family Coverage Client",
  },
];

export default function LocalFriendlyLanding({
  agent,
}: {
  agent: AgentConfig;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            className="text-xl font-bold text-stone-800 tracking-tight"
          >
            {agent.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#about"
              className="px-4 py-2 rounded-full text-sm font-medium text-stone-600 hover:bg-amber-100 hover:text-amber-800 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="px-4 py-2 rounded-full text-sm font-medium text-stone-600 hover:bg-amber-100 hover:text-amber-800 transition-all duration-300"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="px-4 py-2 rounded-full text-sm font-medium text-stone-600 hover:bg-amber-100 hover:text-amber-800 transition-all duration-300"
            >
              Reviews
            </a>
            <a
              href="#faq"
              className="px-4 py-2 rounded-full text-sm font-medium text-stone-600 hover:bg-amber-100 hover:text-amber-800 transition-all duration-300"
            >
              FAQ
            </a>
            <a
              href={`sms:${agent.phone}`}
              className="ml-2 inline-flex items-center gap-1.5 border-2 border-emerald-600 text-emerald-700 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-50 transition-all duration-300"
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
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-2xl text-sm font-medium text-stone-600 hover:bg-amber-100 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-2xl text-sm font-medium text-stone-600 hover:bg-amber-100 transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-2xl text-sm font-medium text-stone-600 hover:bg-amber-100 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-2xl text-sm font-medium text-stone-600 hover:bg-amber-100 transition-colors"
            >
              FAQ
            </a>
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

      {/* Hero + Agent Intro */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-orange-50 via-amber-50/60 to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-sm font-semibold text-emerald-700 tracking-wide uppercase mb-4"
              >
                Your Neighbor in Insurance
              </motion.p>
              <motion.h1
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-stone-800"
              >
                Insurance That Feels{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Like Home
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-lg font-medium text-stone-500 leading-relaxed mb-8 max-w-lg"
              >
                {agent.bio}
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

            {/* Agent Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              className="flex justify-center"
            >
              <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-xl shadow-amber-100/50 max-w-sm w-full">
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-5 border-2 border-amber-100">
                  {agent.photo ? (
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                      <span className="text-6xl font-bold text-amber-400">
                        {initials}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-1">
                  {agent.name}
                </h3>
                <p className="text-emerald-600 font-medium text-sm mb-3">
                  Licensed Insurance Agent
                </p>
                <div className="space-y-2 text-sm text-stone-500">
                  <span className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-emerald-500" />
                    {agent.location.city}, {agent.location.state}
                  </span>
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4 text-emerald-500" />
                    {agent.phone}
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                  >
                    <EmailIcon className="w-4 h-4 text-emerald-500" />
                    {agent.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="about" className="py-20 px-6 bg-amber-50/60">
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
              className="text-center mb-14"
            >
              <p className="text-sm font-semibold text-emerald-700 tracking-wide uppercase mb-3">
                Part of Your Community
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
                Your Neighbor, Your Agent
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                I&apos;m not just an insurance agent -- I&apos;m a member of this community.
                I care about the people here because this is my home too.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
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
                  title: "Locally Rooted",
                  description: `Proudly serving families and businesses in ${agent.location.city}, ${agent.location.state}. When you work with me, you're supporting a local business that gives back to our community.`,
                },
                {
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
                  title: "Personal Touch",
                  description:
                    "You'll never be just a policy number. I take the time to know your name, your family, and what matters most to you -- so I can find coverage that truly fits.",
                },
                {
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  ),
                  title: "Always a Call Away",
                  description:
                    "When you need help -- whether it's a question about your policy or filing a claim -- you reach a real person who knows you. No call centers, no runarounds.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={bounceIn}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="bg-white rounded-2xl p-8 border border-amber-100 shadow-sm hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-500 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mx-auto mb-5 text-emerald-600">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-stone-800">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
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
              className="text-center mb-14"
            >
              <p className="text-sm font-semibold text-emerald-700 tracking-wide uppercase mb-3">
                How I Can Help
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
                Insurance Made Simple
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                From protecting your family to covering your business, I offer
                friendly, personalized guidance for all your insurance needs.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <motion.div
                  key={product.slug}
                  variants={bounceIn}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                >
                  <Link
                    href={`/${agent.slug}/${product.slug}`}
                    className="group block bg-orange-50/50 rounded-2xl p-7 border border-amber-100 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-50 transition-all duration-500 h-full"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-5 group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-500">
                      <ProductIcon
                        icon={product.icon}
                        className="w-7 h-7 text-emerald-600"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-stone-800 group-hover:text-emerald-700 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-stone-500 leading-relaxed font-medium text-sm mb-4">
                      {product.shortDescription}
                    </p>
                    <span className="inline-flex items-center text-sm text-emerald-600 font-semibold group-hover:text-teal-600 transition-colors duration-300">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-6 bg-gradient-to-b from-amber-50/60 to-orange-50/40"
      >
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
              className="text-center mb-14"
            >
              <p className="text-sm font-semibold text-emerald-700 tracking-wide uppercase mb-3">
                Kind Words
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800">
                What Our Neighbors Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={bounceIn}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  className="bg-white rounded-2xl p-8 border border-amber-100 shadow-sm hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-500"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, si) => (
                      <svg
                        key={si}
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-stone-600 leading-relaxed font-medium text-base mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-stone-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-stone-400">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-white">
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
                Questions? Happy to Help!
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800">
                Frequently Asked Questions
              </h2>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.6 }}>
              <FAQ items={generalFAQs} theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-orange-50/40">
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
                  Let&apos;s Chat About
                  <br />
                  Your Coverage
                </h2>
                <p className="text-xl text-emerald-100 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                  Free quotes, friendly advice, and zero pressure. Reach out
                  however is easiest for you!
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
              <h3 className="text-xl font-bold mb-4">{agent.name}</h3>
              <p className="text-stone-400 text-sm leading-relaxed font-medium">
                Your friendly neighborhood insurance agent serving{" "}
                {agent.location.city}, {agent.location.state} and the
                surrounding communities. Always here to help!
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
