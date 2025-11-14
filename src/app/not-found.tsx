import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/page-shell';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function NotFound() {
  const image404 = PlaceHolderImages.find(p => p.id === '404-pet');

  return (
    <PageShell className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
      {image404 && (
        <Image
          src={image404.imageUrl}
          alt={image404.description}
          data-ai-hint={image404.imageHint}
          width={200}
          height={200}
          className="rounded-full mb-8 animate-float"
        />
      )}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Oops! This Page Went to the Park</h1>
      <p className="mt-4 text-lg text-foreground/70 max-w-md">
        We couldn't find what you're looking for. Maybe it's chasing squirrels? Let's get you back on track.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/products">Browse Products</Link>
        </Button>
         <Button asChild variant="secondary" size="lg">
          <Link href="/contact">Call Us</Link>
        </Button>
      </div>
    </PageShell>
  );
}
