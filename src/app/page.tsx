import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { placeHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Utensils, Wifi, Users, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
  {
    icon: <Wifi className="h-8 w-8 text-accent" />,
    title: 'Blazing-Fast Wi-Fi',
    description: 'Stay connected with our high-speed fiber internet, perfect for video calls and heavy workloads.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Comfortable Seating',
    description: 'Choose from a variety of seating options designed for comfort and productivity during long work sessions.',
  },
  {
    icon: <Utensils className="h-8 w-8 text-accent" />,
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
      <section className="relative h-[70vh] md:h-[90vh] w-full">
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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end text-center text-foreground pb-16 md:pb-24 p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Experience the Perfect Brew
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Crafting flavors, handcrafted coffee. Delivered to you. Indulge in the richest coffee experience that transcends your taste.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/booking">Book a Seat</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </section>

       {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Discover Our Story</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">A Unique Experience Awaits You</h2>
            <p className="mt-4 text-muted-foreground text-lg">
             Born from a passion for exceptional coffee and a vision for a vibrant community space, our coffee shop is more than just a place to grab a drink. It's a destination. We are dedicated to sourcing the finest beans, crafting each cup to perfection, and creating a welcoming atmosphere that feels like a second home. Whether you're here to work, relax, or connect with friends, we aim to make every moment memorable.
            </p>
            <Button asChild variant="link" className="px-0 text-accent">
              <Link href="/about">Learn Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div>
            <div className="relative h-96 rounded-lg shadow-xl overflow-hidden">
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

      {/* Highlights Section */}
      <section id="highlights" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Discover Our Impact</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Crafted with Care and Passion</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Card key={item.title} className="text-center shadow-lg bg-card/80 backdrop-blur-sm">
                <CardHeader className="items-center">
                  <div className="bg-accent/10 p-4 rounded-full">
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
      
      {/* Testimonial */}
       <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
           <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_,i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
           </div>
          <blockquote className="text-xl md:text-2xl font-light italic text-foreground">
             "This coffee shop has transformed my mornings! The atmosphere is inviting, and the brews are simply exceptional."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Image src="https://picsum.photos/seed/avatar1/40/40" alt="Tessa Palmer" width={40} height={40} className="rounded-full" data-ai-hint="woman portrait" />
            <div>
              <p className="font-semibold text-foreground">Tessa Palmer</p>
              <p className="text-sm text-muted-foreground">Freelance Writer</p>
            </div>
          </div>
        </div>
      </section>


      {/* Social Feed Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Crafting Moments, One Sip at a Time</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground text-lg">
            Follow us on social media for the latest updates, events, and a glimpse into daily life at the cafe.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {placeHolderImages.filter(i => ['menu1', 'menu2', 'gallery3'].includes(i.id)).map((image) => {
              return (
                <Card key={image.id} className="group overflow-hidden">
                    <CardContent className="p-0">
                         <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                            />
                        </div>
                    </CardContent>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{image.id === 'menu1' ? 'Coffee' : image.id === 'menu2' ? 'Pastries' : 'Cozy Cafe'}</CardTitle>
                        <CardDescription>{image.id === 'menu1' ? 'Expertly brewed, rich and aromatic.' : image.id === 'menu2' ? 'Delightful baked goods, fresh daily.' : 'Grab a seat and get comfortable.'}</CardDescription>
                    </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
