

'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { placeHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Utensils, Wifi, Users, Star, Clock, Mail, MapPin, Phone, Twitter, Instagram, Facebook, CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useState }
from 'react';
import { useToast } from '@/hooks/use-toast';


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

const menuItems = [
    {
        id: "menu1",
        category: "Coffee",
        name: "Signature Latte",
        description: "A perfect blend of rich espresso and steamed milk, topped with delicate latte art.",
        price: "Rp 35.000",
        tags: ['coffee'],
    },
    {
        id: "menu2",
        category: "Pastry",
        name: "Butter Croissant",
        description: "Flaky, buttery, and freshly baked throughout the day. An ideal companion for your coffee.",
        price: "Rp 25.000",
        tags: ['snack & dessert'],
    },
    {
        id: "menu3",
        category: "Main Course",
        name: "Chicken Katsu Curry",
        description: "Crispy chicken katsu served with a savory Japanese curry sauce and warm rice.",
        price: "Rp 65.000",
        tags: ['eatery'],
    },
    {
        id: "menu4",
        category: "Package",
        name: "Workspace Package",
        description: "Includes one coffee of your choice, a pastry, and a guaranteed seat with power access for 4 hours.",
        price: "Rp 100.000",
        isSpecial: true,
        tags: ['coffee', 'snack & dessert'],
    },
     {
        id: "menu-americano",
        imageUrl: "https://picsum.photos/seed/americano/600/400",
        imageHint: "black coffee",
        category: "Coffee",
        name: "Americano",
        description: "Rich espresso shots diluted with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.",
        price: "Rp 30.000",
        tags: ['coffee'],
    },
    {
        id: "menu-avotoast",
        imageUrl: "https://picsum.photos/seed/avotoast/600/400",
        imageHint: "avocado toast",
        category: "Light Bites",
        name: "Avocado Toast",
        description: "Smashed avocado on sourdough toast, topped with chili flakes and a sprinkle of sea salt.",
        price: "Rp 55.000",
        tags: ['eatery'],
    },
    {
        id: "menu-matcha",
        imageUrl: "https://picsum.photos/seed/matcha/600/400",
        imageHint: "matcha latte",
        category: "Non-Coffee",
        name: "Matcha Latte",
        description: "A smooth and creamy matcha latte, made with premium Japanese green tea.",
        price: "Rp 40.000",
        tags: ['non-coffee'],
    },
    {
        id: "menu-brownie",
        imageUrl: "https://picsum.photos/seed/brownie/600/400",
        imageHint: "chocolate brownie",
        category: "Dessert",
        name: "Fudgy Chocolate Brownie",
        description: "A rich and decadent chocolate brownie, served warm with a scoop of vanilla ice cream.",
        price: "Rp 45.000",
        tags: ['snack & dessert'],
    },
];

const galleryImageIds = [
  'gallery1', 'gallery2', 'gallery3', 'gallery4', 
  'gallery5', 'gallery6', 'gallery7', 'gallery8',
  'social1', 'social2', 'social4', 'social6'
];

const contactDetails = [
  { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Jl. Produktif No. 123, Jakarta, Indonesia" },
  { icon: <Phone className="h-5 w-5 text-primary" />, text: "+62 123 4567 890 (WhatsApp available)" },
  { icon: <Mail className="h-5 w-5 text-primary" />, text: "hello@cofee.com" },
];

const openingHours = [
  { day: "Monday - Friday", hours: "08:00 AM - 10:00 PM" },
  { day: "Saturday", hours: "09:00 AM - 11:00 PM" },
  { day: "Sunday", hours: "09:00 PM - 09:00 PM" },
];

const socialLinks = [
  { href: '#', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
  { href: '#', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
  { href: '#', icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
];

const seatBookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  date: z.date({ required_error: 'A date is required.' }),
  time: z.string({ required_error: 'A time slot is required.' }),
  guests: z.coerce.number().min(1, 'At least 1 guest is required.'),
});

const roomBookingSchema = seatBookingSchema.extend({
    notes: z.string().optional(),
});

type SeatBookingFormValues = z.infer<typeof seatBookingSchema>;
type RoomBookingFormValues = z.infer<typeof roomBookingSchema>;

function BookingForm({ schema, isRoomBooking = false }: { schema: typeof seatBookingSchema | typeof roomBookingSchema, isRoomBooking?: boolean }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      guests: 1,
    },
  });

  async function onSubmit(data: z.infer<typeof schema>) {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    toast({
      title: "Booking Confirmed!",
      description: `Thank you, ${data.name}. Your booking for ${data.guests} on ${format(data.date, "PPP")} at ${data.time} is confirmed.`,
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-end">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-full justify-start pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time Slot</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => `${i + 9}:00`).map(time => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of People</FormLabel>
                <FormControl>
                  <Input type="number" min="1" max={isRoomBooking ? "10" : "4"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {isRoomBooking && (
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Special Notes</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Projector needed" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
          />
        )}
        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? 'Booking...' : 'Confirm Booking'}
        </Button>
      </form>
    </Form>
  );
}

export default function Home() {
  const heroImage = placeHolderImages.find((img) => img.id === 'hero');
  const aboutBaristaImage = placeHolderImages.find(img => img.id === 'gallery4');

  const galleryImages = galleryImageIds.map(id => placeHolderImages.find(img => img.id === id)).filter(Boolean);

  const [activeTag, setActiveTag] = useState('recommend');
  const menuTags = ['recommend', 'coffee', 'non-coffee', 'eatery', 'snack & dessert'];
  const filteredMenuItems = menuItems.filter(item => {
    if (activeTag === 'recommend') return item.isSpecial;
    if (activeTag === 'all') return true;
    return item.tags.includes(activeTag);
  });


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative h-[70vh] md:h-[90vh] w-full">
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
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground p-4">
          <div className="flex flex-col items-center">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Experience the Perfect Brew
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-foreground/80">
              Crafting flavors, handcrafted coffee. Delivered to you. Indulge in the richest coffee experience that transcends your taste.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#booking">Book a Seat</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Discover Our Impact</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Crafted with Care and Passion</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Card key={item.title} className="text-center shadow-lg bg-background">
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

      {/* About Section */}
      <section id="about" className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
               {aboutBaristaImage && (
                  <Image
                      src={aboutBaristaImage.imageUrl}
                      alt={aboutBaristaImage.description}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={aboutBaristaImage.imageHint}
                  />
               )}
            </div>
            <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Story</p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter !mt-0">About Cofee</h2>
              <p className="mt-4 text-muted-foreground">
                Cofee is more than just a coffee shop. It's a community hub born from a simple idea: to create a welcoming space where productivity and connection flow as freely as our ethically-sourced local coffee. Join us to work, relax, and share good news.
              </p>
               <Button asChild size="lg" variant="outline" className="mt-4">
                <Link href="#contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

       {/* Testimonial */}
       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
           <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_,i) => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
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

      {/* Menu Section */}
      <section id="menu" className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
            <header className="text-center mb-12 md:mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Menu</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Crafted with care, from our coffee to our kitchen.
                </p>
            </header>
            
            <div className="flex justify-center flex-wrap gap-2 mb-12">
                {menuTags.map(tag => (
                    <Button
                        key={tag}
                        variant={activeTag === tag ? 'default' : 'outline'}
                        onClick={() => setActiveTag(tag)}
                        className="capitalize transition-all duration-300"
                    >
                        {tag}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {filteredMenuItems.map(item => {
                    const imageData = placeHolderImages.find(p => p.id === item.id);
                    const imageUrl = imageData?.imageUrl || item.imageUrl;
                    const imageHint = imageData?.imageHint || item.imageHint;
                    
                    return (
                        <div key={item.name} className="flex items-center gap-4 group transition-opacity duration-300">
                           {imageUrl && (
                                <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                                    <Image
                                        src={imageUrl}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        sizes="80px"
                                        data-ai-hint={imageHint}
                                    />
                                     {item.isSpecial && <Badge className="absolute top-1 right-1 text-xs px-1.5 py-0.5">Special</Badge>}
                                </div>
                            )}
                            <div className="flex-grow">
                                <h3 className="font-headline text-lg font-semibold">{item.name}</h3>
                                <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                            </div>
                            <div className="flex-shrink-0">
                                <p className="font-semibold text-lg text-primary">{item.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Book Your Space</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Reserve your spot to work, meet, or collaborate.
            </p>
          </header>

          <Tabs defaultValue="seat" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="seat">Book a Seat</TabsTrigger>
              <TabsTrigger value="room">Reserve a Private Room</TabsTrigger>
            </TabsList>
            <TabsContent value="seat">
              <Card className="max-w-4xl mx-auto mt-8 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline">Co-working Seat Reservation</CardTitle>
                  <CardDescription>Book a comfortable seat in our general co-working area. Perfect for individuals or small groups.</CardDescription>
                </CardHeader>
                <CardContent>
                  <BookingForm schema={seatBookingSchema} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="room">
               <Card className="max-w-4xl mx-auto mt-8 shadow-lg">
                  <CardHeader>
                      <CardTitle className="font-headline">Private Meeting Room</CardTitle>
                      <CardDescription>Ideal for team meetings, presentations, or private calls. Amenities include high-speed Wi-Fi, a whiteboard, and a projector upon request.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <BookingForm schema={roomBookingSchema} isRoomBooking={true} />
                  </CardContent>
               </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Gallery</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A glimpse into the life and energy of Cofee.
            </p>
          </header>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((image) => (
              image && (
                <div key={image.id} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md-mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Get In Touch</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We're here to help. Whether you have a question about booking, our menu, or just want to say hello.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {contactDetails.map((detail, index) => (
                    <div key={index} className="flex items-start gap-4">
                      {detail.icon}
                      <span className="text-foreground">{detail.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-6">
                   <h3 className="font-headline flex items-center gap-2 mb-4 text-lg font-semibold">
                      <Clock className="h-5 w-5 text-primary"/>
                      Opening Hours
                  </h3>
                   <div className="space-y-2">
                      {openingHours.map(item => (
                          <div key={item.day} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{item.day}</span>
                              <span className="font-medium text-foreground">{item.hours}</span>
                          </div>
                      ))}
                   </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-headline font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-2">
                   {socialLinks.map(social => (
                     <Button key={social.label} asChild variant="outline" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                       <a href={social.href} aria-label={social.label}>{social.icon}</a>
                     </Button>
                   ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="h-80 md:h-[500px] lg:h-full w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322333!2d106.81961131476885!3d-6.194741395514655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f427f7a763d7%3A0x2c6f6f9e31464f1d!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1622533276527!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Cofee Location"
                className="grayscale-[30%]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
