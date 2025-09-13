'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { placeHolderImages } from '@/lib/placeholder-images';
import { menuItems } from '@/lib/menu-data';
import { ArrowRight, Wifi, Users, Coffee, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
  {
    icon: <Wifi className="h-8 w-8 text-primary" />,
    title: 'High-Speed Wi-Fi',
    description: 'Seamless connectivity to keep your workflow uninterrupted.',
  },
  {
    icon: <Coffee className="h-8 w-8 text-primary" />,
    title: 'Artisanal Coffee',
    description: 'Expertly brewed coffee to fuel your inspiration and focus.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Community',
    description: 'A network of innovators and creators, just like you.',
  },
];

export default function Home() {
  const heroImage = placeHolderImages.find((img) => img.id === 'hero');
  const aboutImage1 = placeHolderImages.find((img) => img.id === 'about1');
  const aboutImage2 = placeHolderImages.find((img) => img.id === 'about2');
  const aboutImage3 = placeHolderImages.find((img) => img.id === 'about3');
  const ctaImage = placeHolderImages.find((img) => img.id === 'cta');
  const productImages = placeHolderImages.filter(img => img.id.startsWith('product'));

  return (
    <div className="flex flex-col text-foreground">
      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] md:h-screen w-full bg-background">
        <div className="container mx-auto h-full px-4 flex flex-col justify-end pb-24 md:pb-32">
          <div className="max-w-xl">
             <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter">
                Space for Ideas.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-md">
                A thoughtfully designed co-working space where productivity and comfort converge. Find your focus, fuel your creativity.
            </p>
          </div>
        </div>
      </section>

      {/* About Section 1 */}
      <section id="about" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="md:order-2">
                    <p className="text-primary font-semibold mb-2">Workspace Redefined</p>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        Designed for Flow, Built for Community.
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                       PM Coffee is more than just a place to work. It’s an environment crafted to eliminate distractions and foster connection. Every detail, from the acoustics to the aroma of freshly brewed coffee, is considered to help you achieve your best work.
                    </p>
                    <Button asChild variant="link" className="p-0 text-base">
                        <Link href="/discover">
                            Explore Our Space <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                {aboutImage1 && (
                     <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg md:order-1">
                        <Image
                            src={aboutImage1.imageUrl}
                            alt={aboutImage1.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            data-ai-hint={aboutImage1.imageHint}
                        />
                    </div>
                )}
            </div>
        </div>
      </section>
      
      {/* Product Showcase */}
       <section id="products" className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-primary font-semibold mb-2">Our Menu</p>
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                Fuel Your Day
              </h2>
            </div>
            <Button asChild variant="link" className="p-0 text-base hidden sm:flex">
              <Link href="/discover#menu">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {productImages.map(image => (
              <Link href="/discover#menu" key={image.id}>
                <div className="group">
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-background mb-4">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-contain p-4 md:p-8 transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{image.description}</h3>
                      <p className="text-sm text-muted-foreground">{menuItems.find(m => m.id === image.id.replace('product', 'menu-'))?.price}</p>
                    </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 sm:hidden">
            <Button asChild variant="link" className="p-0 text-base">
              <Link href="/discover#menu">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="bg-foreground text-background py-24 md:py-40">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                 {aboutImage2 && (
                     <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                            src={aboutImage2.imageUrl}
                            alt={aboutImage2.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            data-ai-hint={aboutImage2.imageHint}
                        />
                    </div>
                )}
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                    <div className="col-span-2">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">The Essentials, Perfected.</h2>
                    </div>
                    {highlights.map((item) => (
                      <div key={item.title}>
                        {item.icon}
                        <h3 className="font-semibold text-lg mt-4 mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </section>


      {/* About Section 2 */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div>
                    <p className="text-primary font-semibold mb-2">A Space That Adapts to You</p>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        From Solo Focus to Team Synergy.
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                       Our versatile layout includes quiet zones for deep work, collaborative tables for team projects, and private rooms for important meetings. Whatever your workday demands, you'll find the perfect spot at PM Coffee.
                    </p>
                    <Button asChild variant="link" className="p-0 text-base">
                        <Link href="#booking">
                            Book Your Spot <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                {aboutImage3 && (
                     <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={aboutImage3.imageUrl}
                            alt={aboutImage3.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            data-ai-hint={aboutImage3.imageHint}
                        />
                    </div>
                )}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {ctaImage && (
                <div className="relative h-80 md:h-[600px] w-full rounded-lg overflow-hidden">
                <Image
                    src={ctaImage.imageUrl}
                    alt={ctaImage.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={ctaImage.imageHint}
                />
                </div>
            )}
            <div className="max-w-md mx-auto text-center md:text-left">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Carry Your Focus</h2>
                <p className="mt-6 text-lg text-muted-foreground">Join our community and receive a complimentary PM Coffee tumbler to keep your brew perfect, wherever your day takes you.</p>
                <p className="mt-4 text-sm text-muted-foreground">Limited to the first 100 members.</p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="#booking">Become a Member</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking / Contact Form */}
      <section id="booking" className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
              <header className="text-center mb-12 md:mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Join the Movement</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Reserve your place in a community driven by passion and purpose.
                </p>
              </header>

              <Card className="border-border/50 bg-secondary/30">
                <CardContent className="p-6 md:p-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-headline text-2xl font-semibold mb-4">Book a Tour</h3>
                             <p className="text-muted-foreground mb-6">Experience the space firsthand. We'll show you around and treat you to a coffee on the house.</p>
                            <form className="space-y-4">
                                <input type="email" placeholder="Enter your email" className="w-full bg-background border-border/50 rounded-md p-3 text-sm" />
                                <Button type="submit" className="w-full">Request a Tour</Button>
                            </form>
                        </div>
                        <div className="border-t md:border-t-0 md:border-l border-border/50 pt-8 md:pt-0 md:pl-8">
                             <h3 className="font-headline text-2xl font-semibold mb-4">Contact Us</h3>
                             <div className="space-y-3 text-muted-foreground">
                                <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> hello@pmcoffee.com</p>
                                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +62 123 4567 890</p>
                                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> Jl. Produktif No. 123, Jakarta</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
              </Card>
          </div>
      </section>
    </div>
  );
}
