"use client";

import { useEffect } from "react";
import { useStudyStore } from "@/lib/storage";

export function Providers({ children }: { children: React.ReactNode }) {
  const hydrate = useStudyStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return children;
}
