"use client";

import Balancer from "react-wrap-balancer";
import { Heart } from "lucide-react";

function HeroSection() {
  return (
    <div className="flex h-[calc(100vh-8rem)] w-full flex-col items-center justify-center text-left">
      <h1
        className="w-full animate-slide-from-left bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[0.01em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem] "
        style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
      >
        <Balancer>Vineet Sawhney</Balancer>
      </h1>
      <p
        className=" ml-2 mt-6 w-full animate-slide-from-left  text-gray-500 opacity-0 md:text-2xl"
        style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
      >
        <Balancer> FrontEnd Engineer.</Balancer>
      </p>
      <p
        className="ml-2 mt-6 w-full animate-slide-from-left  text-gray-500 opacity-0 md:text-2xl"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <Balancer>i {<Heart className="inline text-red-500" />} js</Balancer>
      </p>
    </div>
  );
}

export default HeroSection;
