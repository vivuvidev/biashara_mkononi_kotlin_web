import type { ComponentType } from "react";
import { biasharaMkononiLegal } from "@/data/legal/biashara-mkononi";

export type Lang = "en" | "sw";

export type LegalDoc = {
  title: string;
  description: string;
  content: ComponentType;
};

export type AppLegal = {
  name: string;
  privacy: { en: LegalDoc; sw?: LegalDoc };
  terms: { en: LegalDoc; sw?: LegalDoc };
};

export const appRegistry: Record<string, AppLegal> = {
  "biashara-mkononi": biasharaMkononiLegal,
};
