"use client";
import React from "react";

export function ThemeProvider() {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && systemDark)) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);
  return null;
}
