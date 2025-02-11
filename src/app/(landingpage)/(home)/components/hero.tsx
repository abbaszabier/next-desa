import React from "react";

export default function Hero() {
  return (
    <div className="relative isolate py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 bg-white/30 backdrop-blur-xl dark:bg-black/50 dark:bg-opacity-80 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-100/10 dark:hover:ring-gray-100/20">
            Selamat datang di{" "}
            <span className="font-semibold text-indigo-600">
              website resmi kami 👋🏼
            </span>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-gray-100">
            Layanan Informasi Desa{" "}
            <span className="font-semibold text-indigo-600">Tapos I</span>{" "}
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Satu Pintu untuk Mengakses Informasi, Layanan, dan Berita Terkini
            dari Desa Tapos I, Kecamatan Tenjolaya, Kabupaten Bogor.
          </p>
        </div>
        <div className="mt-12 flex flex-col justify-center justify-center items-center text-center">
          <div className="w-6 h-10 border-2 border-gray-800 rounded-2xl relative animate-float dark:border-gray-600">
            <div className="w-1.5 h-3 bg-gray-800 dark:bg-gray-700 rounded absolute top-3 left-1/2 -translate-x-1/2 animate-scroll"></div>
          </div>
          <p className="text-sm/6 mt-4 text-gray-500 dark:text-gray-100 animate-pulse">
            Gulir ke bawah
          </p>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
}
