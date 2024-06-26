import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "lt"] as const;
export const localePrefix = "always"; // Default

export const pathnames = {
  "/": "/",
  "/about-us": {
    en: "/about-us",
    lt: "/apie-mus",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
