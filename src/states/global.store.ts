import { createStore } from "zustand/vanilla";

type GlobalStore = {
  address: string;
  setAddress: (address: string) => void;
};

const useGlobalStore = createStore<GlobalStore>((set) => ({
  address: "test address",
  setAddress: (address: string) => set({ address }),
}));

export default useGlobalStore;
