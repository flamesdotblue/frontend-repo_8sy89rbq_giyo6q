import { motion } from 'framer-motion';
import { Star, Moon, Sun, ChevronRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Vendors', href: '#vendors' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ darkMode, onToggleDark }) {
  return (
    <header id="home" className="relative">
      <div className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200/60 dark:border-zinc-800">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          <a href="#home" className="font-serif text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-[#b64d6d]">Art</span>Culture
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-[#b64d6d] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={onToggleDark}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-100 hover:ring-2 ring-[#e5c3a3] transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>

      <section className="relative pt-28 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f7fb] via-[#f8f7fb] to-transparent dark:from-[#0b0b0e] dark:via-[#0b0b0e] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[#b64d6d]/10 text-[#b64d6d] text-xs font-semibold mb-4">Luxury • Creativity • Precision</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Your Perfect Event
              <br />
              Brought to Life
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 md:text-lg">
              From intimate gatherings to grand celebrations, ArtCulture creates unforgettable moments for weddings, concerts, and more.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#b64d6d] text-white shadow hover:shadow-md transition"
              >
                Start Planning <ChevronRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-[#e5c3a3] text-zinc-800 dark:text-zinc-100 hover:bg-[#e5c3a3]/20 transition"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="flex text-[#e5c3a3]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#e5c3a3" className="text-[#e5c3a3]" />
                ))}
              </div>
              <span>Trusted by 1000+ clients</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1640&auto=format&fit=crop"
                alt="Elegant event setting"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </header>
  );
}
