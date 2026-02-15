import { TemplateName } from "@/lib/types";
import { ComponentType } from "react";
import { AgentConfig, ProductInfo } from "@/lib/types";

import ModernMinimalistLanding from "./modern-minimalist/LandingPage";
import ModernMinimalistProduct from "./modern-minimalist/ProductPage";
import BoldProfessionalLanding from "./bold-professional/LandingPage";
import BoldProfessionalProduct from "./bold-professional/ProductPage";
import WarmFriendlyLanding from "./warm-friendly/LandingPage";
import WarmFriendlyProduct from "./warm-friendly/ProductPage";
import ClassicTrustLanding from "./classic-trust/LandingPage";
import ClassicTrustProduct from "./classic-trust/ProductPage";

interface TemplateComponents {
  LandingPage: ComponentType<{ agent: AgentConfig }>;
  ProductPage: ComponentType<{ agent: AgentConfig; product: ProductInfo }>;
}

const templates: Record<TemplateName, TemplateComponents> = {
  "modern-minimalist": {
    LandingPage: ModernMinimalistLanding,
    ProductPage: ModernMinimalistProduct,
  },
  "bold-professional": {
    LandingPage: BoldProfessionalLanding,
    ProductPage: BoldProfessionalProduct,
  },
  "warm-friendly": {
    LandingPage: WarmFriendlyLanding,
    ProductPage: WarmFriendlyProduct,
  },
  "classic-trust": {
    LandingPage: ClassicTrustLanding,
    ProductPage: ClassicTrustProduct,
  },
};

export function getTemplate(name: TemplateName): TemplateComponents {
  return templates[name];
}
