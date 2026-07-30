import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import milletIcon from "@/assets/millet-icon.png";

const Footer = () => {
  const footerLinks = {
    products: [
      "Protein Power Mix",
      "Energy Bars",
      "Crunchy Snacks",
      "Breakfast Cereals",
      "Millet Flour"
    ],
    company: [
      "About Us",
      "Our Story",
      "Careers",
      "Press",
      "Sustainability"
    ],
    support: [
      "FAQ",
      "Shipping Info",
      "Returns",
      "Contact Us",
      "Track Order"
    ],
    health: [
      "Nutritional Guide",
      "Health Benefits",
      "Recipes",
      "Wellness Blog",
      "Expert Tips"
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Stay Healthy</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Join Our Wellness Community
            </h3>
            <p className="text-primary-foreground/90 mb-8">
              Get exclusive recipes, health tips, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/80 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="turmeric" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={milletIcon} alt="Millet Icon" className="w-8 h-8 filter brightness-0 invert" />
              <div className="text-xl font-heading font-bold">
                Dhruv's Millet Delight
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Committed to bringing you the finest millet-based products that combine 
              ancient wisdom with modern nutrition science for a healthier lifestyle.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/90 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/90 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/90 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Health & Wellness */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Wellness</h4>
            <ul className="space-y-2">
              {footerLinks.health.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/90 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="font-medium">Email Us</div>
                <div className="text-primary-foreground/90">info@dhruvsdelights.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-turmeric/20 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-turmeric" />
              </div>
              <div>
                <div className="font-medium">Call Us</div>
                <div className="text-primary-foreground/90">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="font-medium">Visit Us</div>
                <div className="text-primary-foreground/90">Mumbai, Maharashtra</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-primary-foreground/90 text-sm">
              © 2024 Dhruv's Millet Delight. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/90 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;