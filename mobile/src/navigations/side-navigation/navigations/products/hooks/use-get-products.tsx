import {useInfiniteQuery} from '@tanstack/react-query';


const getProducts = async ({pageParam}:{pageParam:number}) => {
    return {
        pageParam
    }
}


export const useGetProducts = () => {
  
    const query = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    queryFn: getProducts,
    initialPageParam:0,
    getNextPageParam:(lastPage,pages)=> pages.length
  });

  return query;
};
