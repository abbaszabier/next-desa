import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface SettingsState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  installed: boolean;
  setInstalled: (installed: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        setIsOpen: (isOpen) => set({ isOpen }),
        installed: false,
        setInstalled: (installed) => set({ installed }),
      }),
      {
        name: "settings-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
