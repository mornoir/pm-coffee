
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#menu', label: 'Menu' },
  { href: '#booking', label: 'Booking' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => {
        const href = link.href;
        if (href.startsWith('/#')) {
          return document.getElementById(href.substring(2));
        }
        if (href.startsWith('#')) {
          return document.getElementById(href.substring(1));
        }
        return null;
      }).filter(Boolean);
      
      let currentSection = '#home';
      for (const section of sections) {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = `#${section.id}`;
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    
    let targetId;
    if (href.startsWith('/#')) {
      targetId = href.substring(2);
    } else if (href.startsWith('#')) {
      targetId = href.substring(1);
    } else if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth'});
        setIsMenuOpen(false);
        return;
    } else {
        // Handle external links or other pages if any
        window.location.href = href;
        setIsMenuOpen(false);
        return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth',
        });
    }
    setActiveLink(href);
    setIsMenuOpen(false);
  };
  
  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => (
    <a
      href={href}
      onClick={(e) => handleNavClick(e, href)}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        activeLink === href ? "text-primary font-semibold" : "text-muted-foreground",
        className
      )}
    >
      {label}
    </a>
  );

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled ? "border-border bg-background/95" : "border-transparent bg-background/10"
      )}>
      <div className="container flex h-20 items-center justify-between transition-all duration-300">
        <Link href="#home" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, "#home")}>
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline font-bold text-lg">Kabar Baik Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
           <Button asChild className="hidden md:flex">
             <a href="#booking" onClick={(e) => handleNavClick(e, "#booking")}>Reserve Now</a>
           </Button>

          {/* Mobile Navigation */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                   <Link href="#home" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, "#home")}>
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="font-headline font-bold text-lg">Kabar Baik Hub</span>
                   </Link>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} className="text-xl"/>
                  ))}
                </nav>
                <Button asChild className="w-full mt-8">
                  <a href="#booking" onClick={(e) => handleNavClick(e, "#booking")}>Reserve Now</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
