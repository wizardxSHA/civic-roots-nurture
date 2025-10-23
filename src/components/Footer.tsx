import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Address */}
          <div className="space-y-4">
            <img src={logo} alt="Civic Roots Foundation" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm opacity-90">
              St. John's, Newfoundland & Labrador<br />
              Canada
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/programs" className="opacity-90 hover:opacity-100 transition-opacity">Programs</Link></li>
              <li><Link to="/news" className="opacity-90 hover:opacity-100 transition-opacity">News & Impact</Link></li>
              <li><Link to="/get-involved" className="opacity-90 hover:opacity-100 transition-opacity">Get Involved</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@civicrootsfoundation.ca" className="opacity-90 hover:opacity-100 transition-opacity">
                  info@civicrootsfoundation.ca
                </a>
              </li>
              <li>
                <a href="mailto:partnerships@civicrootsfoundation.ca" className="opacity-90 hover:opacity-100 transition-opacity">
                  partnerships@civicrootsfoundation.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="opacity-90">© {new Date().getFullYear()} Civic Roots Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="opacity-90 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="#" className="opacity-90 hover:opacity-100 transition-opacity">Accessibility</Link>
            <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
