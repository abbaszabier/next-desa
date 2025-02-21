"use client";

import { useSettingsStore } from "@/store/settings";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallPrompt = () => {
  const { installed, setInstalled } = useSettingsStore((state) => state);
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showModal, setShowModal] = useState(!installed);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      console.log("beforeinstallprompt event triggered");
      setInstallPrompt(e);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) {
      console.warn("Install prompt tidak tersedia");
      return;
    }

    installPrompt.prompt();

    const choiceResult = await installPrompt.userChoice;
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the install prompt");
      setInstalled(true);
      setShowModal(false);
      setInstallPrompt(null);
    } else {
      console.log("User dismissed the install prompt");
      setShowModal(false);
    }
  };

  if (!showModal) return null;

  return (
    !installed &&
    installPrompt !== null && (
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="flex flex-col items-center max-w-md">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <Image
              width={40}
              height={40}
              alt="Desa Apps"
              className="w-12 h-12 mx-auto"
              src="/images/icons/icon-96x96.png"
            />
            <h2 className="text-black text-lg font-semibold mt-2">
              Install Desa Tapos I
            </h2>
            <p className="text-black text-center text-sm mb-4">
              Aplikasi ini dapat diinstal untuk pengalaman yang lebih baik!
            </p>
          </div>
          <div className="flex gap-2 w-full">
            <button
              aria-label="install"
              aria-labelledby="install"
              onClick={handleInstall}
              disabled={!installPrompt}
              className="w-full px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-600 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer"
            >
              {installPrompt ? "Install Sekarang" : "Tidak tersedia"}
            </button>
            <button
              aria-label="tutup"
              aria-labelledby="tutup"
              onClick={() => setShowModal(false)}
              className="w-full px-4 py-2 rounded-md border border-neutral-300 bg-[#F13B2F] text-background
          text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer"
            >
              Nanti dulu
            </button>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
};

export default InstallPrompt;
