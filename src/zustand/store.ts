// src/zustand/store.js
import { create } from "zustand";

interface LocaleState {
	locale: string;
	setLocale: (newLocale: string) => void;
}

const useStore = create<LocaleState>((set) => ({
	locale: "zh-cn",
	setLocale: (newLocale: string) => set((state) => ({ ...state, locale: newLocale })),
}));

export default useStore;
