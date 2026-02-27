import { ProductInfo } from "./types";

export const products: ProductInfo[] = [
  {
    slug: "life-insurance",
    name: "Life Insurance",
    shortDescription:
      "Protect your family's financial future with comprehensive life insurance coverage.",
    heroDescription:
      "Life insurance provides a financial safety net for your loved ones. Whether you need term life for affordable coverage or whole life for lifelong protection, I'll help you find the right policy.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    benefits: [
      "Financial protection for your family if something happens to you",
      "Cover mortgage payments, education costs, and daily expenses",
      "Build cash value with permanent life insurance policies",
      "Lock in lower rates while you're young and healthy",
      "Leave a legacy for the next generation",
      "Peace of mind knowing your loved ones are protected",
    ],
    coverageDetails: [
      "Term Life Insurance — Affordable coverage for 10, 20, or 30 years",
      "Whole Life Insurance — Lifetime coverage with cash value accumulation",
      "Universal Life Insurance — Flexible premiums and adjustable coverage",
      "Variable Life Insurance — Investment-linked cash value growth",
      "Guaranteed Issue Life Insurance — No medical exam required",
    ],
    faqs: [
      {
        question: "How much life insurance do I need?",
        answer:
          "A common rule of thumb is 10-15 times your annual income. However, the right amount depends on your debts, dependents, future goals, and existing savings. I'll help you calculate the perfect amount.",
      },
      {
        question: "What's the difference between term and whole life insurance?",
        answer:
          "Term life covers you for a specific period (10-30 years) at lower premiums. Whole life covers you for your entire life and builds cash value, but costs more. Many people benefit from a combination of both.",
      },
      {
        question: "Do I need a medical exam to get life insurance?",
        answer:
          "Not always. Some policies offer no-exam options, though they may have higher premiums or lower coverage limits. Traditional policies with medical exams typically offer the best rates.",
      },
      {
        question: "When should I buy life insurance?",
        answer:
          "The best time is now — the younger and healthier you are, the lower your premiums will be. Major life events like marriage, buying a home, or having children are common triggers.",
      },
    ],
  },
  {
    slug: "health-insurance",
    name: "Health Insurance",
    shortDescription:
      "Get the healthcare coverage you need at a price you can afford.",
    heroDescription:
      "Don't let unexpected medical bills derail your finances. I'll help you navigate the complex world of health insurance to find a plan that covers your needs and fits your budget.",
    icon: "heart",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    benefits: [
      "Access to preventive care and wellness programs",
      "Protection against catastrophic medical expenses",
      "Prescription drug coverage for ongoing medications",
      "Mental health and substance abuse treatment coverage",
      "Coverage for specialist visits and hospital stays",
      "Telehealth options for convenient care",
    ],
    coverageDetails: [
      "Individual & Family Health Plans — Comprehensive medical coverage",
      "Short-Term Health Insurance — Temporary gap coverage",
      "Health Savings Accounts (HSA) — Tax-advantaged medical savings",
      "Supplemental Health Insurance — Extra protection beyond your main plan",
      "Dental & Vision Plans — Complete your healthcare coverage",
    ],
    faqs: [
      {
        question: "What does health insurance typically cover?",
        answer:
          "Most plans cover doctor visits, hospital stays, prescription drugs, preventive care, mental health services, and emergency care. Specific coverage varies by plan, so I'll help you understand exactly what's included.",
      },
      {
        question: "How do I choose the right health insurance plan?",
        answer:
          "Consider your healthcare needs, preferred doctors, prescription medications, and budget. I'll compare plans from multiple carriers to find the best fit for your situation.",
      },
      {
        question: "What's the difference between HMO and PPO plans?",
        answer:
          "HMOs require you to use in-network providers and get referrals for specialists, but have lower costs. PPOs offer more flexibility to see any provider but at higher premiums.",
      },
      {
        question: "Can I get health insurance outside of open enrollment?",
        answer:
          "Yes, if you experience a qualifying life event like marriage, having a baby, losing job-based coverage, or moving. I can help determine if you qualify for special enrollment.",
      },
    ],
  },
  {
    slug: "auto-insurance",
    name: "Auto Insurance",
    shortDescription:
      "Drive with confidence knowing you have the right auto insurance protection.",
    heroDescription:
      "From fender benders to major accidents, the right auto insurance keeps you protected on the road. I'll find you comprehensive coverage at competitive rates from top-rated carriers.",
    icon: "car",
    image: "https://images.unsplash.com/photo-1449965408869-ebd3fee56fd0?w=800&q=80",
    benefits: [
      "Liability coverage to protect you if you cause an accident",
      "Collision coverage for damage to your vehicle",
      "Comprehensive coverage for theft, weather, and vandalism",
      "Uninsured/underinsured motorist protection",
      "Roadside assistance and rental car coverage",
      "Multi-policy and safe driver discounts available",
    ],
    coverageDetails: [
      "Liability Insurance — Required coverage for bodily injury and property damage",
      "Collision Coverage — Repairs to your car after an accident",
      "Comprehensive Coverage — Protection from non-collision events",
      "Personal Injury Protection — Medical expenses regardless of fault",
      "Gap Insurance — Covers the difference between car value and loan balance",
    ],
    faqs: [
      {
        question: "How much auto insurance do I need?",
        answer:
          "At minimum, you need your state's required liability coverage. However, I recommend higher limits plus collision and comprehensive coverage to fully protect yourself and your assets.",
      },
      {
        question: "What factors affect my auto insurance rate?",
        answer:
          "Your driving record, age, location, vehicle type, credit score, and coverage levels all impact your rate. I'll shop multiple carriers to find you the best price.",
      },
      {
        question: "Can I get discounts on my auto insurance?",
        answer:
          "Yes! Common discounts include multi-policy bundling, safe driver, good student, low mileage, anti-theft devices, and paying in full. I'll make sure you get every discount you qualify for.",
      },
      {
        question: "What should I do after a car accident?",
        answer:
          "First ensure everyone's safety, then call 911, exchange information with other drivers, document the scene with photos, and contact me to file your claim. Don't admit fault at the scene.",
      },
    ],
  },
  {
    slug: "home-insurance",
    name: "Home Insurance",
    shortDescription:
      "Protect your biggest investment with reliable homeowners insurance coverage.",
    heroDescription:
      "Your home is likely your largest investment. I'll help you find comprehensive homeowners insurance that protects your property, belongings, and family from unexpected events.",
    icon: "home",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    benefits: [
      "Dwelling coverage for your home's structure",
      "Personal property protection for your belongings",
      "Liability coverage if someone is injured on your property",
      "Additional living expenses if you're displaced",
      "Protection against fire, storms, theft, and vandalism",
      "Bundle with auto insurance for additional savings",
    ],
    coverageDetails: [
      "Dwelling Coverage — Protects your home's structure and attached structures",
      "Personal Property Coverage — Covers your furniture, clothing, and valuables",
      "Liability Protection — Covers lawsuits from injuries on your property",
      "Additional Living Expenses — Pays for temporary housing if displaced",
      "Flood & Earthquake Insurance — Separate policies for natural disasters",
    ],
    faqs: [
      {
        question: "How much homeowners insurance do I need?",
        answer:
          "Your dwelling coverage should be enough to rebuild your home from the ground up. I'll help you calculate the right amount based on local construction costs, not your home's market value.",
      },
      {
        question: "What does homeowners insurance NOT cover?",
        answer:
          "Standard policies typically exclude floods, earthquakes, normal wear and tear, and certain high-value items. I can help you add endorsements or separate policies for these gaps.",
      },
      {
        question: "How can I lower my homeowners insurance premium?",
        answer:
          "Increase your deductible, install security systems, bundle with auto insurance, maintain good credit, and make home improvements. I'll find you all available discounts.",
      },
      {
        question: "Do I need homeowners insurance if I've paid off my mortgage?",
        answer:
          "While it's no longer legally required, I strongly recommend it. Without insurance, you'd bear the full cost of rebuilding after a fire, storm, or other disaster.",
      },
    ],
  },
  {
    slug: "commercial-insurance",
    name: "Commercial Insurance",
    shortDescription:
      "Safeguard your business with tailored commercial insurance solutions.",
    heroDescription:
      "Every business faces unique risks. From general liability to workers' compensation, I'll build a comprehensive insurance package that protects your business, employees, and bottom line.",
    icon: "building",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    benefits: [
      "General liability protection for your business",
      "Commercial property coverage for your assets",
      "Workers' compensation for employee injuries",
      "Professional liability for errors and omissions",
      "Business interruption coverage for lost income",
      "Commercial auto coverage for business vehicles",
    ],
    coverageDetails: [
      "General Liability Insurance — Protection from third-party claims",
      "Commercial Property Insurance — Coverage for buildings and equipment",
      "Business Owner's Policy (BOP) — Bundled liability and property coverage",
      "Workers' Compensation — Required coverage for employee injuries",
      "Professional Liability (E&O) — Protection from professional mistakes",
    ],
    faqs: [
      {
        question: "What type of business insurance do I need?",
        answer:
          "It depends on your industry, size, and risks. Most businesses need general liability and commercial property at minimum. I'll assess your specific situation and recommend the right coverage.",
      },
      {
        question: "How much does commercial insurance cost?",
        answer:
          "Costs vary widely based on your industry, revenue, number of employees, location, and coverage needs. I'll get you competitive quotes from multiple carriers.",
      },
      {
        question: "Is workers' compensation insurance required?",
        answer:
          "In most states, yes — if you have employees. Requirements vary by state and number of employees. I'll help you understand your obligations and find affordable coverage.",
      },
      {
        question: "What is a Business Owner's Policy (BOP)?",
        answer:
          "A BOP bundles general liability and commercial property insurance at a discounted rate. It's a cost-effective option for small to medium-sized businesses.",
      },
    ],
  },
  {
    slug: "medicare",
    name: "Medicare",
    shortDescription:
      "Navigate Medicare with confidence and find the right plan for your needs.",
    heroDescription:
      "Turning 65 or newly eligible for Medicare? I'll guide you through Medicare Parts A, B, C, and D, plus Medigap supplements, to ensure you have comprehensive healthcare coverage in retirement.",
    icon: "plus-circle",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80",
    benefits: [
      "Expert guidance through Medicare enrollment",
      "Help choosing between Original Medicare and Medicare Advantage",
      "Prescription drug plan (Part D) comparison",
      "Medigap supplement options to reduce out-of-pocket costs",
      "Annual plan review during open enrollment",
      "No cost for my Medicare consultation services",
    ],
    coverageDetails: [
      "Medicare Part A — Hospital insurance (usually premium-free)",
      "Medicare Part B — Medical insurance for doctor visits and outpatient care",
      "Medicare Part C (Advantage) — All-in-one alternative to Original Medicare",
      "Medicare Part D — Prescription drug coverage",
      "Medigap (Supplement) — Fills gaps in Original Medicare coverage",
    ],
    faqs: [
      {
        question: "When should I enroll in Medicare?",
        answer:
          "Your Initial Enrollment Period starts 3 months before your 65th birthday and ends 3 months after. Missing this window can result in late enrollment penalties. Contact me early to prepare.",
      },
      {
        question:
          "What's the difference between Medicare Advantage and Original Medicare?",
        answer:
          "Original Medicare (Parts A & B) lets you see any Medicare-accepting provider. Medicare Advantage plans are offered by private insurers and often include extra benefits like dental and vision, but may have network restrictions.",
      },
      {
        question: "Do I need a Medicare Supplement (Medigap) plan?",
        answer:
          "If you choose Original Medicare, a Medigap plan can significantly reduce your out-of-pocket costs for copays, coinsurance, and deductibles. I'll help you decide if it's right for you.",
      },
      {
        question: "Will Medicare cover my prescription drugs?",
        answer:
          "Original Medicare doesn't cover most prescription drugs. You'll need a separate Part D plan or a Medicare Advantage plan that includes drug coverage. I'll compare plans based on your specific medications.",
      },
    ],
  },
  {
    slug: "final-expense",
    name: "Final Expense Insurance",
    shortDescription:
      "Ensure your loved ones aren't burdened with end-of-life costs.",
    heroDescription:
      "Final expense insurance covers funeral costs, medical bills, and other end-of-life expenses so your family doesn't have to. These affordable policies are easy to qualify for and provide lasting peace of mind.",
    icon: "flower",
    image: "https://images.unsplash.com/photo-1501004318855-fce2e4752078?w=800&q=80",
    benefits: [
      "Cover funeral and burial costs averaging $7,000-$15,000",
      "Pay off remaining medical bills and debts",
      "No medical exam required for most policies",
      "Guaranteed acceptance options available",
      "Affordable monthly premiums that never increase",
      "Cash benefit paid directly to your beneficiary",
    ],
    coverageDetails: [
      "Simplified Issue — Affordable coverage with basic health questions",
      "Guaranteed Issue — No health questions, guaranteed acceptance",
      "Level Benefit — Full death benefit from day one",
      "Graded Benefit — Full benefit after waiting period, lower cost",
      "Coverage amounts typically range from $5,000 to $50,000",
    ],
    faqs: [
      {
        question: "What does final expense insurance cover?",
        answer:
          "Final expense insurance covers any end-of-life costs including funeral services, burial or cremation, outstanding medical bills, credit card debt, and other final expenses. Your beneficiary receives cash and can use it for anything.",
      },
      {
        question: "How much does final expense insurance cost?",
        answer:
          "Premiums typically range from $30 to $70 per month depending on your age, health, and coverage amount. Rates are locked in and never increase.",
      },
      {
        question: "Can I qualify for final expense insurance with health issues?",
        answer:
          "Yes! Most final expense policies have simplified underwriting with just a few health questions. Guaranteed issue policies accept everyone regardless of health conditions.",
      },
      {
        question: "What's the difference between final expense and life insurance?",
        answer:
          "Final expense is a type of whole life insurance designed specifically for end-of-life costs, with smaller coverage amounts ($5,000-$50,000), simplified qualification, and no medical exam required.",
      },
    ],
  },
];

export function getProduct(slug: string): ProductInfo | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
