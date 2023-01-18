import { Retailer } from '../types/Retailer';

const fetchRetailer = async (id: number): Promise<Retailer> => {
  try {
    return await (
      await fetch(`http://localhost:3000/api/retailer/${id}`)
    ).json();
  } catch (err) {
    throw new Error(err);
  }
};

export default fetchRetailer;
