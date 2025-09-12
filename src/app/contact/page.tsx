import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone, Twitter, Instagram, Facebook } from 'lucide-react';

const contactDetails = [
  { icon: <MapPin className="h-5 w-5 text-accent" />, text: "Jl. Produktif No. 123, Jakarta, Indonesia" },
  { icon: <Phone className="h-5 w-5 text-accent" />, text: "+62 123 4567 890 (WhatsApp available)" },
  { icon: <Mail className="h-5 w-5 text-accent" />, text: "hello@kababaikhub.com" },
];

const openingHours = [
  { day: "Monday - Friday", hours: "08:00 AM - 10:00 PM" },
  { day: "Saturday", hours: "09:00 AM - 11:00 PM" },
  { day: "Sunday", hours: "09:00 AM - 09:00 PM" },
];

const socialLinks = [
  { href: '#', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
  { href: '#', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
  { href: '#', icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
];

export default function ContactPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Get In Touch</h1>
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
                    <Clock className="h-5 w-5 text-accent"/>
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
              title="Kabar Baik Hub Location"
              className="grayscale-[30%]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
