import { Info } from "lucide-react";
import React from "react";

export default function IdentitasDesa() {
  return (
    <div className="flex flex-col mb-2">
      <div className="flex bg-gray-100 p-4 rounded-lg justify-between items-center mb-2">
        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          <Info /> Identitas Desa
        </h2>
      </div>
      <div className="bg-white dark:bg-gray-900 dark:bg-opacity-80 border w-full rounded-lg p-4">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Nama Desa :
            </h4>
            <p className="text-gray-600 dark:text-gray-400">Tapos I</p>
          </div>
          {/* kode desa */}
          {/* <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kode Desa:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">34243</p>
          </div> */}
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kecamatan:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">Tenjolaya</p>
          </div>
          {/* kode kecamatan */}
          {/* <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kode Kecamatan:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">75645</p>
          </div> */}
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kabupaten:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">Bogor</p>
          </div>
          {/* kode kabupaten */}
          {/* <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kode Kabupaten:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">34426</p>
          </div> */}
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Provinsi:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">Jawa Barat</p>
          </div>
          {/* kode provinsi */}
          {/* <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kode Provinsi:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">43573</p>
          </div> */}
          {/* kode pos */}
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kode Pos:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">57432</p>
          </div>
          {/* kode wilayah */}
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kode Wilayah:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">242365475</p>
          </div>
          {/* luas wilayah */}
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Luas Wilayah:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">233344 m</p>
          </div>

          {/* Koordinat Geografis */}
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Koordinat:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">6° 3 0 LS</p>
          </div>

          {/* Luas wilayah */}
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Luas Wilayah:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">35 Km</p>
          </div>
        </div>
      </div>
    </div>
  );
}
