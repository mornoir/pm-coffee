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
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6">
              {menuItems.map(item => {
                return (
                  <li key={item.id} className="border-b border-border/50 pb-4">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold text-xl">{item.name}</h3>
                      <p className="text-muted-foreground font-medium">{item.price}</p>
                    </div>
                    <p className="text-muted-foreground mt-1 pr-12">{item.description}</p>
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
