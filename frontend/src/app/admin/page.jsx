"use client";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://thoughtful-growth-c2a66179de.strapiapp.com/admin");
  });
}
