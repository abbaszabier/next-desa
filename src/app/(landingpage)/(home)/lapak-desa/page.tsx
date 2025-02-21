"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  contact: string;
  image: string;
}

const products = [
  {
    id: "prod-1",
    name: "Sale Pisang",
    description: "Sale pisang khas desa yang manis dan renyah.",
    price: "Rp 20.000",
    contact: "6281234567890",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "prod-2",
    name: "Keripik Singkong",
    description: "Keripik singkong renyah dengan berbagai rasa.",
    price: "Rp 15.000",
    contact: "6289876543210",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "prod-3",
    name: "Bakpia",
    description: "Bakpia khas Tapos I dengan berbagai varian rasa.",
    price: "Rp 25.000",
    contact: "6285678901234",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
];

export default function LapakDesa() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (selectedProduct) {
      const whatsappUrl = `https://wa.me/${
        selectedProduct.contact
      }?text=Halo,%20saya%20${encodeURIComponent(
        name
      )}.%20Saya%20tertarik%20dengan%20produk%20${encodeURIComponent(
        selectedProduct.name
      )}.%20${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    }
  };
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
            Lapak Desa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 mb-4 text-sm font-medium text-pretty text-gray-500 lg:text-xl/8"
          >
            Produk UMKM unggulan dari desa Tapos I, Kecamatan Tenjolaya
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
          {products.map((prod) => (
            <motion.div
              key={prod.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer dark:bg-black border"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProduct(prod)}
            >
              <Image
                width={0}
                height={0}
                src={prod.image}
                alt={prod.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{prod.name}</h2>
                <p className="text-gray-600 text-sm">{prod.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProduct && (
          <Dialog
            open={Boolean(selectedProduct)}
            onOpenChange={() => setSelectedProduct(null)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
              </DialogHeader>
              <Image
                width={0}
                height={0}
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-60 object-cover rounded-lg"
              />
              <p className="mt-4 text-gray-700">
                {selectedProduct.description}
              </p>
              <p className="text-gray-500">Harga: {selectedProduct.price}</p>
              <div className="mt-4">
                <Input
                  placeholder="Nama Anda (cth: Putri FM)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-2"
                />
                <Textarea
                  placeholder={`Pesan Anda (cth: Saya ingin memesan 2 bungkus ${selectedProduct.name})`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mb-2"
                />
                <Button
                  variant="outline"
                  className="mt-2 w-full bg-green-500 hover:bg-green-600 hover:text-white text-white dark:bg-green-600 dark:hover:bg-green-700"
                  onClick={handleSubmit}
                >
                  Hubungi via WhatsApp
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </motion.div>
    </section>
  );
}
