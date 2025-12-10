import { DollarSign, Pin } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ListingFavoriteButton from '@/components/ListingFavoriteButton';
import ListingRatingStars from '@/components/ListingRatingStars';
import { Card, CardContent, Separator } from '@/components/ui';
import UserAvatar from '@/components/UserAvatar';
import { getImageUrl } from '@/lib/utils/images';

const ListingCard = ({ listing }) => {
  const { users } = useSelector((state) => state.users);
  const listingUser = users[listing.userId];

  return (
    <Link to={`/listings/${listing.id}`} className='w-full'>
      <Card className='w-full overflow-hidden transition hover:shadow-lg'>
        {/* ✅ Image */}
        <div className='relative'>
          <img
            className='h-[180px] w-full object-cover sm:h-[200px]'
            src={getImageUrl(listing.images[0])}
            alt={listing.name}
          />

          <ListingFavoriteButton
            className='absolute right-3 top-3'
            listing={listing}
          />

          <ListingRatingStars
            className='absolute bottom-3 left-3'
            listing={listing}
          />
        </div>

        {/* ✅ Content */}
        <CardContent className='p-4'>
          <h2 className='mb-2 line-clamp-1 text-base font-semibold sm:text-lg'>
            {listing.name}
          </h2>

          <div className='mb-2 flex items-center gap-2 text-sm'>
            <Pin className='h-4 w-4 text-primary' />
            <span className='line-clamp-1 text-muted-foreground'>
              {listing.location.name}
            </span>
          </div>

          <div className='flex items-center gap-2 text-sm'>
            <DollarSign className='h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>
              <span className='font-bold text-foreground'>{listing.price}</span>{' '}
              / night
            </span>
          </div>

          {listingUser && (
            <>
              <Separator className='my-3' />
              <UserAvatar user={listingUser} />
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;
