import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { common } from "./locales/en/common";
import { newsletterSignup } from "./locales/en/newsletter-signup";

export const defaultNS = "common";
export const resources = {
  en: {
    common,
    "newsletter-signup": newsletterSignup,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["common"],
  defaultNS,
  resources,
});
