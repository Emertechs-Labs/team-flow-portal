
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-display font-semibold">MemoFlow</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
            Home
          </Link>
          <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
            Features
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
            About
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
