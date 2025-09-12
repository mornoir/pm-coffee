import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/booking', label: 'Booking' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
  { href: '#', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
  { href: '#', icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-headline font-bold text-xl">Kabar Baik Hub</span>
            </Link>
            <p className="text-muted-foreground text-sm">Work, Coffee, Community.</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline font-semibold text-foreground mb-4">Navigate</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@kababaikhub.com</li>
                <li>+62 123 4567 890</li>
                <li>Jl. Produktif No. 123, Jakarta</li>
              </ul>
            </div>
            <div>
               <h3 className="font-headline font-semibold text-foreground mb-4">Connect</h3>
               <div className="flex space-x-4">
                 {socialLinks.map(social => (
                   <Button key={social.label} asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                     <a href={social.href} aria-label={social.label}>{social.icon}</a>
                   </Button>
                 ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kabar Baik Hub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
