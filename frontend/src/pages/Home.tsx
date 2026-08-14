import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-20">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      />

      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200"
        >
          <Sparkles size={14} />
          THE NEXT GENERATION OF TIC-TAC-TOE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          THINK.
          <br />

          <span className="bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
            PLACE.
          </span>

          <br />

          CONQUER.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
        >
          A modern strategy arena where classic Tic-Tac-Toe
          meets intelligent opponents, competitive statistics,
          achievements and cinematic gameplay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <button className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-black transition hover:scale-[1.03]">
            Enter Arena

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
            Explore NEXUS
          </button>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-20 grid w-full max-w-4xl gap-4 sm:grid-cols-3">

          <Feature
            icon={<Bot />}
            title="INTELLIGENT AI"
            text="Challenge adaptive opponents."
          />

          <Feature
            icon={<Trophy />}
            title="COMPETE"
            text="Track ratings and achievements."
          />

          <Feature
            icon={<Users />}
            title="MULTIPLAYER"
            text="Battle friends locally."
          />

        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-xl"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-300">
        {icon}
      </div>

      <div className="text-xs font-bold tracking-[0.15em]">
        {title}
      </div>

      <p className="mt-2 text-sm leading-6 text-white/40">
        {text}
      </p>
    </motion.div>
  );
}