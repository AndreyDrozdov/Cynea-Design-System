"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Leaf, Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Show/hide logic
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Back to top button visibility
    if (latest > 500) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Platform", href: "#platform" },
    { label: "Demos", href: "#demos" },
    { label: "Impact", href: "#impact" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 pt-4"
    >
      <div className="container mx-auto px-6">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-sm px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#D0F17A] rounded-3xl">
                <Leaf className="w-5 h-5 text-[#151515]" />
              </div>
              <span className="text-xl text-[#151515] font-['Dela_Gothic_One'] tracking-tight">Cyanea</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#075D44] transition-colors font-['Plus_Jakarta_Sans']"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-[#075D44] hover:bg-[#075D44]/90 text-[#E6E8EC] rounded-3xl">
                Request Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-[60] md:hidden bg-[#E6E8EC]/98 backdrop-blur-xl flex flex-col p-6"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#D0F17A] rounded-3xl">
                    <Leaf className="w-5 h-5 text-[#151515]" />
                  </div>
                  <span className="text-xl text-[#151515] font-['Dela_Gothic_One'] tracking-tight">Cyanea</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-white rounded-3xl shadow-sm"
                >
                  <X className="w-6 h-6 text-[#151515]" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col gap-6 items-center justify-center flex-1">
                {navItems.map((item, i) => (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    key={item.label}
                    href={item.href}
                    className="text-4xl text-[#151515] font-['Dela_Gothic_One'] tracking-tight hover:text-[#075D44] transition-colors text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="mt-auto space-y-6">
                <Button className="w-full bg-[#075D44] text-[#E6E8EC] py-8 text-xl rounded-3xl font-['Dela_Gothic_One'] tracking-tight">
                  Request Demo
                </Button>
                <p className="text-center text-sm text-[#151515]/60 font-['Plus_Jakarta_Sans']">
                  © 2026 Cyanea Design. No plant left behind.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>

    {/* Back to top button */}
    <AnimatePresence>
      {showBackToTop && !isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] p-4 bg-[#075D44] text-[#D0F17A] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  </>
  );
}