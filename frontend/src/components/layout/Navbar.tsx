import { motion } from "framer-motion";
import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Arena", "Leaderboard", "How It Works"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#06070b]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10">
            <Gamepad2 className="h-5 w-5 text-violet-300" />
          </div>

          <div>
            <div className="text-lg font-black tracking-[0.25em]">
              NEXUS
            </div>

            <div className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              Strategy Arena
            </div>
          </div>
        </motion.div>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {link}
            </a>
          ))}

          <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10">
            Login
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 p-2 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-white/10 px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                onClick={() => setOpen(false)}
                className="text-white/70"
              >
                {link}
              </a>
            ))}

            <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black">
              Login
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}