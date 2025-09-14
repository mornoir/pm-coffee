
'use client';

import { menuItems, MenuItem } from '@/lib/menu-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const allTags = ['Recommended', 'Coffee', 'Non-Coffee', 'Eatery', 'Snack & Desserts'];

type GroupedMenuItems = {
  [key: string]: MenuItem[];
};

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('Recommended');

  const filteredMenuItems = activeFilter === 'Recommended'
    ? menuItems.filter(item => item.tags.includes('recommended'))
    : menuItems.filter(item => item.tags.includes(activeFilter.toLowerCase().replace(' & ', '_&_').replace('-', '_')));
    
  const groupByCategory = (items: MenuItem[]): GroupedMenuItems => {
      const categoryKeywords = ['espresso-based', 'matcha', 'chocolate', 'tea', 'smoothie', 'light-meal', 'heavy-meal', 'pastry', 'dessert'];
      return items.reduce((acc, item) => {
          let mainCategory = 'Others'; 
          const foundCategory = categoryKeywords.find(keyword => item.tags.includes(keyword));

          if (foundCategory) {
              mainCategory = foundCategory.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          }

          if (!acc[mainCategory]) {
              acc[mainCategory] = [];
          }
          acc[mainCategory].push(item);
          return acc;
      }, {} as GroupedMenuItems);
  };
  
  const groupedItems = groupByCategory(filteredMenuItems);
  const displayGrouped = activeFilter !== 'Recommended';


  const renderMenuItem = (item: MenuItem) => (
    <div key={item.id} className="space-y-4">
      <div className="flex gap-4 items-start">
        {item.imageUrl && (
          <div className="relative w-20 h-20 rounded-md overflow-hidden shadow-sm shrink-0">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
        <p className="text-muted-foreground font-medium shrink-0">{item.price}</p>
      </div>
       <div className="border-b border-dashed border-border/50"></div>
    </div>
  )


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
            <div className="inline-flex flex-wrap border border-border/50 rounded-lg p-4 justify-center gap-2">
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

          <div className="max-w-5xl mx-auto">
             {displayGrouped ? (
                Object.entries(groupedItems).map(([groupName, items]) => (
                  <div key={groupName} className="mb-12 last:mb-0">
                    <h2 className="font-headline text-3xl font-bold tracking-tight mb-8">{groupName}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 gap-y-8">
                      {items.map(renderMenuItem)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 gap-y-8">
                  {filteredMenuItems.map(renderMenuItem)}
                </div>
              )}
          </div>
        </section>
      </div>
    </div>
  );
}
