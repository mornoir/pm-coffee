import { placeHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const galleryImageIds = [
  'gallery1', 'gallery2', 'gallery3', 'gallery4', 
  'gallery5', 'gallery6', 'gallery7', 'gallery8',
  'social1', 'social2', 'social4', 'social6'
];

export default function GalleryPage() {
  const images = galleryImageIds.map(id => placeHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Gallery</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the life and energy of Kabar Baik Hub.
          </p>
        </header>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            image && (
              <div key={image.id + index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
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
