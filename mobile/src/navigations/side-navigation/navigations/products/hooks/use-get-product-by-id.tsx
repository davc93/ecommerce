import {useQuery} from '@tanstack/react-query';
export const useGetProductById = (id: string) => {
  const query = useQuery({
    queryKey: ['product', id],
    queryFn: () => ({}),
  });

  return query;
};
