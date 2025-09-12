import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { placeHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Utensils, Wifi, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
  {
    icon: <Wifi className="h-8 w-8 text-primary" />,
    title: 'Blazing-Fast Wi-Fi',
    description: 'Stay connected with our high-speed fiber internet, perfect for video calls and heavy workloads.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Comfortable Seating',
    description: 'Choose from a variety of seating options designed for comfort and productivity during long work sessions.',
  },
  {
    icon: <Utensils className="h-8 w-8 text-primary" />,
    title: 'Specialty Coffee & Food',
    description: 'Fuel your day with our expertly crafted coffees and a delicious menu of food to keep you going.',
  },
];

const socialPosts = [
  { id: 'social1', hint: 'latte art' },
  { id: 'social2', hint: 'people working' },
  { id: 'social3', hint: 'coffee shop interior' },
  { id: 'social4', hint: 'avocado toast' },
  { id: 'social5', hint: 'community event' },
  { id: 'social6', hint: 'friends chatting' },
];

export default function Home() {
  const heroImage = placeHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Work, Coffee, Community
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200">
            Your new favorite spot to be productive, catch up, and refuel.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/booking">Book a Seat</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">Reserve a Private Room</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Card key={item.title} className="text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {item.icon}
                  </div>
                  <CardTitle className="font-headline mt-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">More Than Just a Coffee Shop</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Kabar Baik was born from a desire to create a space where great coffee, productivity, and community can coexist. We're a haven for freelancers, a hub for collaborators, and a warm spot for friends to connect.
            </p>
            <Button asChild className="mt-6">
              <Link href="/about">Learn Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div>
            <div className="relative h-80 rounded-lg shadow-2xl overflow-hidden">
               <Image
                src="https://picsum.photos/seed/about1/600/400"
                alt="Smiling barista"
                fill
                className="object-cover"
                data-ai-hint="barista smiling"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Join Our Community</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground text-lg">
            Follow us on social media for the latest updates, events, and a glimpse into daily life at Kabar Baik.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialPosts.map((post) => {
              const image = placeHolderImages.find((img) => img.id === post.id);
              return (
                <div key={post.id} className="relative aspect-square overflow-hidden rounded-lg group">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
