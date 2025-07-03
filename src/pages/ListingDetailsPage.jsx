import { useParams } from 'react-router-dom';

import DataRenderer from '@/components/DataRenderer';
import ListingDetailsCard from '@/components/ListingDetailsCard';
import ReviewList from '@/components/ReviewList';
import { Button } from '@/components/ui';
import useDeleteListingMutation from '@/hooks/mutations/useDeleteListingMutation';
import useListingDetailsQuery from '@/hooks/queries/useListingDetailsQuery';
import useListingReviewsQuery from '@/hooks/queries/useListingReviewsQuery';

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const deleteListingMutation = useDeleteListingMutation();

  const {
    data: { data: listing } = {},
    error,
    isLoading,
  } = useListingDetailsQuery(listingId);

  const {
    data: { data: reviews } = {},
    error: reviewsError,
    isLoading: isReviewsLoading,
  } = useListingReviewsQuery(listingId);

  return (
    <div className='container py-4'>
      <div className='mb-8'>
        <DataRenderer error={error} isLoading={isLoading}>
          <ListingDetailsCard listing={listing} />
        </DataRenderer>
      </div>
      {listing && (
        <div>
          <DataRenderer error={reviewsError} isLoading={isReviewsLoading}>
            <h2 className='mb-4'>Reviews</h2>
            <ReviewList reviews={reviews} />
          </DataRenderer>
        </div>
      )}

      {/* <Button
        variant='destructive'
        onClick={() => {
          deleteListingMutation.mutate(Number(listingId));
        }}
      >
        Delete Listing
      </Button> */}
    </div>
  );
};

export default ListingDetailsPage;
