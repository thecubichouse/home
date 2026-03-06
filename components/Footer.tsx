"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";

// Initialize Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Define prop types for FooterLink
type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

// Define prop types for SocialIcon
type SocialIconProps = {
  href: string;
  ariaLabel: string;
  children: ReactNode;
};

export default function Footer() {
  // Reusable component for footer links
  const FooterLink = ({ href, children }: FooterLinkProps) => (
    <li>
      <Link
        href={href}
        className="block text-neutral-400 hover:text-white transition-transform duration-300 hover:-translate-y-1"
      >
        {children}
      </Link>
    </li>
  );

  // Reusable component for social media icons
  const SocialIcon = ({ href, ariaLabel, children }: SocialIconProps) => (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="text-neutral-400 hover:text-white transition-transform duration-300 hover:scale-125"
    >
      {children}
    </Link>
  );

  return (
    <footer className={`bg-black text-white ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand & Ethos */}
          <div className="lg:col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white">The Cubic House</h2>
            <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
              We craft modern architectural solutions blending creativity,
              innovation, and timeless design. Let’s bring your vision to life
              with elegance and precision.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Explore</h3>
            <ul className="space-y-4">
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/about">Our Studio</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h3>
            <address className="not-italic text-neutral-400 space-y-4 text-sm">
              <a
                href="#"
                className="flex items-start gap-3 hover:text-white transition-colors duration-300"
              >
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>671-E, E Block, Phase I Wapda Town, Multan</span>
              </a>
              <a
                href="mailto:info@thecubichouse.com"
                className="flex items-center gap-3 hover:text-white transition-colors duration-300"
              >
                <Mail size={18} />
                <span>info@thecubichouse.com</span>
              </a>
              <a
                href="tel:+923032823333"
                className="flex items-center gap-3 hover:text-white transition-colors duration-300"
              >
                <Phone size={18} />
                <span>+92 303 2823333</span>
              </a>
            </address>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Join Our Newsletter
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              Get the latest insights and project updates.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="bg-neutral-800 border border-neutral-700 text-white text-sm rounded-l-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-neutral-500"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="group bg-white text-stone-900 p-3 rounded-r-md hover:bg-neutral-200 transition-colors duration-300"
              >
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
            <div className="flex space-x-5 mt-8">
              <SocialIcon href="#" ariaLabel="Facebook">
                <Facebook size={22} />
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="Twitter">
                <Twitter size={22} />
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="Instagram">
                <Instagram size={22} />
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="LinkedIn">
                <Linkedin size={22} />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} The Cubic House. All Rights Reserved.</p>
          <p className="mt-4 sm:mt-0">
            Crafted with ❤️ by{" "}
            <a
              href="#"
              className="font-medium text-neutral-300 hover:text-white transition-colors"
            >
              Muhammad Saad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
 
