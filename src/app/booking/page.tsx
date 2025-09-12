'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { OptimizerForm } from './optimizer-form';


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
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
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
        <Button type="submit" className="w-full sm:w-auto bg-accent hover:bg-accent/90" disabled={isSubmitting}>
          {isSubmitting ? 'Booking...' : 'Confirm Booking'}
        </Button>
      </form>
    </Form>
  );
}


export default function BookingPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Book Your Space</h1>
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
             <div className="max-w-4xl mx-auto mt-16">
                <div className="text-center mb-8">
                    <h2 className="font-headline text-2xl md:text-3xl font-bold">Optimize Room Schedule (Admin Tool)</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                        Use our AI-powered tool to analyze usage data and generate an optimized schedule for room utilization and cleaning.
                    </p>
                </div>
                <OptimizerForm />
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
