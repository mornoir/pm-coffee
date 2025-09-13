import { menuItems } from '@/lib/menu-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function MenuPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-12">
          <Button asChild variant="link" className="p-0">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <section id="menu">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">Our Menu</h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Crafted with care, from our coffee to our kitchen.
            </p>
          </header>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-2">
              {menuItems.map(item => {
                return (
                  <li key={item.id} className="border-b border-border/50 py-3 flex justify-between items-baseline">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-muted-foreground">{item.price}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
