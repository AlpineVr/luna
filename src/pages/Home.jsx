import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Star, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050A1F] text-white overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm">
        <span className="text-xl font-bold tracking-widest text-white/90 uppercase">LunaPalooza</span>
        <Link
          to="/Rides"
          className="text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-white transition-colors"
        >
          Our Rides
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Starfield background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A1F] via-[#0A1540] to-[#050A1F]" />
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.7 + 0.2,
              }}
            />
          ))}
          {/* Moon glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/20 blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/30 rounded-full px-4 py-1.5 mb-8">
            <Star className="w-3.5 h-3.5 text-indigo-300" />
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-300">The Moon's First Theme Park</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="text-white">Luna</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-300">
              Palooza
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 font-light tracking-wide max-w-2xl mx-auto mb-12">
            Welcome To LunaPalooza! The ultimate thrill park based on the lunar surface. With gravity a mere 1/6th of that on Earth, no atmosphere, and a landscape never before experienced, the moon poses the ultimate experience to anyone who dares venture there.
          </p>

          <Link
            to="/Rides"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-indigo-900/50"
          >
            <Rocket className="w-4 h-4" />
            Explore Our Rides
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Rides Teaser */}
      <section className="relative py-28 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-indigo-400 font-semibold mb-4">Coming Attractions</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Two Rides. Zero Gravity.<br />
            <span className="text-white/40">Infinite Thrills.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Ride 1 */}
          <Link to="/Rides#lunarhopper">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/40 to-purple-900/20 p-8 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">The LunarHoppr™</h3>
              <p className="text-white/50 text-sm mb-4">The ultimate hop across the lunar surface — soar 5km, peak at 1248m, and float for 78.5 seconds.</p>
              <p className="text-indigo-400/70 text-sm font-semibold">Explore →</p>
            </motion.div>
          </Link>

          {/* Ride 2 placeholder */}
          <Link to="/Rides#ride2">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/40 to-cyan-900/20 p-8 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">The Moonshot</h3>
              <p className="text-white/50 text-sm mb-4">Launch 760m into the sky at 175kph and float in complete weightlessness for 60 seconds.</p>
              <p className="text-blue-400/70 text-sm font-semibold">Explore →</p>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-white/20 text-xs tracking-widest uppercase">
        This site was created by Darcy Thripp for Y12 Physics Task 1
      </footer>
    </div>
  );
}