"use client";
import { useEffect } from "react";

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ParallaxCard({ children, className = "" }: ParallaxCardProps) {
  useEffect(() => {
    class parallaxTiltEffect {
      element: HTMLElement;
      container: HTMLElement;
      size: [number, number];
      w: number;
      h: number;
      tiltEffect: string;
      mouseOnComponent: boolean;

      constructor({ element, tiltEffect }: { element: HTMLElement; tiltEffect: string }) {
        this.element = element;
        this.container = this.element.querySelector(".container") as HTMLElement;
        this.size = [300, 360];
        [this.w, this.h] = this.size;
        this.tiltEffect = tiltEffect;
        this.mouseOnComponent = false;

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.defaultStates = this.defaultStates.bind(this);
        this.setProperty = this.setProperty.bind(this);
        this.init = this.init.bind(this);

        this.init();
      }

      handleMouseMove(event: MouseEvent) {
        const rect = this.element.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        let X: number;
        let Y: number;
        if (this.tiltEffect === "reverse") {
          X = ((offsetX - this.w / 2) / 3) / 3;
          Y = (-(offsetY - this.h / 2) / 3) / 3;
        } else if (this.tiltEffect === "normal") {
          X = (-(offsetX - this.w / 2) / 3) / 3;
          Y = ((offsetY - this.h / 2) / 3) / 3;
        } else {
          X = 0;
          Y = 0;
        }
        this.setProperty("--rY", X.toFixed(2));
        this.setProperty("--rX", Y.toFixed(2));
        this.setProperty("--bY", (80 - X / 4).toFixed(2) + "%");
        this.setProperty("--bX", (50 - Y / 4).toFixed(2) + "%");
      }

      handleMouseEnter() {
        this.mouseOnComponent = true;
        this.container.classList.add("container--active");
      }

      handleMouseLeave() {
        this.mouseOnComponent = false;
        this.defaultStates();
      }

      defaultStates() {
        this.container.classList.remove("container--active");
        this.setProperty("--rY", "0");
        this.setProperty("--rX", "0");
        this.setProperty("--bY", "80%");
        this.setProperty("--bX", "50%");
      }

      setProperty(p: string, v: string) {
        return this.container.style.setProperty(p, v);
      }

      init() {
        this.element.addEventListener("mousemove", this.handleMouseMove);
        this.element.addEventListener("mouseenter", this.handleMouseEnter);
        this.element.addEventListener("mouseleave", this.handleMouseLeave);
      }
    }

    const wrapElements = document.querySelectorAll(".tilt-wrap");
    wrapElements.forEach((el, i) => {
      new parallaxTiltEffect({
        element: el as HTMLElement,
        tiltEffect: i % 2 === 0 ? "reverse" : "normal",
      });
    });
  }, []);

  return (
    <div className={`wrap tilt-wrap ${className}`}>
      <div className="container">{children}</div>
    </div>
  );
}