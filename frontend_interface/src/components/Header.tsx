import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate?.('landing')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white">🌱</span>
            </div>
            <span className="text-foreground">Releaf</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate?.('landing')}
              className={`text-foreground hover:text-primary transition-colors ${currentPage === 'landing' ? 'text-primary' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate?.('what-we-do')}
              className={`text-foreground hover:text-primary transition-colors ${currentPage === 'what-we-do' ? 'text-primary' : ''}`}
            >
              What We Do
            </button>
            <button 
              onClick={() => onNavigate?.('impact')}
              className={`text-foreground hover:text-primary transition-colors ${currentPage === 'impact' ? 'text-primary' : ''}`}
            >
              Impact
            </button>
            <button 
              onClick={() => onNavigate?.('about-us')}
              className={`text-foreground hover:text-primary transition-colors ${currentPage === 'about-us' ? 'text-primary' : ''}`}
            >
              About Us
            </button>
            <Button 
              onClick={() => onNavigate?.('get-involved')}
              className="bg-accent hover:bg-accent/90 text-white rounded-xl"
            >
              Get Involved
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-4">
            <button 
              onClick={() => {
                onNavigate?.('landing');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => {
                onNavigate?.('what-we-do');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              What We Do
            </button>
            <button 
              onClick={() => {
                onNavigate?.('impact');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Impact
            </button>
            <button 
              onClick={() => {
                onNavigate?.('about-us');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <Button 
              onClick={() => {
                onNavigate?.('get-involved');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl"
            >
              Get Involved
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
