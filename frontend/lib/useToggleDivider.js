"use client";

import { useEffect } from "react";
import { useDividerContext } from "@/lib/dividerContext";

const useToggleDivider = (shouldShow) => {
  const { setShowDivider } = useDividerContext();

  useEffect(() => {
    setShowDivider(shouldShow);
    return () => setShowDivider(true);
  }, [shouldShow, setShowDivider]);
};

export default useToggleDivider;
