"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="py-40 lg:py-28 px-4">
      <div className="mx-auto max-w-2xl">
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-full px-3 py-1 text-xs lg:text-sm/6 text-gray-500 bg-white/30 backdrop-blur-xl dark:bg-black/50 dark:bg-opacity-80 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-100/10 dark:hover:ring-gray-100/20">
            Selamat datang di{" "}
            <span className="font-semibold text-indigo-600">
              website resmi kami 👋🏼
            </span>
          </div>
        </motion.div>

        <div className="text-center">
          <motion.h1
            className="text-4xl font-semibold tracking-tight text-gray-900 lg:text-7xl dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Layanan Informasi Desa{" "}
            <span className="font-semibold text-indigo-600">Tapos I</span>{" "}
          </motion.h1>
          <motion.p
            className="mt-6 text-sm font-medium text-gray-500 lg:text-xl/8 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Satu Pintu untuk Mengakses Layanan Informasi dan Berita Terkini dari
            Desa Tapos I, Kecamatan Tenjolaya, Kabupaten Bogor.
          </motion.p>
        </div>

        <motion.div
          className="mt-12 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-800 rounded-2xl relative dark:border-gray-600"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1.5 h-3 bg-gray-800 dark:bg-gray-700 rounded absolute top-3 left-1/2 -translate-x-1/2 animate-scroll"
              animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.p
            className="text-sm mt-4 text-gray-500 dark:text-gray-100"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            Gulir ke bawah
          </motion.p>
        </motion.div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <motion.div
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </div>
  );
}
