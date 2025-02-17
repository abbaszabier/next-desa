"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Pemerintahan() {
  const members = [
    {
      id: 1,
      name: "Kepala Desa",
      role: "Nama Kepala Desa",
      avatar: "/images/avatar.png",
    },
    {
      id: 2,
      name: "Sekretaris Desa",
      role: "Nama Sekretaris Desa",
      avatar: "/images/avatar.png",
    },
    {
      id: 3,
      name: "Kepala Urusan Keuangan",
      role: "Nama Kepala Urusan Keuangan",
      avatar: "/images/avatar.png",
    },
    {
      id: 4,
      name: "Kepala Urusan Perencanaan",
      role: "Nama Kepala Urusan Perencanaan",
      avatar: "/images/avatar.png",
    },
    {
      id: 5,
      name: "Kepala Urusan Umum",
      role: "Nama Kepala Urusan Umum",
      avatar: "/images/avatar.png",
    },
    {
      id: 6,
      name: "Kepala Urusan Keamanan",
      role: "Nama Kepala Urusan Keamanan",
      avatar: "/images/avatar.png",
    },
    {
      id: 7,
      name: "Kepala Urusan Kesejahteraan",
      role: "Nama Kepala Urusan Kesejahteraan",
      avatar: "/images/avatar.png",
    },
    {
      id: 8,
      name: "Kepala Urusan Lingkungan",
      role: "Nama Kepala Urusan Lingkungan",
      avatar: "/images/avatar.png",
    },
    {
      id: 9,
      name: "Kepala Urusan Pemerintahan",
      role: "Nama Kepala Urusan Pemerintahan",
      avatar: "/images/avatar.png",
    },
    {
      id: 10,
      name: "Kepala Urusan Pembangunan",
      role: "Nama Kepala Urusan Pembangunan",
      avatar: "/images/avatar.png",
    },
    {
      id: 11,
      name: "Kepala Urusan Kesra",
      role: "Nama Kepala Urusan Kesra",
      avatar: "/images/avatar.png",
    },
    {
      id: 12,
      name: "Kepala Urusan Pelayanan",
      role: "Nama Kepala Urusan Pelayanan",
      avatar: "/images/avatar.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full px-4 lg:px-16 py-40">
      <div className="mb-8 flex flex-col items-center justify-between md:mb-14 lg:mb-16">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-semibold tracking-tight text-balance text-gray-900 lg:text-7xl dark:text-gray-100"
          >
            Struktur Pemerintahan Desa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 mb-4 text-sm font-medium text-pretty text-gray-500 lg:text-xl/8"
          >
            Struktur Pemerintahan Desa Tapos I, Kecamatan Tenjolaya
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full"
      >
        <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {members.map((person) => (
            <div key={person.id} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800" />
              <p className="text-center font-medium">{person.name}</p>
              <p className="text-center text-muted-foreground">{person.role}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
