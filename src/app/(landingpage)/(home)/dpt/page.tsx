"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { DptTable } from "./table";

export default function Dpt() {
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
            Daftar Pemilih Tetap (DPT)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 mb-4 text-sm font-medium text-pretty text-gray-500 lg:text-xl/8"
          >
            Statistik DPT Desa Tapos I, Kecamatan Tenjolaya
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full"
      >
        <Card className="flex flex-col rounded-2xl">
          <CardContent className="flex-1 pb-0 space-y-10">
            <DptTable />
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
