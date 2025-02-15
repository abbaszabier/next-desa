import { Timer } from "lucide-react";
import React from "react";

export default function JadwalKerja() {
  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 p-4 rounded-lg justify-between items-center mb-2 dark:bg-gray-900 dark:ring-gray-100">
        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          <Timer /> Jadwal Kerja
        </h2>
      </div>
      <div className="bg-white dark:bg-black border w-full rounded-lg p-4 space-y-8">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200">
              Senin:
            </h4>
            <p className="font-normal text-neutral-500 text-md">
              08.00 - 16.00
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200">
              Selasa:
            </h4>
            <p className="font-normal text-neutral-500 text-md">
              08.00 - 16.00
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200">
              Rabu:
            </h4>
            <p className="font-normal text-neutral-500 text-md">
              08.00 - 16.00
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200">
              Kamis:
            </h4>
            <p className="font-normal text-neutral-500 text-md">
              08.00 - 16.00
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200">
              Jumat:
            </h4>
            <p className="font-normal text-neutral-500 text-md">
              08.00 - 16.00
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200">
              Sabtu:
            </h4>
            <p className="font-normal text-neutral-500 text-md">Libur</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200">
              Minggu:
            </h4>
            <p className="font-normal text-neutral-500 text-md">Libur</p>
          </div>
        </div>
      </div>
    </div>
  );
}
