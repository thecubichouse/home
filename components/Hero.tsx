"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion"; // Ensure these are imported
import Loader from "./Loader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* AnimatePresence for the Loader's fade-out */}
      <AnimatePresence>
        {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Hero Content - conditionally rendered */}
      {!isLoading && (
        // MOTION.SECTION: Now configured for a fade-in effect
        <motion.section
          // Start completely transparent
          initial={{ opacity: 0 }}
          // Animate to fully opaque
          animate={{ opacity: 1 }}
          // Control the animation speed and feel for the fade-in
          transition={{ duration: 1.0, ease: "easeInOut" }} // A smooth, slightly slower fade
          className={`${poppins.className} relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-56 md:pt-48 lg:pt-56 min-h-screen`}
        >
          {/* Background Image */}
          <Image
            src="/images/hero-bg.JPG"
            alt="Architectural Background"
            fill
            priority
            className="absolute inset-0 object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black/60 -z-10" />

          {/* Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-lg">
              Designing Spaces, Shaping Futures
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              We craft modern architectural solutions blending creativity,
              innovation, and timeless design. Let’s bring your vision to life
              with elegance and precision.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {[
                { href: "/projects", label: "Explore Projects" },
                { href: "/contact", label: "Get Consultation" },
              ].map((btn, i) => (
                <Link
                  key={i}
                  href={btn.href}
                  className="bg-white text-black px-8 py-3 rounded-lg text-sm md:text-base font-semibold tracking-wide uppercase shadow-lg transition-all duration-300 hover:bg-transparent hover:border hover:border-white hover:text-white"
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "10+", label: "Years Experience" },
              { number: "15+", label: "Expert Architects" },
              { number: "5+", label: "Design Awards" },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl md:text-4xl font-bold">{stat.number}</h3>
                <p className="mt-2 text-sm md:text-base text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Mini Services Snapshot */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-white">
            {[
              "Residential Design",
              "Commercial Spaces",
              "Sustainable Architecture",
              "Interior Design",
            ].map((service, i) => (
              <span
                key={i}
                className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm md:text-base backdrop-blur-md hover:bg-white hover:text-black transition-all cursor-default"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 flex flex-col items-center">
            <span className="text-gray-300 text-sm">Explore the Site</span>
            <div className="w-5 h-5 border-b-2 border-r-2 border-gray-300 rotate-45 animate-bounce mt-2"></div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default Hero;