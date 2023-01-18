import fetchRetailers from '../utils/fetchRetailers';
import { useQuery } from 'react-query';

const useFetchRetailers = () => {
  return useQuery('retailersData', fetchRetailers);
};

export default useFetchRetailers;
