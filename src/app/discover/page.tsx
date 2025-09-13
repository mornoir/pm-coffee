import { placeHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function DiscoverPage() {
  const galleryImages = placeHolderImages.filter(img => img.id.startsWith('gallery'));

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
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">Discover Our Space</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore the vibrant atmosphere and cozy corners of PM Coffee. A place where productivity meets comfort, and community thrives.
          </p>
        </header>
        
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((image) => (
              image && (
                <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
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
    </div>
  );
}
