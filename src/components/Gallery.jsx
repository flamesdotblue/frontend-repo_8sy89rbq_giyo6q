import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE2MjYwMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop', tag: 'Concerts' },
  { src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1600&auto=format&fit=crop', tag: 'Corporate' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop', tag: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1600&auto=format&fit=crop', tag: 'Others' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop', tag: 'Concerts' },
];

const filters = ['All', 'Weddings', 'Concerts', 'Corporate', 'Others'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? images : images.filter((i) => i.tag === active);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl font-bold text-center"
        >
          Our Past Events
        </motion.h2>
        <p className="text-center mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          A glimpse into the bespoke experiences we’ve crafted for our clients.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                active === f
                  ? 'bg-[#b64d6d] text-white border-[#b64d6d]'
                  : 'border-zinc-300 dark:border-zinc-700 hover:border-[#b64d6d] text-zinc-700 dark:text-zinc-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setLightbox(img.src)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 shadow hover:shadow-lg"
            >
              <img src={img.src} alt={img.tag} className="h-52 w-full object-cover group-hover:scale-105 transition duration-500" />
              <span className="absolute left-2 top-2 text-xs px-2 py-1 rounded-full bg-black/60 text-white">{img.tag}</span>
            </motion.button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((t) => (
            <div key={t} className="rounded-2xl p-5 bg-gradient-to-br from-[#f8f7fb] to-white dark:from-zinc-900 dark:to-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                “ArtCulture turned our vision into reality. Flawless execution and breathtaking details.”
              </p>
              <p className="mt-3 text-xs text-zinc-500">— Happy Client #{t}</p>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/80 grid place-items-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Preview"
              className="max-h-[85vh] w-auto rounded-2xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
