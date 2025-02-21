"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Destination {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
}

const destinations = [
  {
    id: "dest-1",
    name: "Air Terjun Indah",
    description:
      "Air terjun yang dikelilingi oleh hutan tropis dengan pemandangan yang menakjubkan.",
    location: "Desa Harmoni, Kabupaten Sejahtera",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "dest-2",
    name: "Bukit Sunrise",
    description:
      "Nikmati pemandangan matahari terbit yang spektakuler dari atas bukit.",
    location: "Desa Damai, Kabupaten Bahagia",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "dest-3",
    name: "Danau Biru",
    description:
      "Danau dengan air biru jernih yang cocok untuk berperahu dan bersantai.",
    location: "Desa Asri, Kabupaten Harmonis",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
];

export default function Destinasi() {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

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
            Destinasi Desa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 mb-4 text-sm font-medium text-pretty text-gray-500 lg:text-xl/8"
          >
            Potensi Destinasi Desa Tapos I, Kecamatan Tenjolaya
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations?.map((dest) => (
            <motion.div
              key={dest.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer dark:bg-black border"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedDest(dest)}
            >
              <Image
                width={0}
                height={0}
                src={dest.image}
                alt={dest.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{dest.name}</h2>
                <p className="text-gray-600 text-sm">{dest.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedDest && (
          <Dialog
            open={Boolean(selectedDest)}
            onOpenChange={() => setSelectedDest(null)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedDest.name}</DialogTitle>
              </DialogHeader>
              <Image
                width={0}
                height={0}
                src={selectedDest.image}
                alt={selectedDest.name}
                className="w-full h-60 object-cover rounded-lg"
              />
              <p className="mt-4 text-gray-700">{selectedDest.description}</p>
              <p className="text-gray-500 mt-2">
                Lokasi: {selectedDest.location}
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSelectedDest(null)}
              >
                Tutup
              </Button>
            </DialogContent>
          </Dialog>
        )}
      </motion.div>
    </section>
  );
}
