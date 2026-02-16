export type TemplateName =
  | "bold-professional"
  | "warm-friendly"
  | "clean-corporate-grid"
  | "modern-glassmorphism"
  | "bold-editorial"
  | "local-friendly"
  | "premium-minimal"
  | "tech-forward"
  | "split-screen-hero"
  | "card-first-mosaic"
  | "dark-mode-default"
  | "classic-trust";

export interface AgentConfig {
  slug: string;
  template: TemplateName;
  name: string;
  phone: string;
  email: string;
  photo: string;
  licenseNumber: string;
  bio: string;
  location: {
    city: string;
    state: string;
    address: string;
  };
}

export interface ProductInfo {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  icon: string;
  benefits: string[];
  coverageDetails: string[];
  faqs: { question: string; answer: string }[];
}
