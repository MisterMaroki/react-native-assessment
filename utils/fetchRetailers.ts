import { Retailer } from '../types/Retailer';

const fetchRetailers = async (): Promise<Retailer[]> => {
  try {
    return await (await fetch('http://localhost:3000/api/retailers')).json();
  } catch (err) {
    throw new Error(err);
  }
};

export default fetchRetailers;
