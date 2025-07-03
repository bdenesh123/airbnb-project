import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from '@/api';

const useDeleteListingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => api.delete(`/api/listings/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listings'] });
    },
  });
};

export default useDeleteListingMutation;
