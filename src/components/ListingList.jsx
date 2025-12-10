import ListingCard from '@/components/ListingCard';

const ListingList = ({ listings }) => {
  return (
    <div
      className='
        grid grid-cols-1 gap-4
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      '
      data-testid='listing-list'
    >
      {listings?.length > 0 ? (
        listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))
      ) : (
        <p className='col-span-full text-center text-muted-foreground'>
          No listings found.
        </p>
      )}
    </div>
  );
};

export default ListingList;
