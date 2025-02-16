import { Info } from "lucide-react";
import React from "react";

export default function IdentitasDesa() {
  return (
    <div className="flex flex-col mb-2">
      <div className="flex bg-gray-100 p-4 rounded-lg justify-between items-center mb-2 dark:bg-gray-900 dark:ring-gray-100">
        <h2 className="flex items-center gap-2 text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">
          <Info /> Identitas Desa
        </h2>
      </div>
      <div className="bg-white dark:bg-black border w-full rounded-lg p-4">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200">
              Nama Desa :
            </h4>
            <p className="font-normal text-neutral-500 text-md">Tapos I</p>
          </div>
          {/* kode desa */}
          {/* <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kode Desa:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">34243</p>
          </div> */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200 ">
              Kecamatan:
            </h4>
            <p className="font-normal text-neutral-500 text-md">Tenjolaya</p>
          </div>
          {/* kode kecamatan */}
          {/* <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kode Kecamatan:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">75645</p>
          </div> */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200 ">
              Kabupaten:
            </h4>
            <p className="font-normal text-neutral-500 text-md">Bogor</p>
          </div>
          {/* kode kabupaten */}
          {/* <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
              Kode Kabupaten:
            </h4>
            <p className="text-gray-600 dark:text-gray-400">34426</p>
          </div> */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200 ">
              Provinsi:
            </h4>
            <p className="font-normal text-neutral-500 text-md">Jawa Barat</p>
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
            <h4 className="font-bold text-black dark:text-neutral-200 ">
              Kode Pos:
            </h4>
            <p className="font-normal text-neutral-500 text-md">57432</p>
          </div>
          {/* kode wilayah */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200 ">
              Kode Wilayah:
            </h4>
            <p className="font-normal text-neutral-500 text-md">242365475</p>
          </div>
          {/* luas wilayah */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200 ">
              Luas Wilayah:
            </h4>
            <p className="font-normal text-neutral-500 text-md">233344 m</p>
          </div>

          {/* Koordinat Geografis */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200 ">
              Koordinat:
            </h4>
            <p className="font-normal text-neutral-500 text-md">6° 3 0 LS</p>
          </div>

          {/* Luas wilayah */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-black dark:text-neutral-200 ">
              Luas Wilayah:
            </h4>
            <p className="font-normal text-neutral-500 text-md">35 Km</p>
          </div>
        </div>
      </div>
    </div>
  );
}
