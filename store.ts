import { create } from 'zustand';

interface ScreenState {
  selectedRetailer: string;
  setSelectedRetailer: (retailer: string) => void;
}

const useRetailerStore = create<ScreenState>()(set => ({
  selectedRetailer: '',
  setSelectedRetailer: retailer => set({ selectedRetailer: retailer }),
}));

export default useRetailerStore;
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { create } from 'zustand';
// import { devtools, persist } from 'zustand/middleware';

// interface ScreenState {
//   selectedRetailer: string;
//   setSelectedRetailer: (retailer: string) => void;
// }

// const useRetailerStore = create<ScreenState>()(
//   devtools(
//     persist(
//       set => ({
//         selectedRetailer: '',
//         setSelectedRetailer: retailer => set({ selectedRetailer: retailer }),
//       }),
//       {
//         name: 'retailer-storage',
//         getStorage: () => AsyncStorage,
//       },
//     ),
//   ),
// );

// export default useRetailerStore;
