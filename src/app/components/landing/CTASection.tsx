"use client";

import { Button } from "../ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";

export function CTASection() {
  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1543747050-1db50a971c00?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#151515]/65" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#D0F17A] rounded-3xl p-8"
        >
          <p className="text-[#075D44] font-semibold mb-2 font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-sm">
            Get Involved
          </p>
          <h2 className="text-4xl md:text-5xl text-[#075D44] mb-6 tracking-tight">
            Join the Global Conservation Network
          </h2>
          <p className="text-xl text-[#075D44]/70 mb-10 leading-relaxed font-['Plus_Jakarta_Sans'] max-w-2xl">
            Every day we wait, species move closer to extinction. Partner with Cyanea to
            multiply your conservation impact and save species that would otherwise be lost forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#075D44] text-[#E6E8EC] px-8 rounded-3xl"
            >
              Request Platform Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-[#075D44] px-8 rounded-3xl hover:bg-white/90"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Sales
            </Button>
          </div>

          <p className="mt-8 text-sm text-[#075D44]/70 font-['Plus_Jakarta_Sans']">
            Used by 76 institutions in 34 countries · Monitoring 847 species · Preventing extinction in real-time
          </p>
        </motion.div>
      </div>
    </section>
  );
}