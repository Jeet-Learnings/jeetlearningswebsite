"use client";

import { useEffect } from "react";
import { useTranslation } from "@/app/context/TranslationContext";
import { usePathname } from "next/navigation";

/**
 * Hook to preload translations for the current route
 * Automatically preloads Hindi translations when the route changes
 * and the user has Hindi selected as their language
 */
export function useRouteTranslationPreload() {
  const { language, isRouteLoading, preloadRoute } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    // Preload translations when route changes and language is Hindi
    if (language === "hi") {
      preloadRoute("hi");
    }
  }, [pathname, language, preloadRoute]);

  return { isRouteLoading };
}
