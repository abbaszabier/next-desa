import { Timer } from "lucide-react";
import React from "react";

export default function JadwalKerja() {
  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 p-4 rounded-lg justify-between items-center mb-2">
        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          <Timer /> Jadwal Kerja
        </h2>
      </div>
      <div className="bg-white dark:bg-gray-900 dark:bg-opacity-80 border w-full rounded-lg p-4 space-y-8">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Senin
            </h4>
            <p className="text-gray-600 dark:text-gray-400">08.00 - 16.00</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Selasa:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">08.00 - 16.00</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Rabu:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">08.00 - 16.00</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kamis:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">08.00 - 16.00</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Jumat:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">08.00 - 16.00</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Sabtu:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">Libur</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Minggu:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">Libur</p>
          </div>
        </div>
      </div>
    </div>
  );
}
