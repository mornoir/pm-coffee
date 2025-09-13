'use client';

import { menuItems } from '@/lib/menu-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const allTags = ['Recommended', 'Coffee', 'Non-Coffee', 'Eatery', 'Snack & Desserts'];

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('Recommended');

  const filteredMenuItems = activeFilter === 'Recommended'
    ? menuItems.filter(item => item.tags.includes('recommended'))
    : menuItems.filter(item => item.tags.includes(activeFilter.toLowerCase().replace(' & ', ' & ').replace('-', ' ')));


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
          
          <div className="flex justify-center mb-12">
            <div className="border border-border/50 rounded-lg p-4 flex justify-center gap-2">
                {allTags.map(tag => (
                <Button
                    key={tag}
                    variant={activeFilter === tag ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(tag)}
                    className="capitalize"
                >
                    {tag}
                </Button>
                ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-8">
              {filteredMenuItems.map(item => {
                return (
                  <li key={item.id} className="flex gap-6 items-start border-b border-border/50 pb-8">
                    {item.imageUrl && (
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-md shrink-0">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80px, 96px"
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-xl">{item.name}</h3>
                        <p className="text-muted-foreground font-medium">{item.price}</p>
                      </div>
                      <p className="text-muted-foreground mt-2 text-base leading-relaxed">{item.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags?.map(tag => (
                          <Badge
                            key={tag}
                            variant={tag === 'recommended' ? 'default' : 'secondary'}
                            className={cn(
                              'capitalize',
                              tag === 'recommended' && 'bg-primary/90 text-primary-foreground'
                            )}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
