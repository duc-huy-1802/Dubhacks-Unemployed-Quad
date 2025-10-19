import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-secondary text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-accent mb-4">Releaf</h3>
            <p className="text-sm opacity-80">
              Empowering communities to detect, report, and restore forests worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button 
                  onClick={() => onNavigate?.('about-us')}
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('what-we-do')}
                  className="hover:text-accent transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('impact')}
                  className="hover:text-accent transition-colors"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('impact')}
                  className="hover:text-accent transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button 
                  onClick={() => onNavigate?.('volunteer-map')}
                  className="hover:text-accent transition-colors"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('org-dashboard')}
                  className="hover:text-accent transition-colors"
                >
                  Partner With Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('report-hotspot')}
                  className="hover:text-accent transition-colors"
                >
                  Report Deforestation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('get-involved')}
                  className="hover:text-accent transition-colors"
                >
                  Donate
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-80 mb-4">
              <p>Email: info@releaf.org</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-sm opacity-60">
          <p>&copy; 2025 Releaf. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
