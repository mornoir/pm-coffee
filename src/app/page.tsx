'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { placeHolderImages } from '@/lib/placeholder-images';
import { menuItems } from '@/lib/menu-data';
import { ArrowRight, Wifi, Users, Coffee, MapPin, Phone, Mail, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/fade-in';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const highlights = [
  {
    icon: <Wifi className="h-8 w-8 text-primary" />,
    title: 'Fluid Connectivity',
    description: 'Enjoy uninterrupted, high-speed Wi-Fi designed for a seamless workflow.',
  },
  {
    icon: <Coffee className="h-8 w-8 text-primary" />,
    title: 'Gourmet Coffee',
    description: 'Savor artisanal brews, expertly crafted to elevate your focus and delight your senses.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Vibrant Community',
    description: 'Connect with a curated network of innovators, creators, and professionals.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Exclusive Spaces',
    description: 'Reserve private, sound-proofed rooms for your most important meetings and calls.',
  }
];

export default function Home() {
  const heroImage = placeHolderImages.find((img) => img.id === 'hero');
  const aboutImage1 = placeHolderImages.find((img) => img.id === 'about1');
  const aboutImage2 = placeHolderImages.find((img) => img.id === 'about2');
  const aboutImage3 = placeHolderImages.find((img) => img.id === 'about3');
  const ctaImage = placeHolderImages.find((img) => img.id === 'cta');
  const productImages = placeHolderImages.filter(img => img.id.startsWith('product'));
  
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const onDotButtonClick = useCallback((index: number) => {
    if (!api) {
      return
    }
    api.scrollTo(index)
  }, [api]);


  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    const onSelect = () => {
      setCanScrollNext(api.canScrollNext())
      setCurrent(api.selectedScrollSnap() + 1)
    }

    onSelect();
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])


  return (
    <div className="flex flex-col text-foreground overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] md:h-screen w-full bg-background">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="container relative mx-auto h-full px-4 flex flex-col justify-end pb-24 md:pb-32">
          <FadeIn className="max-w-2xl text-white">
             <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter">
                Space for Ideas.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-lg">
                A thoughtfully designed co-working space where productivity and comfort converge. Find your focus, fuel your creativity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About Section 1 */}
      <section id="about" className="py-24 md:py-40 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                <FadeIn className="md:order-2">
                    <p className="text-primary font-semibold mb-4 text-sm tracking-widest uppercase">Workspace Redefined</p>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Designed for Flow, Built for Community.
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                       PM Coffee is more than just a place to work. It’s an environment crafted to eliminate distractions and foster connection. Every detail, from the acoustics to the aroma of freshly brewed coffee, is considered to help you achieve your best work.
                    </p>
                    <Button asChild variant="link" className="p-0 text-base text-primary hover:text-primary/80">
                        <Link href="/discover">
                            Explore Our Space <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </FadeIn>
                {aboutImage1 && (
                     <FadeIn className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl md:order-1">
                        <Image
                            src={aboutImage1.imageUrl}
                            alt={aboutImage1.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            data-ai-hint={aboutImage1.imageHint}
                        />
                    </FadeIn>
                )}
            </div>
        </div>
      </section>
      
      {/* Product Showcase */}
       <section id="products" className="py-24 md:py-40 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-semibold mb-4 text-sm tracking-widest uppercase">Our Menu</p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                Fuel Your Day
              </h2>
          </FadeIn>
          
          <FadeIn className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {productImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                     <Link href="/menu">
                      <div className="group">
                          <div className="relative aspect-square rounded-lg overflow-hidden bg-background mb-4 shadow-lg">
                              <Image
                                  src={image.imageUrl}
                                  alt={image.description}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  sizes="(max-width: 768px) 50vw, 25vw"
                                  data-ai-hint={image.imageHint}
                              />
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <h3 className="font-semibold text-lg">{image.description}</h3>
                            <p className="text-sm text-muted-foreground">{menuItems.find(m => m.id === `menu-${image.description.toLowerCase().replace(/\s+/g, '')}`)?.price}</p>
                          </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </FadeIn>
          
          <FadeIn className="text-center mt-16">
              <div className="flex gap-2 justify-center mb-8">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={cn(
                      'h-2 w-2 rounded-full transition-colors',
                      current - 1 === index ? 'bg-primary' : 'bg-primary/20'
                    )}
                    />
                ))}
              </div>

            <Button asChild variant={!canScrollNext ? 'default' : 'outline'} className="transition-colors">
              <Link href="/menu">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="bg-background text-foreground py-24 md:py-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {aboutImage2 && (
              <FadeIn className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                    src={aboutImage2.imageUrl}
                    alt={aboutImage2.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={aboutImage2.imageHint}
                />
              </FadeIn>
            )}
            <div>
              <FadeIn>
                <p className="text-primary font-semibold mb-4 text-sm tracking-widest uppercase">WHY CHOOSE US</p>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-12">Elevate Your Workday</h2>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                {highlights.map((item, index) => (
                  <FadeIn key={item.title} animationDelay={index * 0.1}>
                    {item.icon}
                    <h3 className="font-semibold text-xl mt-6 mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-base">{item.description}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section 2 */}
      <section className="py-24 md:py-40 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                <FadeIn>
                    <p className="text-primary font-semibold mb-4 text-sm tracking-widest uppercase">A Space That Adapts to You</p>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        From Solo Focus to Team Synergy.
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                       Our versatile layout includes quiet zones for deep work, collaborative tables for team projects, and private rooms for important meetings. Whatever your workday demands, you'll find the perfect spot at PM Coffee.
                    </p>
                    <Button asChild variant="link" className="p-0 text-base text-primary hover:text-primary/80">
                        <Link href="#booking">
                            Book Your Spot <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </FadeIn>
                {aboutImage3 && (
                     <FadeIn className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src={aboutImage3.imageUrl}
                            alt={aboutImage3.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            data-ai-hint={aboutImage3.imageHint}
                        />
                    </FadeIn>
                )}
            </div>
        </div>
      </section>

      {/* Booking / Contact Form */}
      <section id="booking" className="py-24 md:py-40 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
              <FadeIn className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 text-sm tracking-widest uppercase">Join Us</p>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Join the Movement</h2>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Reserve your place in a community driven by passion and purpose.
                </p>
              </FadeIn>

              <FadeIn>
                <Card className="border-border/50 bg-secondary/30 shadow-2xl">
                  <CardContent className="p-8 md:p-12">
                      <div className="grid md:grid-cols-2 gap-10">
                          <div>
                              <h3 className="font-headline text-3xl font-semibold mb-4">Book a Tour</h3>
                              <p className="text-muted-foreground mb-8">Experience the space firsthand. We'll show you around and treat you to a coffee on the house.</p>
                              <form className="space-y-4">
                                  <input type="email" placeholder="Enter your email" className="w-full bg-background border-border/50 rounded-md p-3 text-sm" />
                                  <Button type="submit" size="lg" className="w-full">Request a Tour</Button>
                              </form>
                          </div>
                          <div className="border-t md:border-t-0 md:border-l border-border/50 pt-10 md:pt-0 md:pl-10">
                              <h3 className="font-headline text-3xl font-semibold mb-4">Contact Us</h3>
                              <div className="space-y-4 text-muted-foreground">
                                  <p className="flex items-center gap-4"><Mail className="h-5 w-5 text-primary" /> hello@pmcoffee.com</p>
                                  <p className="flex items-center gap-4"><Phone className="h-5 w-5 text-primary" /> +62 123 4567 890</p>
                                  <p className="flex items-center gap-4"><MapPin className="h-5 w-5 text-primary" /> Jl. Produktif No. 123, Jakarta</p>
                              </div>
                          </div>
                      </div>
                  </CardContent>
                </Card>
              </FadeIn>
          </div>
      </section>
    </div>
  );

    
    
    