import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import { getImageUrl } from '@/lib/utils/images';

const ListingDetailsCardImages = ({ listing }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <img
        className='mb-4 max-h-[300px] w-full rounded-md object-cover sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px]'
        src={getImageUrl(listing.images[currentImageIndex])}
        alt={listing.name}
      />
      <Carousel className='mx-auto mb-4 w-full sm:w-[90%]'>
        <CarouselContent>
          {listing.images.map((image, index) => (
            <CarouselItem
              key={image}
              className='basis-1/3 cursor-pointer'
              onClick={() => setCurrentImageIndex(index)}
              isSelected={index === currentImageIndex}
            >
              <img
                className='h-24 w-full rounded-md object-cover shadow-sm sm:h-32 md:h-40'
                src={getImageUrl(image)}
                alt={listing.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default ListingDetailsCardImages;
