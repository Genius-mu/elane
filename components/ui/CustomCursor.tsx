"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorType, setCursorType] = useState<"default" | "view" | "link" | "hidden">("default");
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only run on desktop with pointer
    if (window.matchMedia("(pointer: fine)").matches) {
      setMounted(true);
    } else {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveImage = target.closest("[data-cursor='view']");
      const interactiveLink = target.closest("a, button, [data-cursor='link']");

      if (interactiveImage) {
        setCursorType("view");
        setCursorText("VIEW");
      } else if (interactiveLink) {
        setCursorType("link");
        setCursorText("→");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted || !isVisible) return null;

  const isView = cursorType === "view";
  const isLink = cursorType === "link";

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full text-center transition-opacity duration-300"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isView ? 68 : isLink ? 36 : 10,
        height: isView ? 68 : isLink ? 36 : 10,
        backgroundColor: isView
          ? "rgba(124, 106, 78, 0.9)"
          : isLink
          ? "rgba(233, 229, 221, 0.2)"
          : "rgba(233, 229, 221, 0.75)",
        backdropFilter: isView || isLink ? "blur(6px)" : "none",
        border: isView || isLink ? "1px solid rgba(233, 229, 221, 0.3)" : "none",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {isView && (
        <span className="font-sans text-[10px] font-medium tracking-[0.2em] text-[#E9E5DD]">
          {cursorText}
        </span>
      )}
      {isLink && (
        <span className="font-sans text-xs text-[#E9E5DD]">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
