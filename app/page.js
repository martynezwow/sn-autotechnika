"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Button from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";
import { 
  Wrench, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  Car,
  Settings,
  Phone
} from 'lucide-react';

export default function HomePage() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      <Head>
        <title>SN Autotechnika Kft.</title>
      </Head>

      {/* Háttérvideó */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      

      {/* Szlogen */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-light tracking-wide text-center"
        >
          
          Precizitás, Megbízhatóság, Tapasztalat.
                      <div className="gap-4 mt-20 relative z-40 flex items-center justify-center h-full">
              <Button className="bg-black/40 text-white hover:bg-orange-500/20 text-lg px-8 py-3 backdrop-blur-md border border-orange-500/40">
                <Link href="/booking">Időpont foglalása</Link>
              </Button>
            </div>
        </motion.h1>   

      </div>

    </section>
    

  );
}
