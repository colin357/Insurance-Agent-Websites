import { TemplateName } from "@/lib/types";
import { ComponentType } from "react";
import { AgentConfig, ProductInfo } from "@/lib/types";

import BoldProfessionalLanding from "./bold-professional/LandingPage";
import BoldProfessionalProduct from "./bold-professional/ProductPage";
import WarmFriendlyLanding from "./warm-friendly/LandingPage";
import WarmFriendlyProduct from "./warm-friendly/ProductPage";
import CleanCorporateGridLanding from "./clean-corporate-grid/LandingPage";
import CleanCorporateGridProduct from "./clean-corporate-grid/ProductPage";
import ModernGlassmorphismLanding from "./modern-glassmorphism/LandingPage";
import ModernGlassmorphismProduct from "./modern-glassmorphism/ProductPage";
import BoldEditorialLanding from "./bold-editorial/LandingPage";
import BoldEditorialProduct from "./bold-editorial/ProductPage";
import LocalFriendlyLanding from "./local-friendly/LandingPage";
import LocalFriendlyProduct from "./local-friendly/ProductPage";
import PremiumMinimalLanding from "./premium-minimal/LandingPage";
import PremiumMinimalProduct from "./premium-minimal/ProductPage";
import TechForwardLanding from "./tech-forward/LandingPage";
import TechForwardProduct from "./tech-forward/ProductPage";
import SplitScreenHeroLanding from "./split-screen-hero/LandingPage";
import SplitScreenHeroProduct from "./split-screen-hero/ProductPage";
import CardFirstMosaicLanding from "./card-first-mosaic/LandingPage";
import CardFirstMosaicProduct from "./card-first-mosaic/ProductPage";
import DarkModeDefaultLanding from "./dark-mode-default/LandingPage";
import DarkModeDefaultProduct from "./dark-mode-default/ProductPage";
import ClassicTrustLanding from "./classic-trust/LandingPage";
import ClassicTrustProduct from "./classic-trust/ProductPage";

interface TemplateComponents {
  LandingPage: ComponentType<{ agent: AgentConfig }>;
  ProductPage: ComponentType<{ agent: AgentConfig; product: ProductInfo }>;
}

const templates: Record<TemplateName, TemplateComponents> = {
  "bold-professional": {
    LandingPage: BoldProfessionalLanding,
    ProductPage: BoldProfessionalProduct,
  },
  "warm-friendly": {
    LandingPage: WarmFriendlyLanding,
    ProductPage: WarmFriendlyProduct,
  },
  "clean-corporate-grid": {
    LandingPage: CleanCorporateGridLanding,
    ProductPage: CleanCorporateGridProduct,
  },
  "modern-glassmorphism": {
    LandingPage: ModernGlassmorphismLanding,
    ProductPage: ModernGlassmorphismProduct,
  },
  "bold-editorial": {
    LandingPage: BoldEditorialLanding,
    ProductPage: BoldEditorialProduct,
  },
  "local-friendly": {
    LandingPage: LocalFriendlyLanding,
    ProductPage: LocalFriendlyProduct,
  },
  "premium-minimal": {
    LandingPage: PremiumMinimalLanding,
    ProductPage: PremiumMinimalProduct,
  },
  "tech-forward": {
    LandingPage: TechForwardLanding,
    ProductPage: TechForwardProduct,
  },
  "split-screen-hero": {
    LandingPage: SplitScreenHeroLanding,
    ProductPage: SplitScreenHeroProduct,
  },
  "card-first-mosaic": {
    LandingPage: CardFirstMosaicLanding,
    ProductPage: CardFirstMosaicProduct,
  },
  "dark-mode-default": {
    LandingPage: DarkModeDefaultLanding,
    ProductPage: DarkModeDefaultProduct,
  },
  "classic-trust": {
    LandingPage: ClassicTrustLanding,
    ProductPage: ClassicTrustProduct,
  },
};

export function getTemplate(name: TemplateName): TemplateComponents {
  return templates[name];
}

export function getAllTemplateNames(): TemplateName[] {
  return Object.keys(templates) as TemplateName[];
}
