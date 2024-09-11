"use client";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://helpful-positivity-9e5f57aa9a.strapiapp.com/admin/auth/login");
  });
}
