import Social_Icons from "@/components/shared/social";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import AnimatedName from "./AnimatedName";

export default function Hero() {
  return (
    <section
      id="hero"
     className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-0"
    >
      {/* Left content */}
      <div className="lg:w-7/12 text-center lg:text-left">
        <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
          Software Engineer
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="inline-block mr-2">Hey, I&apos;m</span>
          <span className="relative inline-flex">
            <AnimatedName name="Antony Joyson" />
            <span className="ml-3">✨</span>
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 text-left ">
          I am a software Engineer with{" "}
          <span className="font-semibold text-foreground">
            {" "}
            2 years of experience in development
          </span>{" "}
          with Javascript framework React, React Native, and Next.js building{" "}
          <span className="font-semibold text-foreground">
            Mobile and Web Application
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10">
          <a
            href="/assets/antony_joyson_d_souza.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium rounded-xl px-6 py-3 bg-black text-white hover:bg-black/90 transition"
          >
            Download Resume
          </a>

          <a
            // href="/assets/antony_joyson_d_souza.pdf"
            href="https://rxresu.me/ajresearch10/antony-joyson-d-souza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium rounded-xl px-6 py-3 border border-input hover:bg-accent hover:text-accent-foreground transition"
          >
            View Resume
          </a>
          {/*  */}
        </div>

        {/* Social Links (Client) */}
        <Social_Icons />
      </div>

      {/* Right Image - Only visible on large screens */}
      <div className="hidden lg:block lg:w-5/12">
        <div className="relative z-10 bg-gradient-to-br from-muted to-background p-2 rounded-2xl shadow-xl">
          <div className="relative w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-inner aspect-[3/4]">
            <Image
              src="/assets/my.jpg"
              alt="Antony Joyson"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
