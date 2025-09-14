
'use client';

import { menuItems, MenuItem } from '@/lib/menu-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";


const allTags = ['Recommended', 'Coffee', 'Non-Coffee', 'Eatery', 'Snack & Desserts'];

type GroupedMenuItems = {
  [key: string]: MenuItem[];
};

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('Recommended');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);


  const getCategoryFromTag = (tag: string) => {
    return tag.toLowerCase().replace(' & ', '_&_');
  };

  const filteredMenuItems = activeFilter === 'Recommended'
    ? menuItems.filter(item => item.tags.includes('recommended'))
    : menuItems.filter(item => {
        const categoryTag = getCategoryFromTag(activeFilter);
        return item.tags.some(t => t === categoryTag);
    });

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
    <Card key={item.id} className="p-4 bg-secondary/30 border-border/50 cursor-pointer hover:bg-secondary/50 transition-colors" onClick={() => setSelectedItem(item)}>
        <div className="flex gap-4 items-start">
            {item.imageUrl && (
            <div className="relative w-24 h-24 rounded-md overflow-hidden shadow-sm shrink-0">
                <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover"
                sizes="96px"
                />
            </div>
            )}
            <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-muted-foreground font-medium shrink-0">{item.price}</p>
            </div>
            <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
            </div>
        </div>
    </Card>
  );

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

          <div className="max-w-4xl mx-auto">
            {displayGrouped && Object.keys(groupedItems).length > 0 ? (
              Object.entries(groupedItems).map(([groupName, items]) => (
                <div key={groupName} className="mb-12 last:mb-0">
                  <h2 className="font-headline text-3xl font-bold tracking-tight mb-8">{groupName}</h2>
                  <div className="space-y-6">
                    {items.map(renderMenuItem)}
                  </div>
                </div>
              ))
            ) : (
              <div className="space-y-6">
                {filteredMenuItems.map(renderMenuItem)}
              </div>
            )}
          </div>
        </section>
      </div>

       {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={(isOpen) => !isOpen && setSelectedItem(null)}>
          <DialogContent className="max-w-md p-0">
            {selectedItem.imageUrl && (
              <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                <Image
                  src={selectedItem.imageUrl}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <DialogHeader className="p-6">
              <div className="flex justify-between items-center">
                 <DialogTitle className="text-2xl font-headline tracking-tight">{selectedItem.name}</DialogTitle>
                 <p className="text-lg font-medium text-muted-foreground">{selectedItem.price}</p>
              </div>
              <DialogDescription className="pt-4 text-base text-muted-foreground">
                {selectedItem.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
