"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    router.push(isLoggedIn ? "/home" : "/signup");
  }, [router]);

  return null; // Keep this empty as we're redirecting
}