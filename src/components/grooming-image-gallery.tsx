"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ImagePlaceholder } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface GroomingImageGalleryProps {
  images: ImagePlaceholder[];
}

export const GroomingImageGallery: React.FC<GroomingImageGalleryProps> = ({
  images,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newSelectedIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newSelectedIndex);
    setMainImage(images[newSelectedIndex]);
  }, [emblaApi, images]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="relative aspect-video w-full group">
        <div className="bg-gradient-to-tr from-primary/20 to-secondary/20 p-2 rounded-3xl shadow-lg h-full w-full">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            {mainImage && (
              <Image
                key={mainImage.id}
                src={mainImage.imageUrl}
                alt={mainImage.description}
                data-ai-hint={mainImage.imageHint}
                fill
                className="object-cover animate-fade-in transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            )}
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 -ml-4 pl-4">
            {images.map((image, index) => (
              <div
                key={image.id + index}
                className="flex-shrink-0 flex-grow-0 basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <button
                  onClick={() => onThumbClick(index)}
                  className={cn(
                    "block aspect-square w-full overflow-hidden rounded-lg border-2 transition-all duration-200",
                    index === selectedIndex
                      ? "border-primary scale-105"
                      : "border-transparent hover:border-primary/50"
                  )}
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full z-10 hidden md:flex"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full z-10 hidden md:flex"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
