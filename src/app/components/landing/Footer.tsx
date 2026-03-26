import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-[#151515] py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/cyanea_logo.svg" 
                alt="Cyanea Logo" 
                className="h-8 w-auto" 
              />
            </div>
            <p className="text-[#151515]/70 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
              AI-powered plant conservation software preventing extinction through predictive 
              analytics and global coordination.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold mb-4 font-['Dela_Gothic_One'] tracking-tight text-[#151515]">Platform</h4>
            <ul className="space-y-2 text-sm text-[#151515]/70 font-['Plus_Jakarta_Sans']">
              <li><a href="#" className="hover:text-[#151515] transition-colors">Species Risk Dashboard</a></li>
              <li><a href="#" className="hover:text-[#151515] transition-colors">Genetic Optimizer</a></li>
              <li><a href="#" className="hover:text-[#151515] transition-colors">Poaching Detection</a></li>
              <li><a href="#" className="hover:text-[#151515] transition-colors">Seed Bank Manager</a></li>
              <li><a href="#" className="hover:text-[#151515] transition-colors">Network Coordination</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 font-['Dela_Gothic_One'] tracking-tight text-[#151515]">Resources</h4>
            <ul className="space-y-2 text-sm text-[#151515]/70 font-['Plus_Jakarta_Sans']">
              <li><a href="#" className="hover:text-[#151515] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#151515] transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-[#151515] transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-[#151515] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#151515] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 font-['Dela_Gothic_One'] tracking-tight text-[#151515]">Contact</h4>
            <ul className="space-y-3 text-sm text-[#151515]/70 font-['Plus_Jakarta_Sans']">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>conservation@cyanea.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Global Conservation Network<br />San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#151515]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#151515]/70 font-['Plus_Jakarta_Sans']">
            © 2026 Cyanea. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#151515]/70 font-['Plus_Jakarta_Sans']">
            <a href="#" className="hover:text-[#151515] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#151515] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#151515] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}