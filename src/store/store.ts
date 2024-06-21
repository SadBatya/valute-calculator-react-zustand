import create from 'zustand'



interface StoreState {
  usd: string;
  eur: string;
  setUsd: (usd: string) => void;
  setEur: (eur: string) => void;
}


const useStore = create<StoreState>((set) => ({
  usd: '',
  eur: '',
  setUsd: (usd) => set(() => {
    const eur = usd ? (parseFloat(usd) / 1.07).toFixed(2) : '';
    return { usd, eur }
  }),
  setEur: (eur) => set(() => {
    const usd = eur ? (parseFloat(eur) * 1.07).toFixed(2) : '';
    return { usd, eur }
  }),
}))


export default useStore