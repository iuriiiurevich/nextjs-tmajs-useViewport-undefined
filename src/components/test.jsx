"use client";

import { useEffect, useState } from "react";
import { useViewport, isTMA } from "@tma.js/sdk-react";

function TmaInitializer() {
  const viewport = useViewport();

  console.log({ viewport });
}

export function Test() {
  const [isTma, setIsTma] = useState();

  useEffect(() => {
    isTMA().then(setIsTma);
  }, []);

  return isTma && <TmaInitializer />;
}
