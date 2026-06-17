"use client";

import { useEffect, useRef, useState } from "react";

function isInteractiveElement(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;

  return Boolean(
    target.closest(
      'a, button, input, textarea, select, summary, [role="button"], [data-cursor="hover"]'
    )
  );
}

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      setIsEnabled(finePointer.matches && !reducedMotion.matches);
    };

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);

    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("custom-cursor-enabled", isEnabled);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let dotX = targetX;
    let dotY = targetY;
    let frameId = 0;

    const applyTransform = (element: HTMLDivElement, x: number, y: number) => {
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      dotX += (targetX - dotX) * 0.42;
      dotY += (targetY - dotY) * 0.42;

      applyTransform(ring, ringX, ringY);
      applyTransform(dot, dotX, dotY);
      frameId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setIsVisible(true);

      const nextHovering = isInteractiveElement(event.target);
      if (nextHovering !== isHoveringRef.current) {
        isHoveringRef.current = nextHovering;
        setIsHovering(nextHovering);
      }
    };

    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);
    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    document.documentElement.addEventListener("pointerenter", handlePointerEnter);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      document.documentElement.removeEventListener("pointerenter", handlePointerEnter);
      window.cancelAnimationFrame(frameId);
      setIsVisible(false);
      setIsHovering(false);
      setIsPressed(false);
      isHoveringRef.current = false;
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  const stateClasses = [isVisible ? "is-visible" : "", isHovering ? "is-hovering" : "", isPressed ? "is-pressed" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div ref={ringRef} className={`custom-cursor custom-cursor-ring ${stateClasses}`} aria-hidden="true" />
      <div ref={dotRef} className={`custom-cursor custom-cursor-dot ${stateClasses}`} aria-hidden="true" />
    </>
  );
}
