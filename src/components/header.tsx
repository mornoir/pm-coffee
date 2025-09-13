'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Menu' },
  { href: '#highlights', label: 'Features' },
  { href: '#booking', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth',
        });
    }
    setIsMenuOpen(false);
  };
  
  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => (
    <a
      href={href}
      onClick={(e) => handleNavClick(e, href)}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary text-muted-foreground",
        className
      )}
    >
      {label}
    </a>
  );

  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 border-b border-border/50 backdrop-blur-lg" : "bg-transparent"
      )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, "#home")}>
          <Logo className="h-6 w-6 text-foreground" />
          <span className="font-semibold text-lg">PM COFFEE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background text-foreground">
             <div className="p-4">
                <div className="flex justify-between items-center mb-12">
                   <Link href="#home" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, "#home")}>
                    <Logo className="h-6 w-6 text-foreground" />
                    <span className="font-semibold text-lg">PM COFFEE</span>
                   </Link>
                   <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                   </Button>
                </div>
                <nav className="flex flex-col gap-6 text-center">
                  {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-2xl font-headline tracking-tight"
                    >
                        {link.label}
                    </a>
                  ))}
                </nav>
              </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
