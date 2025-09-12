import { placeHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function AboutPage() {
  const baristaImage = placeHolderImages.find(img => img.id === 'gallery4');
  const interiorImage = placeHolderImages.find(img => img.id === 'gallery6');

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Our Story</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We believe in the power of a great cup of coffee and an inspiring space.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
             {baristaImage && (
                <Image
                    src={baristaImage.imageUrl}
                    alt={baristaImage.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={baristaImage.imageHint}
                />
             )}
          </div>
          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary">
            <h2 className="font-headline text-3xl font-semibold">From a Simple Idea</h2>
            <p className="text-muted-foreground">
              Kabar Baik—meaning "Good News" in Indonesian—started with a simple vision: to create a neighborhood hub where productivity flows as freely as the coffee. We saw the need for a place that was more than just a café and more than just an office. It needed to be a third place, a comfortable, welcoming environment for freelancers, students, remote workers, and friends to gather, work, and connect.
            </p>
            <p className="text-muted-foreground">
              Our founders, a passionate barista and a seasoned entrepreneur, combined their expertise to build a space that values both the art of coffee and the science of a productive workday.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
           <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary md:order-2">
            <h2 className="font-headline text-3xl font-semibold">Craft, Comfort, Community</h2>
            <p className="text-muted-foreground">
              Every detail at Kabar Baik Hub is intentional. Our coffee beans are ethically sourced from local Indonesian farmers and roasted to perfection. Our menu is designed to provide nourishing and delicious fuel for your day. Our seating arrangements, from quiet individual nooks to collaborative tables and private rooms, are built to accommodate any work style.
            </p>
            <p className="text-muted-foreground">
              But beyond the tangible, our true mission is to foster community. We host workshops, networking events, and casual meetups to bring people together. Kabar Baik is a place to share good news, spark new ideas, and build lasting connections. We're so glad to have you here.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl md:order-1">
            {interiorImage && (
                <Image
                    src={interiorImage.imageUrl}
                    alt={interiorImage.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={interiorImage.imageHint}
                />
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
