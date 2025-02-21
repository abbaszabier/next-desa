import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface SettingsState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        setIsOpen: (isOpen) => set({ isOpen }),
      }),
      {
        name: "settings-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
