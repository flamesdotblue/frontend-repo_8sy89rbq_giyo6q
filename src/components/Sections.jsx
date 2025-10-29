import { motion } from 'framer-motion';
import { Building2, Briefcase, Music, Home, CreditCard, Wallet, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Weddings',
    icon: Home,
    img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Corporate',
    icon: Briefcase,
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Concerts',
    icon: Music,
    img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'House Warmings',
    icon: Building2,
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
];

const vendors = [
  { title: 'Caterers', rating: 4.9, img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Decorators', rating: 4.8, img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Photographers', rating: 4.9, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Performers', rating: 4.7, img: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81a?q=80&w=1600&auto=format&fit=crop' },
];

export default function Sections() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl font-bold text-center"
        >
          Crafting Unforgettable Experiences
        </motion.h2>
        <p className="text-center mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Explore our bespoke event planning services, tailored to create moments you’ll cherish forever.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6" role="list">
          {services.map((s, idx) => (
            <motion.a
              key={s.title}
              href="#portfolio"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 shadow-sm hover:shadow-lg transition"
            >
              <img src={s.img} alt={s.title} className="h-44 w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white">
                <s.icon size={18} />
                <span className="font-medium">{s.title}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div id="vendors" className="mt-20">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">Curated Vendors</h3>
            <a href="#contact" className="text-sm text-[#b64d6d] hover:underline">Contact Vendor</a>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {vendors.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800 bg-white/70 dark:bg-zinc-900/60"
              >
                <img src={v.img} alt={v.title} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{v.title}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#e5c3a3]/30 text-[#b64d6d]">★ {v.rating}</span>
                  </div>
                  <p className="text-sm mt-2 text-zinc-600 dark:text-zinc-400">Top-rated partners for flawless experiences.</p>
                  <button className="mt-3 w-full text-sm px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-[#b64d6d] hover:bg-[#b64d6d]/10 transition">
                    Contact Vendor
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="payments" className="mt-20">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center">Secure Payments</h3>
          <p className="text-center mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Multiple options: Cards, UPI, Stripe, Razorpay, and MetaMask for blockchain/NFT transactions.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <PaymentCard icon={CreditCard} title="Cards" desc="Visa • MasterCard • AmEx" />
            <PaymentCard icon={Wallet} title="UPI & Wallets" desc="UPI • Apple Pay • GPay" />
            <PaymentCard icon={ShieldCheck} title="Encrypted" desc="PCI DSS • 256-bit SSL" />
          </div>
          <div className="mt-6 mx-auto max-w-xl text-center text-sm text-zinc-600 dark:text-zinc-400">
            Wallet summary and invoice generator available on request.
          </div>
        </div>

        <div id="admin" className="mt-20">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center">Admin Dashboard (Preview)</h3>
          <p className="text-center mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Manage bookings, vendors, payments and analytics — all in one clean dashboard.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard label="Client Bookings" value="128" trend="↑ 12%" />
            <StatCard label="Vendor Requests" value="32" trend="→ Stable" />
            <StatCard label="Payments" value="$48k" trend="↑ 8%" />
            <StatCard label="Notifications" value="7" trend="New" />
          </div>
          <div className="mt-6 rounded-2xl h-48 bg-gradient-to-br from-[#b64d6d]/10 to-[#e5c3a3]/20 ring-1 ring-zinc-200 dark:ring-zinc-800 grid place-items-center text-sm text-zinc-700 dark:text-zinc-300">
            Analytics & Reports Chart Preview
          </div>
        </div>
      </div>
    </section>
  );
}

function PaymentCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl p-5 bg-white/80 dark:bg-zinc-900/60 ring-1 ring-zinc-200 dark:ring-zinc-800 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#b64d6d]/10 text-[#b64d6d] grid place-items-center">
          <Icon size={18} />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, trend }) {
  return (
    <div className="rounded-2xl p-5 bg-white/80 dark:bg-zinc-900/60 ring-1 ring-zinc-200 dark:ring-zinc-800 shadow-sm">
      <p className="text-xs text-zinc-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      <p className="text-xs mt-1 text-[#b64d6d]">{trend}</p>
    </div>
  );
}
