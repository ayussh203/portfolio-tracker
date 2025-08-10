"use client";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.10),transparent_35%)]" />
      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-emerald-400/20 blur-3xl"
      />
    </div>
  );
}