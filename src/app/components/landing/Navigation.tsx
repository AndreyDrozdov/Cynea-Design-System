import { useState } from "react";
import { Button } from "../ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Platform", href: "#platform" },
    { label: "Demos", href: "#demos" },
    { label: "Impact", href: "#impact" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="container mx-auto px-6">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-sm px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#D0F17A] rounded-3xl">
                <Leaf className="w-5 h-5 text-[#151515]" />
              </div>
              <span className="text-xl text-[#151515] font-['Dela_Gothic_One']">Cyanea</span>
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-b-3xl overflow-hidden mt-1"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm font-medium text-gray-700 hover:text-[#075D44] transition-colors font-['Plus_Jakarta_Sans']"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="w-full bg-[#075D44] hover:bg-[#075D44]/90 text-[#E6E8EC] rounded-3xl">
                  Request Demo
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}