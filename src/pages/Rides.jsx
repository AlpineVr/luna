import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, FlaskConical, ShieldCheck, DollarSign, Leaf, BookOpen, Bot } from "lucide-react";
import { MoonshotAnimation, CraterHopAnimation } from "@/components/RideAnimations";

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

const RideImage = ({ src, alt, caption }) => (
  <div className="w-full rounded-2xl overflow-hidden border border-white/10">
    <img src={src} alt={alt} className="w-full object-contain bg-[#0d1530]" />
    {caption && <p className="text-center text-white/30 text-xs py-3 px-4 italic">{caption}</p>}
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
            Guests explore the park in next-generation pressure suits — designed for mobility and safety. Every attraction at LunaPalooza is designed to take advantage of the unique environment the moon offers, so your adventure to the moon will be otherworldly.
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

          {/* Animation */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }} viewport={{ once: true }} className="mb-10">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <MoonshotAnimation />
            </div>
          </motion.div>

          {/* Ride Diagram */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FileText} label="Ride Diagram" />
            <RideImage
              src="https://media.base44.com/images/public/69b38396d7a96678c407a7a8/ec70cea78_image.png"
              alt="The Moonshot ride diagram"
              caption="Fig. 1 — The Moonshot: Launch/Deceleration Tower, platform chair, and free-body diagram showing launch, freefall, and deceleration phases."
            />
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FileText} label="Ride Description" />
            <ContentBlock>
              The Moonshot is a launch system that sends you vertically from a 31.5 meter tower at speeds of 175kph, sending you soaring 760 meters into the sky, and for a full 60 seconds, you float in complete weightlessness, just you and the nothingness of space, before a smooth and controlled return to the ground. No other Earth rides come even close.
            </ContentBlock>
          </motion.div>

          {/* Physics */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FlaskConical} label="Physics" color="text-indigo-300/70" />
            <ContentBlock>
              The moonshot operates on freefall. Once the cart leaves the launch rail there is no thrust, no engine and no additional energy being expelled onto the rider. This means Newton's second law says that the only force acting on the rider is their own bodyweight pulling them back down. This ride is super unique as there is no ride vehicle to protect the rider, it's just them in the suit in freefall being flung into the air and caught by our platform and smoothly decelerated on the way down.
            </ContentBlock>
          </motion.div>

          {/* Safety */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={ShieldCheck} label="Safety" color="text-green-400/70" />
            <ContentBlock>
              The rider's safety is ensured by capping the experienced G-Force at 4G during both launch and deceleration, along with a G-Suit (a specialised suit which is built into the park's pressure suit, the suit pressurises the legs and lower abdomen to stabilise the body during high G maneuvers). Acceleration and deceleration is at a minimum of only 1.29 seconds. And by applying Newton's second law: N - W = ma, the net catapult acceleration must be 37.62m/s². Using v²=u²+2as, the required rail is 31.4m. And due to the law of conservation of energy, the ride is entirely symmetrical on the way down as it is on the way up, so a safe 4G landing will bring you back to the ground.
            </ContentBlock>
          </motion.div>

          {/* Calculations */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="space-y-6 mb-10">
            <SectionLabel icon={FileText} label="Calculations" color="text-indigo-300/70" />
            <RideImage
              src="https://media.base44.com/images/public/69b38396d7a96678c407a7a8/fa01e2f2c_image.png"
              alt="Moonshot calculations sheet 1"
              caption="Fig. 2 — Calculations: Launch velocity, maximum height, total air time verification, and G-force during freefall."
            />
            <RideImage
              src="https://media.base44.com/images/public/69b38396d7a96678c407a7a8/63f408499_image.png"
              alt="Moonshot calculations sheet 2"
              caption="Fig. 3 — Calculations: Landing forces and conservation of energy analysis."
            />
            <RideImage
              src="https://media.base44.com/images/public/69b38396d7a96678c407a7a8/e8e69f6c6_image.png"
              alt="Moonshot calculations sheet 3"
              caption="Fig. 4 — Calculations: Normal force during braking, safe acceleration limit, launch acceleration, launch length, total maximum height, and total ride time."
            />
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

          {/* Animation */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }} viewport={{ once: true }} className="mb-10">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <CraterHopAnimation />
            </div>
          </motion.div>

          {/* Ride Diagram */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FileText} label="Ride Diagram" />
            <RideImage
              src="https://media.base44.com/images/public/69b38396d7a96678c407a7a8/a282afe6e_image.png"
              alt="The CraterHop ride diagram"
              caption="Fig. 5 — The CraterHop™: Launch Maglev Track, projectile ride vehicle, projectile trajectory, catch Maglev Track, and emergency spring buffer."
            />
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FileText} label="Ride Description" />
            <ContentBlock>
              <p className="mb-3">The craterhop is the ultimate system based at LunaPalooza, serving both as speedy transportation around the park / lunar surface. Our largest hop sends you soaring across 5km of landscape, peaking at 1248m above the surface with 78.5 seconds of flight and a view stretching across the entire moon. CraterHop &gt; Silly Lunar Rover.</p>
              <p>The CraterHop is the premier mode of transportation and thrill ride around the park, allowing for a speedy transfer between lunar craters using projectile motion, a form of motion where objects travel along a parabolic path under the influence of gravity. Once the cart leaves the launch track from the inside of the crater, it soars through the sky with no engines or thrust, only the kinetic energy put into it via the launch system.</p>
            </ContentBlock>
          </motion.div>

          {/* Physics */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FlaskConical} label="Physics" color="text-indigo-300/70" />
            <ContentBlock>
              <p className="mb-3">From the moment the cart disengages from the track, riders are in complete freefall; the vehicle is no longer pushing against them, so they feel no weight at all. This 0 G experience lasts for 78.5 seconds of flight. Unlike a traditional rollercoaster, where the thrill comes from harsh forces from turns and drops, the crater hopper delivers a sustained and speedy experience and amazing views. (Vogel, 2024)</p>
              <p>The cart's motion separates into two independent components: a constant horizontal force of 63.6m/s generated during the launch and a variable vertical force as gravity acts on the ride vehicle, starting at 63.6 m/s and decreasing at 1.62m/s².</p>
            </ContentBlock>
          </motion.div>

          {/* Safety */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={ShieldCheck} label="Safety" color="text-green-400/70" />
            <ContentBlock>
              Safety is paramount, so the launch and breaking systems are powered by electromagnets that, if disabled, stops movement in its tracks. The tracks for launching and breaking are tuned to never exceed 4G, which is the upper safe limit for the human body. This is derived from Newton's second law. Because of a lack of lunar atmosphere, the landing point is precise every time, as there are zero outside unbalanced forces that we cannot control; this would simply be impossible on Earth. (CoasterForce, 2016)
            </ContentBlock>
          </motion.div>

          {/* Calculations */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="mb-10">
            <SectionLabel icon={FileText} label="Calculations" color="text-indigo-300/70" />
            <RideImage
              src="https://media.base44.com/images/public/69b38396d7a96678c407a7a8/f0315c391_image.png"
              alt="CraterHop calculations"
              caption="Fig. 6 — Calculations: Crater dimensions, track geometry, track arc length, launch velocity, G-force, track acceleration length, time in air, and peak height."
            />
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
              <p className="mb-3">The costs of the park will be severe; these costs are justified by the uniqueness of this experience - the rides are physically impossible to replicate on earth, making the once-in-a-lifetime trip to the moon (literally) justified. The Crater Hopper alone requires a 221m/s launch speed, which is impossible to achieve elsewhere. This exclusivity will make marketing and selling tickets a breeze.</p>
              <p>Construction costs can be minimised through the use of lunar-generated materials. The moon's surface is rich with materials needed to generate concrete. A lightweight concrete plant could be shipped from Earth and generate up to 100,000kg of concrete per day. (Omar, 1998) The park has been designed to minimise material use in the construction of its rides, and by not using track or ride vehicles, the park can minimise material usage.</p>
            </ContentBlock>
          </motion.div>

          {/* Ethical */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} viewport={{ once: true }} className="mb-8">
            <SectionLabel icon={ShieldCheck} label="Ethical" color="text-purple-400/70" />
            <ContentBlock>
              LunaPalooza, being a lunar-based park, does see that there are significant hurdles to accessibility to the park, primarily being the costly, limited transportation options to and from the lunar surface. However, the low gravity environment offers genuine health benefits to guests with mobility limitations, meaning the park becomes more than an entertainment experience but a rehabilitation and health facility to advance not only physics but health sciences. (Ivanenko et al., 2014) (Vernikos, 2008)
            </ContentBlock>
          </motion.div>

          {/* Safety */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mb-8">
            <SectionLabel icon={ShieldCheck} label="Safety" color="text-green-400/70" />
            <ContentBlock>
              All rides are designed to stay within the limits of the human body. 4 Earth G's for short periods of time are considered the highest thrill for safest acceleration with low risk of loss of consciousness. (Kumar &amp; Norfleet, 1992) When you are on park premises, your pressure suit keeps you safe, with an independent oxygen supply and GPS Tracking. In the event of failure of our ride launch systems, they can be halted in milliseconds due to magnetic braking systems.
            </ContentBlock>
          </motion.div>

          {/* Environmental */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} viewport={{ once: true }} className="mb-12">
            <SectionLabel icon={Leaf} label="Environmental" color="text-emerald-400/70" />
            <ContentBlock>
              Construction on the moon disturbs an untouched, pristine, scientific environment. LunaPalooza will be committing significant resources to advance scientific discovery whilst minimising disruption by using environmental features (such as lunar crater walls) to create elevation change and build structures, rather than building infrastructure.
            </ContentBlock>
          </motion.div>

          {/* AI Reflection */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.28 }} viewport={{ once: true }} className="mb-12">
            <SectionLabel icon={Bot} label="AI Reflection" color="text-cyan-400/70" />
            <ContentBlock>
              As part of this task, I used the Artificial Intelligence Copilot to assist with finding additional sources to back my research. This use of AI greatly improved my ability to research and design these rides within the limitations of a lunar environment. I've also used it to brainstorm unique ride concepts which took advantage of the concepts we've been challenged with. For example, the AI suggested a "Orbit Hop" ride, which was a projectile motion ride as a trampoline park in a dome. I liked the projectile motion part and turned it into a crater hop to launch into a parabolic ride where you'd see through the lunar atmosphere.
            </ContentBlock>
          </motion.div>

          {/* References */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
            <SectionLabel icon={BookOpen} label="Reference List" />
            <ContentBlock className="text-[13px] space-y-3 text-white/50 leading-relaxed">
              <p>C Kourtidou-Papadeli, Papadelis, C.L., J Vernikos, Bamidis, P.D., M Hitoglou-Antoniadou, Perantoni, E. and E Vlachogiannis (2008). The Therapeutic Benefits of Gravity in Space and on Earth. <em>Hippokratia</em>, [online] 12(Suppl 1), p.28. Available at: https://pmc.ncbi.nlm.nih.gov/articles/PMC2577396/.</p>
              <p>CoasterForce (2023). ROLLER COASTER PHYSICS &amp; G FORCES. [online] COASTERFORCE. Available at: https://coasterforce.com/physics/.</p>
              <p>Kumar, K.V. and Norfleet, W.T. (1992). Issues on human acceleration tolerance after long-duration space flights. <em>ntrs.nasa.gov</em>. [online] Available at: https://ntrs.nasa.gov/citations/19930020462.</p>
              <p>Lunar and Planetary Institute (LPI). (2024). Lunar Orbiter: Impact Crater Geology. [online] Available at: https://www.lpi.usra.edu/lunar/missions/orbiter/lunar_orbiter/impact_crater/.</p>
              <p>NASA (2024). Lunar Craters - NASA Science. [online] Nasa.gov. Available at: https://science.nasa.gov/moon/lunar-craters/.</p>
              <p>Omar, H. (n.d.). PRODUCTION OF LUNAR CONCRETE USING MOLTEN SULFUR Final Research Report for JoVe NASA Grant NAG8-278. [online] Available at: https://ntrs.nasa.gov/api/citations/19980001900/downloads/19980001900.pdf.</p>
              <p>Robbins, S.J. (2019). A New Global Database of Lunar Impact Craters &gt;1–2 km: 1. Crater Locations and Sizes, Comparisons With Published Databases, and Global Analysis. <em>Journal of Geophysical Research: Planets</em>, 124(4), pp.871–892. doi:https://doi.org/10.1029/2018je005592.</p>
              <p>Sylos-Labini, F., Lacquaniti, F. and Ivanenko, Y.P. (2014). Human Locomotion under Reduced Gravity Conditions: Biomechanical and Neurophysiological Considerations. <em>BioMed Research International</em>, [online] 2014. doi:https://doi.org/10.1155/2014/547242.</p>
              <p>Werner, S.C. and Medvedev, S. (2010). The Lunar rayed-crater population — Characteristics of the spatial distribution and ray retention. <em>Earth and Planetary Science Letters</em>, 295(1-2), pp.147–158. doi:https://doi.org/10.1016/j.epsl.2010.03.036.</p>
            </ContentBlock>
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