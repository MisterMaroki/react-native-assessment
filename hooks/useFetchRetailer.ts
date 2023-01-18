import { useQuery } from 'react-query';
import fetchRetailer from '../utils/fetchRetailer';

const useFetchRetailer = (id: number) => {
  return useQuery('retailerData', () => fetchRetailer(id));
};

export default useFetchRetailer;
