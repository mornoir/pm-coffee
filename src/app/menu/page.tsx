import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { placeHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const menuItems = [
    {
        id: "menu1",
        category: "Coffee",
        name: "Signature Latte",
        description: "A perfect blend of rich espresso and steamed milk, topped with delicate latte art.",
        price: "Rp 35.000",
    },
    {
        id: "menu2",
        category: "Pastry",
        name: "Butter Croissant",
        description: "Flaky, buttery, and freshly baked throughout the day. An ideal companion for your coffee.",
        price: "Rp 25.000",
    },
    {
        id: "menu3",
        category: "Main Course",
        name: "Chicken Katsu Curry",
        description: "Crispy chicken katsu served with a savory Japanese curry sauce and warm rice.",
        price: "Rp 65.000",
    },
    {
        id: "menu4",
        category: "Package",
        name: "Workspace Package",
        description: "Includes one coffee of your choice, a pastry, and a guaranteed seat with power access for 4 hours.",
        price: "Rp 100.000",
        isSpecial: true,
    },
     {
        id: "menu-americano",
        imageUrl: "https://picsum.photos/seed/americano/600/400",
        imageHint: "black coffee",
        category: "Coffee",
        name: "Americano",
        description: "Rich espresso shots diluted with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.",
        price: "Rp 30.000",
    },
    {
        id: "menu-avotoast",
        imageUrl: "https://picsum.photos/seed/avotoast/600/400",
        imageHint: "avocado toast",
        category: "Light Bites",
        name: "Avocado Toast",
        description: "Smashed avocado on sourdough toast, topped with chili flakes and a sprinkle of sea salt.",
        price: "Rp 55.000",
    },
];

export default function MenuPage() {
    return (
        <div className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4">
                <header className="text-center mb-12 md:mb-16">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Menu</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Crafted with care, from our coffee to our kitchen.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map(item => {
                        const imageData = placeHolderImages.find(p => p.id === item.id);
                        const imageUrl = imageData?.imageUrl || item.imageUrl;
                        const imageHint = imageData?.imageHint || item.imageHint;
                        
                        return (
                            <Card key={item.name} className="flex flex-col overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="relative h-56 w-full">
                                    {imageUrl && (
                                        <Image
                                            src={imageUrl}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            data-ai-hint={imageHint}
                                        />
                                    )}
                                    {item.isSpecial && <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">Special Offer</Badge>}
                                </div>
                                <CardHeader>
                                    <CardTitle className="font-headline">{item.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <p className="font-semibold text-primary">{item.price}</p>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
