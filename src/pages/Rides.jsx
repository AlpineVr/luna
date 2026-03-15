import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ImagePlus, Calculator, FileText, FlaskConical, ShieldCheck, DollarSign, Leaf } from "lucide-react";

const PlaceholderImage = ({ label }) => (
  <div className="w-full aspect-video bg-white/5 border-2 border-dashed border-white/15 rounded-2xl flex flex-col items-center justify-center gap-3 text-white/25">
    <ImagePlus className="w-10 h-10" />
    <span className="text-sm tracking-wide">{label || "Image / Diagram Placeholder"}</span>
  </div>
);

const SectionLabel = ({ icon: IconComp, label, color = "text-white/50" }) => (
  <div className={`flex items-center gap-2 ${color} text-xs uppercase tracking-widest font-semibold mb-4`}>
    <IconComp className="w-4 h-4" />
    {label}
  </div>
);

const ContentBlock = ({ children, className = "" }) => (
  <div className={`bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white/70 leading-relaxed text-[15px] ${className}`}>
    {children}
  </div>
);

const CalcBlock = ({ title, steps }) => (
  <div className="bg-white/5 border border-indigo-400/20 rounded-xl px-6 py-6 space-y-3">
    <div className="flex items-center gap-2 text-indigo-300/80 text-sm font-semibold tracking-wide">
      <Calculator className="w-4 h-4" />
      {title}
    </div>
    <div className="space-y-2 font-mono text-sm">
      {steps.map(([label, value], i) => (
        <div key={i} className="flex gap-3">
          <span className="text-white/30 w-24 shrink-0">{label}</span>
          <span className="text-white/70">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const PlaceholderCalc = ({ label }) => (
  <div className="w-full bg-white/5 border-2 border-dashed border-indigo-400/20 rounded-xl px-6 py-6 space-y-3">
    <div className="flex items-center gap-2 text-indigo-300/60 text-sm font-semibold tracking-wide">
      <Calculator className="w-4 h-4" />
      {label || "Calculation"}
    </div>
    <div className="space-y-2">
      {["Given:", "Formula:", "Working:", "Answer:"].map((step) => (
        <div key={step} className="flex gap-3 text-sm">
          <span className="text-white/30 w-20 shrink-0">{step}</span>
          <div className="flex-1 h-5 bg-white/5 rounded" />
        </div>
      ))}
    </div>
  </div>
);

export default function Rides() {
  return (
    <div className="min-h-screen bg-[#050A1F] text-white overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase">
          <ArrowLeft className="w-4 h-4" />
          LunaPalooza
        </Link>
        <div className="flex gap-6 text-xs font-semibold tracking-widest uppercase text-white/50">
          <a href="#moonshot" className="hover:text-white transition-colors">The Moonshot</a>
          <a href="#craterhop" className="hover:text-white transition-colors">CraterHop</a>
          <a href="#considerations" className="hover:text-white transition-colors">Overview</a>
        </div>
      </nav>

      {/* Page Hero */}
      <div className="relative pt-40 pb-20 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-[#050A1F] to-[#050A1F]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-indigo-400 font-semibold mb-4">LunaPalooza Attractions</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5 leading-tight">Our Rides</h1>
          <p className="text-white/40 text-lg">
            Two groundbreaking attractions engineered for the Moon's unique gravitational conditions.
            Guests explore the park in next-generation pressure suits — designed for mobility and safety.
          </p>
        </div>
      </div>

      {/* ── RIDE 1: THE MOONSHOT ── */}
      <section id="moonshot" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase">
              <FlaskConical className="w-3.5 h-3.5" />
              Free-Fall
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-3 leading-tight">The Moonshot</h2>
            <p className="text-white/30 text-lg italic">760 metres up. 60 seconds of weightlessness. Nothing else comes close.</p>
          </motion.div>

          {/* Main Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="mb-10">
            <PlaceholderImage label="Hand-drawn diagram of The Moonshot" />
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FileText} label="Ride Description" />
            <ContentBlock>
              The Moonshot is a launch system that sends you vertically from a 31.5 metre tower at speeds of 175 km/h, sending you soaring 760 metres into the sky. For a full 60 seconds, you float in complete weightlessness — just you and the nothingness of space — before a smooth and controlled return to the ground. No other Earth ride comes even close.
            </ContentBlock>
          </motion.div>

          {/* Physics */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FlaskConical} label="Physics Principles" color="text-indigo-300/70" />
            <ContentBlock>
              The Moonshot exploits <strong className="text-white">free-fall</strong> — where the only force acting on the rider is gravity. Once launched from the jump seat, the rider enters a state of true weightlessness as they ascend and then fall freely under the Moon's gravitational field (g = 1.62 m/s²). This is impossible to replicate on Earth for the same duration or altitude.
            </ContentBlock>
          </motion.div>

          {/* Safety */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={ShieldCheck} label="Safety" color="text-green-400/70" />
            <ContentBlock>
              Rider safety is ensured by capping the experienced G-Force at <strong className="text-white">4G</strong> during both launch and deceleration. A built-in G-Suit (integrated into the park's pressure suit) pressurises the legs and lower abdomen to stabilise the body during high-G manoeuvres. Acceleration and deceleration occur over a minimum of 1.29 seconds. In the event of a system failure, magnetic braking can halt the system in milliseconds. The ride is entirely symmetrical on the way down as it is on the way up, so a safe 4G landing returns riders to the ground.
            </ContentBlock>
          </motion.div>

          {/* Calculations */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="space-y-5 mb-10">
            <SectionLabel icon={Calculator} label="Calculations" color="text-indigo-300/70" />

            <CalcBlock
              title="Net catapult acceleration (Newton's Second Law)"
              steps={[
                ["Given:", "G-Force limit = 4G, Moon g = 1.62 m/s²"],
                ["Formula:", "N − W = ma  →  4mg − mg = ma"],
                ["Working:", "a = (4 × 1.62) − 1.62 = 6.48 − 1.62"],
                ["Answer:", "a = 37.62 m/s²"],
              ]}
            />

            <CalcBlock
              title="Required launch rail length"
              steps={[
                ["Given:", "v = 175 km/h = 48.6 m/s, u = 0, a = 37.62 m/s²"],
                ["Formula:", "v² = u² + 2as"],
                ["Working:", "s = v² / 2a = (48.6)² / (2 × 37.62)"],
                ["Answer:", "s ≈ 31.4 m"],
              ]}
            />

            <CalcBlock
              title="Maximum height reached"
              steps={[
                ["Given:", "v = 48.6 m/s (launch), g_moon = 1.62 m/s²"],
                ["Formula:", "v² = u² − 2g·h  →  h = u² / 2g"],
                ["Working:", "h = (48.6)² / (2 × 1.62)"],
                ["Answer:", "h ≈ 729 m + 31.5 m rail ≈ 760 m total"],
              ]}
            />

            <PlaceholderCalc label="Calculation 4 — [Add additional calculation here]" />
          </motion.div>

          {/* Additional Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} viewport={{ once: true }}>
            <PlaceholderImage label="Additional diagram / supporting image" />
          </motion.div>
        </div>
      </section>

      {/* ── RIDE 2: CRATERHOP ── */}
      <section id="craterhop" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase">
              <FlaskConical className="w-3.5 h-3.5" />
              Projectile Motion
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-3 leading-tight">The CraterHop™</h2>
            <p className="text-white/30 text-lg italic">5km across the lunar surface. No rover required.</p>
          </motion.div>

          {/* Main Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="mb-10">
            <PlaceholderImage label="Hand-drawn diagram of The CraterHop™" />
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FileText} label="Ride Description" />
            <ContentBlock>
              The CraterHop is the ultimate attraction at LunaPalooza, serving both as a thrilling ride and speedy transportation around the park and the lunar surface. Our largest hop sends you soaring across <strong className="text-white">5km of landscape</strong>, peaking at <strong className="text-white">1,248m</strong> above the surface with <strong className="text-white">78.5 seconds of flight</strong> and a view stretching across the entire Moon. CraterHop &gt; Silly Lunar Rover.
            </ContentBlock>
          </motion.div>

          {/* Physics */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FlaskConical} label="Physics Principles" color="text-indigo-300/70" />
            <ContentBlock>
              [ Physics explanation for The CraterHop — describe the projectile motion principles, how the Moon's low gravity and lack of atmosphere enable the extraordinary range and hang time, and how launch angle is optimised. ]
            </ContentBlock>
          </motion.div>

          {/* Safety */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={ShieldCheck} label="Safety" color="text-green-400/70" />
            <ContentBlock>
              [ Safety explanation for The CraterHop — describe how the G-force is managed, how the launch and landing are controlled, and any safety systems specific to this ride. ]
            </ContentBlock>
          </motion.div>

          {/* Calculations */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="space-y-5 mb-10">
            <SectionLabel icon={Calculator} label="Calculations" color="text-indigo-300/70" />

            <CalcBlock
              title="Launch speed required for 5km range"
              steps={[
                ["Given:", "Range = 5000 m, g_moon = 1.62 m/s², optimal angle = 45°"],
                ["Formula:", "R = v² sin(2θ) / g"],
                ["Working:", "v² = R × g / sin(90°) = 5000 × 1.62"],
                ["Answer:", "v = √8100 ≈ 90 m/s  (note: largest hop requires 221 m/s)"],
              ]}
            />

            <PlaceholderCalc label="Calculation 2 — e.g. Maximum height at 45° launch" />
            <PlaceholderCalc label="Calculation 3 — e.g. Time of flight" />
            <PlaceholderCalc label="Calculation 4 — [Add additional calculation here]" />
          </motion.div>

          {/* Additional Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} viewport={{ once: true }}>
            <PlaceholderImage label="Additional diagram / supporting image" />
          </motion.div>
        </div>
      </section>

      {/* ── SAFETY, ETHICS, ECONOMICS ── */}
      <section id="considerations" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs tracking-widest uppercase text-white/30 font-semibold mb-4">Park Overview</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">Safety, Ethics & Economics</h2>
          </motion.div>

          {/* Economic */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="mb-8">
            <SectionLabel icon={DollarSign} label="Economic" color="text-yellow-400/70" />
            <ContentBlock>
              <p className="mb-3">The costs of the park will be severe — but these costs are justified by the uniqueness of this experience. The rides are <strong className="text-white">physically impossible to replicate on Earth</strong>, making a once-in-a-lifetime trip to the Moon entirely justified. The CraterHop alone requires a 221 m/s launch speed — unachievable anywhere else. This exclusivity makes marketing and selling tickets straightforward.</p>
              <p>Construction costs can be minimised through lunar-generated materials. The Moon's surface is rich with materials needed to produce concrete. A lightweight concrete plant could be shipped from Earth and generate up to 100,000 kg of concrete per day. The park has been designed to minimise material use — by not using tracks or ride vehicles, material usage is kept to a minimum.</p>
            </ContentBlock>
          </motion.div>

          {/* Ethical */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} viewport={{ once: true }} className="mb-8">
            <SectionLabel icon={ShieldCheck} label="Ethical" color="text-purple-400/70" />
            <ContentBlock>
              LunaPalooza acknowledges significant hurdles to accessibility — primarily the costly and limited transportation options to and from the lunar surface. However, the low-gravity environment offers genuine health benefits to guests with mobility limitations, meaning the park becomes more than an entertainment experience: it becomes a rehabilitation and health facility, advancing not only physics but health sciences.
            </ContentBlock>
          </motion.div>

          {/* Safety */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mb-8">
            <SectionLabel icon={ShieldCheck} label="Safety" color="text-green-400/70" />
            <ContentBlock>
              All rides are designed to stay within the limits of the human body. <strong className="text-white">4 Earth G's</strong> for short periods is considered the highest safe acceleration threshold with low risk of loss of consciousness. On park premises, your pressure suit keeps you safe with an independent oxygen supply and GPS tracking. In the event of a ride launch system failure, magnetic braking systems can halt the system in milliseconds.
            </ContentBlock>
          </motion.div>

          {/* Environmental */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} viewport={{ once: true }} className="mb-12">
            <SectionLabel icon={Leaf} label="Environmental" color="text-emerald-400/70" />
            <ContentBlock>
              Construction on the Moon disturbs an untouched, pristine, scientific environment. LunaPalooza is committing significant resources to advance scientific discovery whilst minimising disruption — by using environmental features such as <strong className="text-white">lunar crater walls</strong> to create elevation change and build structures, rather than constructing new infrastructure from scratch.
            </ContentBlock>
          </motion.div>

          {/* References */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
            <SectionLabel icon={FileText} label="Reference List" />
            <div className="w-full min-h-[100px] bg-white/5 border-2 border-dashed border-white/15 rounded-xl flex items-center justify-center text-white/25 text-sm tracking-wide px-6 py-8 text-center">
              [ Reference list goes here — Harvard style in-text referencing ]
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-white/20 text-xs tracking-widest uppercase">
        © 2026 LunaPalooza — All Rights Reserved
      </footer>
    </div>
  );
}