'use client';

import { Logo } from './logo';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks = [
  { href: '#about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/discover', label: 'Gallery' },
];

const socialLinks = [
  { href: '#', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
  { href: '#', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
  { href: '#', icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
];

export function Footer() {
  const pathname = usePathname();
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#') && pathname === '/') {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    }
  };

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
                <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter">Make <br/> Movement.</h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
                 <div>
                    <h3 className="font-semibold text-muted-foreground mb-4">Navigate</h3>
                    <ul className="space-y-2">
                        {navLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-foreground hover:text-foreground/70 transition-colors cursor-pointer">
                            {link.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-muted-foreground mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><Link href="/discover" className="text-foreground hover:text-foreground/70">Our Story</Link></li>
                        <li><a href="#booking" onClick={(e) => handleScroll(e, '#booking')} className="text-foreground hover:text-foreground/70">Contact</a></li>
                        <li><Link href="#" className="text-foreground hover:text-foreground/70">Careers</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-muted-foreground mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-foreground hover:text-foreground/70">Privacy</Link></li>
                        <li><Link href="#" className="text-foreground hover:text-foreground/70">Terms</Link></li>
                    </ul>
                </div>
                <div>
                   <h3 className="font-semibold text-muted-foreground mb-4">Connect</h3>
                    <div className="flex space-x-4">
                        {socialLinks.map(social => (
                        <a key={social.label} href={social.href} aria-label={social.label} className="text-foreground hover:text-foreground/70 transition-colors">
                            {social.icon}
                        </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-24 pt-8 border-t border-border/20 text-sm flex justify-between items-center text-muted-foreground">
          <div className="flex items-center gap-2">
            <Logo className="h-5 w-5"/>
            <span>PM COFFEE</span>
          </div>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
