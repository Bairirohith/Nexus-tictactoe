import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Sparkles,
  Trophy,
  Users,
  ShieldCheck,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]"
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-150px] top-[30%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Floating X */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[8%] top-[32%] hidden text-7xl font-black text-violet-400/10 lg:block"
      >
        X
      </motion.div>

      {/* Floating O */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[8%] top-[45%] hidden text-8xl font-black text-cyan-400/10 lg:block"
      >
        O
      </motion.div>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 pb-20 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-violet-200 sm:text-xs"
        >
          <Sparkles size={14} />
          THE NEXT GENERATION OF TIC-TAC-TOE
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          THINK.
          <br />

          <span className="bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
            PLACE.
          </span>

          <br />

          CONQUER.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
        >
          A modern strategy arena where classic Tic-Tac-Toe
          meets intelligent opponents, competitive statistics,
          achievements and cinematic gameplay.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
          className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
        >
          {/* ENTER ARENA */}
          <Link
            to="/arena"
            className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-black transition duration-300 hover:scale-[1.03] hover:bg-white/90"
          >
            Enter Arena

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {/* EXPLORE */}
          <a
            href="#features"
            className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10"
          >
            Explore NEXUS
          </a>
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="mt-8 flex items-center gap-2 text-xs text-white/30"
        >
          <ShieldCheck size={14} />
          Built for strategy. Designed for competition.
        </motion.div>

        {/* Feature Cards */}
        <div
          id="features"
          className="mt-20 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <Feature
            icon={<Bot size={19} />}
            title="INTELLIGENT AI"
            text="Challenge adaptive opponents and sharpen your strategy."
          />

          <Feature
            icon={<Trophy size={19} />}
            title="COMPETE"
            text="Track ratings, wins, streaks and achievements."
          />

          <Feature
            icon={<Users size={19} />}
            title="MULTIPLAYER"
            text="Challenge your friends in local battles."
          />

          <Feature
            icon={<Brain size={19} />}
            title="SMART PLAY"
            text="Multiple difficulty levels built for every player."
          />
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.025] py-6 backdrop-blur-xl"
        >
          <Stat value="∞" label="POSSIBILITIES" />
          <Stat value="3×3" label="BATTLE GRID" />
          <Stat value="1" label="ULTIMATE WINNER" />
        </motion.div>
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
      whileHover={{
        y: -7,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-xl transition-colors duration-300 hover:border-violet-400/20 hover:bg-white/[0.05]"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-300 transition duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/10">
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

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 px-3">
      <div className="text-xl font-black text-white sm:text-2xl">
        {value}
      </div>

      <div className="text-[8px] font-semibold tracking-[0.2em] text-white/30 sm:text-[10px]">
        {label}
      </div>
    </div>
  );
}