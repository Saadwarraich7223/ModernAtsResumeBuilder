import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUIStore = create(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setDarkMode: (val) => set({ isDarkMode: val }),
    }),
    {
      name: 'ui-storage',
    }
  )
);

export default useUIStore;
