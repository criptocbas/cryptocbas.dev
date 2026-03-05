"use client";

import { useState } from "react";
import BootSequence from "./BootSequence";

export function BootWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <BootSequence onComplete={() => setIsLoading(false)} />
      {!isLoading && children}
    </>
  );
}
